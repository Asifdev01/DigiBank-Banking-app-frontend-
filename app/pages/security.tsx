import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const Security = () => {
    const router = useRouter();

    const renderSecurityOption = (icon: any, title: string, description: string) => (
        <TouchableOpacity style={styles.optionCard} activeOpacity={0.7}>
            <View style={styles.iconContainer}>
                <Ionicons name={icon} size={24} color="#1a1a1a" />
            </View>
            <View style={styles.optionText}>
                <Text style={styles.optionTitle}>{title}</Text>
                <Text style={styles.optionDescription}>{description}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
        </TouchableOpacity>
    );

    return (
        <LinearGradient
            colors={["#dee8e6ff", "#B1D4BB"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.container}
        >
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => router.back()}
                    style={styles.backButton}
                    activeOpacity={0.7}
                >
                    <Ionicons name="chevron-back" size={28} color="#1a1a1a" />
                </TouchableOpacity>
                <Text style={styles.title}>Security</Text>
                <View style={{ width: 40 }} />
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.content}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Login & Protection</Text>
                    {renderSecurityOption('finger-print-outline', 'Biometric Authentication', 'Use FaceID or Fingerprint to login')}
                    {renderSecurityOption('lock-closed-outline', 'Change Password', 'Update your login password regularly')}
                    {renderSecurityOption('phone-portrait-outline', 'Two-Factor Authentication', 'Add an extra layer of security')}
                </View>

                <View style={[styles.section, { marginTop: 20 }]}>
                    <Text style={styles.sectionTitle}>Device Management</Text>
                    {renderSecurityOption('desktop-outline', 'Trusted Devices', 'Manage devices where you are logged in')}
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default Security;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 60 : 50,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    backButton: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '700',
        color: '#1a1a1a',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    scrollContent: {
        paddingBottom: 150,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '700',
        color: '#999',
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 15,
        marginLeft: 10,
    },
    optionCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 24,
        padding: 20,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 16,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    },
    optionText: {
        flex: 1,
    },
    optionTitle: {
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '600',
        color: '#1a1a1a',
    },
    optionDescription: {
        fontSize: 12,
        fontFamily: 'Poppins',
        color: '#999',
        marginTop: 2,
    },
});
