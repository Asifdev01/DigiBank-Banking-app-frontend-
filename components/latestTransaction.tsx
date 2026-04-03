import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

interface LatestTransactionProps {
    name?: string;
    time?: string;
    amount?: string;
    image?: any;
    style?: ViewStyle;
}

const LatestTransaction = ({
    name = "Ashutosh Pathy",
    time = "1 min ago",
    amount = "₹2,000",
    image = require("../assets/images/user.png"),
    style
}: LatestTransactionProps) => {
    return (
        <View style={[styles.wrapper, style]}>
            <TouchableOpacity style={[styles.cardBase, styles.mainCard]} activeOpacity={0.8}>
                <Image source={image} style={styles.profile} />

                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.time}>{time}</Text>
                </View>

                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{amount}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default LatestTransaction

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        marginVertical: 10,

    },
    cardBase: {
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.05)",
    },
    mainCard: {
        zIndex: 4,
        backgroundColor: "#fff",
    },
    backCard1: {
        position: "absolute",
        top: 6,
        left: "2%",
        right: "2%",
        zIndex: 3,
        opacity: 0.9,
    },
    backCard2: {
        position: "absolute",
        top: 12,
        left: "4%",
        right: "4%",
        zIndex: 2,
        opacity: 0.7,
    },
    backCard3: {
        position: "absolute",
        top: 18,
        left: "6%",
        right: "6%",
        zIndex: 1,
        opacity: 0.5,
    },
    nameContainer: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'center',
    },
    name: {
        fontSize: 16,
        fontFamily: "Poppins",
        fontWeight: '600',
        color: "#1a1a1a",
    },
    time: {
        fontSize: 12,
        color: "#999",
        marginTop: 2,
        fontFamily: "Poppins",
    },
    amountContainer: {
        alignItems: 'flex-end',
    },
    amount: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
        fontFamily: "Poppins",
    },
    profile: {
        width: 44,
        height: 44,
        borderRadius: 24,
    },
});