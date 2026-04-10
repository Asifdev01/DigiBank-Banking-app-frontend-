import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const HelpCenter = () => {
    const router = useRouter();

    const renderHelpItem = (icon: any, title: string) => (
        <TouchableOpacity style={styles.helpItem} activeOpacity={0.7}>
            <View style={styles.iconContainer}>
                <Ionicons name={icon} size={24} color="#1a1a1a" />
            </View>
            <Text style={styles.helpTitle}>{title}</Text>
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
                <Text style={styles.title}>Help Center</Text>
                <View style={{ width: 40 }} />
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.content}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.searchContainer}>
                    <Ionicons name="search-outline" size={20} color="#999" />
                    <TextInput
                        placeholder="How can we help?"
                        style={styles.searchInput}
                        placeholderTextColor="#999"
                    />
                </View>

                <Text style={styles.sectionTitle}>Frequently Asked</Text>
                <View style={styles.card}>
                    {renderHelpItem('card-outline', 'How to add a card?')}
                    <View style={styles.separator} />
                    {renderHelpItem('swap-horizontal-outline', 'Transaction status')}
                    <View style={styles.separator} />
                    {renderHelpItem('shield-checkmark-outline', 'Security concerns')}
                </View>

                <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Contact Support</Text>
                <View style={styles.contactContainer}>
                    <TouchableOpacity style={styles.contactCard}>
                        <Ionicons name="chatbubble-ellipses-outline" size={24} color="#B1D4BB" />
                        <Text style={styles.contactLabel}>Live Chat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.contactCard}>
                        <Ionicons name="mail-outline" size={24} color="#B1D4BB" />
                        <Text style={styles.contactLabel}>Email Us</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default HelpCenter;

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
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 15,
        height: 55,
        marginBottom: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        fontFamily: 'Poppins',
        color: '#1a1a1a',
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
    card: {
        backgroundColor: '#fff',
        borderRadius: 24,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    helpItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    },
    helpTitle: {
        flex: 1,
        fontSize: 15,
        fontFamily: 'Poppins',
        fontWeight: '500',
        color: '#1a1a1a',
    },
    separator: {
        height: 1,
        backgroundColor: '#f5f5f5',
        marginLeft: 65,
    },
    contactContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    contactCard: {
        backgroundColor: '#fff',
        width: '48%',
        paddingVertical: 20,
        borderRadius: 24,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    contactLabel: {
        marginTop: 10,
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '600',
        color: '#1a1a1a',
    },
});
