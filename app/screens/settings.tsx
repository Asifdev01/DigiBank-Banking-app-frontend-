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

const Settings = () => {
    const router = useRouter();

    const renderSettingItem = ({ icon, label, onPress, color = '#1a1a1a' }: { icon: any, label: string, onPress?: () => void, color?: string }) => (
        <TouchableOpacity style={styles.settingItem} activeOpacity={0.7} onPress={onPress}>
            <View style={[styles.iconContainer, { backgroundColor: color + '15' }]}>
                <Ionicons name={icon} size={22} color={color} />
            </View>
            <Text style={styles.settingLabel}>{label}</Text>
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
                <Text style={styles.title}>Settings</Text>
                <View style={{ width: 40 }} />
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.content}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={[styles.card, { marginTop: 10 }]}>
                    <Text style={styles.sectionTitle}>Account</Text>
                    {renderSettingItem({ icon: 'person-outline', label: 'Profile', onPress: () => router.push('/pages/profile') })}
                    <View style={styles.separator} />
                    {renderSettingItem({ icon: 'card-outline', label: 'Payment Methods', onPress: () => router.push('/pages/payment-methods') })}
                    <View style={styles.separator} />
                    {renderSettingItem({ icon: 'shield-checkmark-outline', label: 'Security', onPress: () => router.push('/pages/security') })}
                </View>

                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>Preferences</Text>
                    {renderSettingItem({ icon: 'notifications-outline', label: 'Notifications', onPress: () => router.push('/pages/notifications') })}
                    <View style={styles.separator} />
                    {renderSettingItem({ icon: 'eye-outline', label: 'Appearance', onPress: () => router.push('/pages/appearance') })}
                    <View style={styles.separator} />
                    {renderSettingItem({ icon: 'language-outline', label: 'Language', onPress: () => router.push('/pages/language') })}
                </View>

                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>Support</Text>
                    {renderSettingItem({ icon: 'help-circle-outline', label: 'Help Center', onPress: () => router.push('/pages/help-center') })}
                    <View style={styles.separator} />
                    {renderSettingItem({ icon: 'document-text-outline', label: 'Terms & Privacy', onPress: () => router.push('/pages/terms-privacy') })}
                </View>

                <TouchableOpacity style={styles.logoutButton} activeOpacity={0.8}>
                    <Ionicons name="log-out-outline" size={22} color="#ffffffff" />
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>

                <View style={{ height: 100 }} />
            </ScrollView>
        </LinearGradient>
    );
};

export default Settings;

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
    card: {
        backgroundColor: '#fff',
        borderRadius: 24,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '700',
        color: '#999',
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 15,
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    },
    settingLabel: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '500',
        color: '#1a1a1a',
    },
    separator: {
        height: 1,
        backgroundColor: '#f5f5f5',
        marginLeft: 55,
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff0000ff',
        paddingVertical: 16,
        borderRadius: 20,
        marginTop: 10,
        gap: 10,
    },
    logoutText: {
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '600',
        color: '#ffffffff',
    },
});