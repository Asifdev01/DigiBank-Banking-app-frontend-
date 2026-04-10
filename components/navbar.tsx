import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";

function Navbar({ style }: { style?: ViewStyle }) {
    const router = useRouter();
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    const navigate = (path: string) => {
        if (!isActive(path)) {
            router.replace(path as any);
        }
    };

    return (
        <View style={[styles.container, style]}>
            <TouchableOpacity
                style={styles.navItem}
                activeOpacity={0.7}
                onPress={() => navigate("/dashboard")}
            >
                <Ionicons
                    name={isActive("/dashboard") ? "home" : "home-outline"}
                    size={26}
                    color={isActive("/dashboard") ? "#000" : "#999"}
                />
                <Text style={[styles.label, isActive("/dashboard") && styles.labelActive]}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.middleButtonContainer}
                activeOpacity={0.7}
                onPress={() => navigate("/screens/qrCamera")}
            >
                <View style={styles.middleButton}>
                    <Ionicons name="qr-code-outline" size={35} color="#fff" />
                </View>
                <Text style={styles.labelActive}>Scanner</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.navItem}
                activeOpacity={0.7}
                onPress={() => navigate("/screens/settings")}
            >
                <Ionicons
                    name={isActive("/screens/settings") ? "settings" : "settings-outline"}
                    size={26}
                    color={isActive("/screens/settings") ? "#000" : "#999"}
                />
                <Text style={[styles.label, isActive("/screens/settings") && styles.labelActive]}>Settings</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        width: "92%",
        height: 80,
        borderRadius: 40,
        paddingBottom: 5,
        gap: 50,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.15,
        shadowRadius: 20,
        elevation: 10,
        alignSelf: "center",
    },
    navItem: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    middleButtonContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: -15,
        padding: 5,
        backgroundColor: "#fff",
        borderRadius: 50,
    },
    middleButton: {
        backgroundColor: "#1A1A1A",
        width: 60,
        height: 60,
        borderRadius: 28,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    label: {
        fontSize: 11,
        color: "#999",
        marginTop: 4,
        fontFamily: "Poppins",
        fontWeight: "500",
    },
    labelActive: {
        color: "#000",
        fontWeight: "700",
    },
});

export default Navbar;