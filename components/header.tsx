import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

interface HeaderProps {
    style?: ViewStyle;
    name?: string;
    avatar?: any;
}

const Header = ({ style, name, avatar }: HeaderProps) => {
    const router = useRouter();

    return (
        <View style={[styles.header, style]}>
            <View style={styles.leftContainer}>
                <View style={styles.profile}>
                    <Image 
                        source={avatar ? { uri: avatar } : require("../assets/images/prof.jpg")} 
                        style={styles.profile} 
                    />
                </View>
                <View style={styles.headerText}>
                    <Text style={styles.mainHeaderText}>Hi {name || 'Asif'}!</Text>
                    <Text style={styles.subHeaderText}>Welcome to your bank</Text>
                </View>
            </View>

            <TouchableOpacity
                style={styles.notificationButton}
                activeOpacity={0.7}
                onPress={() => router.push('/pages/notifications')}
            >
                <Ionicons name="notifications-outline" size={26} color="#1a1a1a" />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: '100%',
    },
    leftContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 25,
        overflow: "hidden",
    },
    headerText: {
        flexDirection: "column",
        gap: 2,
    },
    mainHeaderText: {
        fontSize: 20,
        color: "#1a1a1a",
        fontFamily: "Poppins_700Bold",
    },
    subHeaderText: {
        fontSize: 14,
        color: "#666",
        fontFamily: "Poppins",
    },
    notificationButton: {
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
})