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

const TermsPrivacy = () => {
    const router = useRouter();

    const renderSection = (title: string, content: string) => (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <Text style={styles.sectionContent}>{content}</Text>
        </View>
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
                <Text style={styles.title}>Terms & Privacy</Text>
                <View style={{ width: 40 }} />
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.content}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.card}>
                    <Text style={styles.updateDate}>Last updated: March 2026</Text>
                    
                    {renderSection('1. Acceptance of Terms', 'By accessing and using this banking application, you agree to be bound by these terms and conditions. If you do not agree to all of these terms, do not use this application.')}
                    
                    {renderSection('2. Privacy Policy', 'Your privacy is important to us. We collect and use your data only as necessary to provide banking services and maintain security. We do not sell your personal information to third parties.')}
                    
                    {renderSection('3. User Responsibilities', 'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.')}
                    
                    {renderSection('4. Limitation of Liability', 'In no event shall the bank be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use of this service.')}
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default TermsPrivacy;

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
        padding: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    updateDate: {
        fontSize: 12,
        fontFamily: 'Poppins',
        color: '#999',
        marginBottom: 20,
    },
    section: {
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: 10,
    },
    sectionContent: {
        fontSize: 14,
        fontFamily: 'Poppins',
        color: '#666',
        lineHeight: 22,
    },
});
