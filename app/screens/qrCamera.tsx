import { Ionicons } from "@expo/vector-icons";
import { Camera, CameraView } from "expo-camera";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
    Animated,
    Easing,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function QrCamera() {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [flash, setFlash] = useState<"off" | "on">("off");
    const router = useRouter();
    const scanAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();

        Animated.loop(
            Animated.sequence([
                Animated.timing(scanAnim, {
                    toValue: 240,
                    duration: 2000,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }),
                Animated.timing(scanAnim, {
                    toValue: 0,
                    duration: 2000,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    if (hasPermission === null) {
        return (
            <View style={styles.centered}>
                <Text style={styles.permissionText}>Requesting Camera Permission...</Text>
            </View>
        );
    }
    if (hasPermission === false) {
        return (
            <View style={styles.centered}>
                <Text style={styles.permissionText}>No access to camera</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <CameraView
                style={StyleSheet.absoluteFillObject}
                enableTorch={flash === "on"}
            />

            <View style={styles.overlayContainer}>
                <View style={styles.topMask} />
                <View style={styles.middleRow}>
                    <View style={styles.sideMask} />
                    <View style={styles.scannerFrame}>
                        <Animated.View
                            style={[
                                styles.laserLine,
                                {
                                    transform: [{ translateY: scanAnim }],
                                },
                            ]}
                        />
                        <View style={[styles.corner, styles.topLeft]} />
                        <View style={[styles.corner, styles.topRight]} />
                        <View style={[styles.corner, styles.bottomLeft]} />
                        <View style={[styles.corner, styles.bottomRight]} />
                    </View>
                    <View style={styles.sideMask} />
                </View>
                <View style={styles.bottomMask} />
            </View>

            <View style={styles.uiContainer}>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.circleButton}
                        onPress={() => router.replace('/')}
                    >
                        <Ionicons name="close" size={24} color="white" />
                    </TouchableOpacity>

                    <Text style={styles.headerTitle}>Scan QR Code</Text>

                    <TouchableOpacity
                        style={styles.circleButton}
                        onPress={() => setFlash(flash === "off" ? "on" : "off")}
                    >
                        <Ionicons
                            name={flash === "on" ? "flashlight" : "flashlight-outline"}
                            size={24}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.instructionText}>Position the QR code within the frame to pay</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
    },
    permissionText: {
        color: "white",
        fontSize: 16,
        fontFamily: "Poppins",
    },
    overlayContainer: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 1,
    },
    topMask: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.65)",
    },
    bottomMask: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.65)",
    },
    middleRow: {
        flexDirection: "row",
        height: 250,
    },
    sideMask: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.65)",
    },
    scannerFrame: {
        width: 250,
        height: 250,
        backgroundColor: "transparent",
        position: "relative",
        overflow: "hidden",
        borderRadius: 10,
    },
    laserLine: {
        width: "100%",
        height: 3,
        backgroundColor: "#B1D4BB",
        shadowColor: "#B1D4BB",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 10,
        position: 'absolute',
        top: 0,
        zIndex: 2,
    },
    corner: {
        position: "absolute",
        width: 30,
        height: 30,
        borderColor: "#B1D4BB",

    },
    topLeft: {
        top: 0,
        left: 0,
        borderTopWidth: 5,
        borderLeftWidth: 5,
        borderTopLeftRadius: 20,
    },
    topRight: {
        top: 0,
        right: 0,
        borderTopWidth: 5,
        borderRightWidth: 5,
        borderTopRightRadius: 20,
    },
    bottomLeft: {
        bottom: 0,
        left: 0,
        borderBottomWidth: 5,
        borderLeftWidth: 5,
        borderBottomLeftRadius: 20,
    },
    bottomRight: {
        bottom: 0,
        right: 0,
        borderBottomWidth: 5,
        borderRightWidth: 5,
        borderBottomRightRadius: 20,
    },
    uiContainer: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 2,
        justifyContent: "space-between",
        paddingVertical: 50,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: Platform.OS === 'ios' ? 20 : 0,
    },
    headerTitle: {
        color: "white",
        fontSize: 18,
        fontFamily: "Poppins",
        fontWeight: "700",
    },
    circleButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: "rgba(255,255,255,0.15)",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(10px)",
        marginTop: 10,
    },
    footer: {
        alignItems: "center",
        marginBottom: 100,
    },
    instructionText: {
        color: "white",
        fontSize: 15,
        fontFamily: "Poppins",
        fontWeight: "500",
        textAlign: "center",
        backgroundColor: "rgba(0,0,0,0.4)",
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 20,
        overflow: 'hidden',
    },
});