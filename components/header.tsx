import React from 'react'
import { Image, StyleSheet, Text, View, ViewStyle } from 'react-native'

const Header = ({ style }: { style?: ViewStyle }) => {
    return (
        <View style={[styles.header, style]}>
            <View style={styles.profile}>
                <Image source={require("../assets/images/prof.jpg")} style={styles.profile} />
            </View>
            <View style={styles.headerText}>
                <Text style={styles.mainHeaderText}>Hi Asif!</Text>
                <Text style={styles.subHeaderText}>Welcome to your bank</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    profile: {
        width: 50,
        height: 50,
        borderRadius: 25,
        overflow: "hidden",
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    headerText: {
        flexDirection: "column",
        gap: 5,
        fontFamily: "Poppins",
        fontWeight: "bold",
    },
    mainHeaderText: {
        fontSize: 21,
        color: "#000",
        fontFamily: "Poppins_700Bold",
    },
    subHeaderText: {
        fontSize: 16,
        color: "#000",
        fontFamily: "Poppins",
    },
})