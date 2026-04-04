import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'

const BalanceCard = ({ style }: { style?: ViewStyle }) => {
    const router = useRouter()
    const [isVisible, setIsVisible] = useState(true)

    return (
        <View style={styles.balanceContainer}>
            <View style={styles.balanceCard}>
                <View style={styles.inrRow}>
                    <Text style={styles.inr}>INR</Text>
                    <TouchableOpacity
                        onPress={() => setIsVisible(!isVisible)}
                        style={styles.eyeBtn}
                    >
                        <Ionicons
                            name={isVisible ? "eye-outline" : "eye-off-outline"}
                            size={22}
                            color="rgba(0,0,0,0.6)"
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.balance}>
                    {isVisible ? "₹12,192.07" : "₹ ••••••••"}
                </Text>
                {isVisible && (
                    <Text style={styles.recentTransactions}>
                        + ₹2,000.00
                    </Text>
                )}
            </View>

            <View style={styles.actionRow}>
                <TouchableOpacity 
                    style={styles.actionButton} 
                    activeOpacity={0.7}
                    onPress={() => router.push("/screens/payment")}
                >
                    <Image source={require("../assets/images/send-icon.png")} style={styles.actionIcon} />
                    <Text style={styles.actionText}>Pay</Text>
                </TouchableOpacity>
                <View style={styles.divider} />
                <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
                    <Image source={require("../assets/images/transfer-icon.png")} style={styles.actionIcon} />
                    <Text style={styles.actionText}>Transfer</Text>
                </TouchableOpacity>
                <View style={styles.divider} />
                <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
                    <Image source={require("../assets/images/recive-icon.png")} style={styles.actionIcon} />
                    <Text style={styles.actionText}>Receive</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BalanceCard

const styles = StyleSheet.create({
    balanceContainer: {
        width: "100%",
        height: "35%",
        backgroundColor: "#ffffffff",
        borderRadius: 30,
        overflow: "hidden",
        padding: 10,
        marginTop: 20,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.05)",
    },
    balanceCard: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "70%",
        borderRadius: 30,
        backgroundColor: "#fdff7f",
        padding: 20,
        gap: 5,
    },
    inrRow: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: -5,
    },
    eyeBtn: {
        position: "absolute",
        right: 10,
    },
    inr: {
        fontSize: 18,
        color: "#000",
        fontFamily: "Poppins",
        fontWeight: "600",
        opacity: 0.6,
    },
    balance: {
        fontSize: 45,
        color: "#000",
        fontFamily: "Poppins",
        fontWeight: "bold",
    },
    recentTransactions: {
        fontSize: 16,
        color: "#000",
        fontFamily: "Poppins",
        fontWeight: "600",
    },
    actionRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        height: "30%",
        paddingVertical: 10,
        marginTop: 10,
    },
    actionButton: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        gap: 4,
        color: "#000",
    },
    actionIcon: {
        width: 24,
        height: 24,
        resizeMode: "contain",
    },
    actionText: {
        fontSize: 14,
        color: "#666",
        fontFamily: "Poppins",
    },
    divider: {
        width: 1,
        height: "60%",
        backgroundColor: "#eee",
    },
})