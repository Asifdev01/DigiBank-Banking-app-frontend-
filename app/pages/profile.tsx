import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const Profile = () => {
    const router = useRouter();

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
                <Text style={styles.title}>Profile</Text>
                <TouchableOpacity
                    style={styles.editButton}
                    activeOpacity={0.7}
                >
                    <Ionicons name="create-outline" size={24} color="#1a1a1a" />
                </TouchableOpacity>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.content}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.profileCard}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={require("../../assets/images/prof.jpg")}
                            style={styles.avatar}
                        />
                        <TouchableOpacity style={styles.cameraButton}>
                            <Ionicons name="camera" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.userName}>Asif Dev</Text>
                    <Text style={styles.userEmail}>asif@example.com</Text>

                    <View style={styles.statsContainer}>
                        <View style={styles.statItem}>
                            <Text style={styles.statValue}>12</Text>
                            <Text style={styles.statLabel}>Cards</Text>
                        </View>
                        <View style={styles.statDivider} />
                        <View style={styles.statItem}>
                            <Text style={styles.statValue}>$4,250</Text>
                            <Text style={styles.statLabel}>Spent</Text>
                        </View>
                        <View style={styles.statDivider} />
                        <View style={styles.statItem}>
                            <Text style={styles.statValue}>2.4k</Text>
                            <Text style={styles.statLabel}>Points</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.infoSection}>
                    <Text style={styles.sectionTitle}>Personal Information</Text>
                    <View style={styles.card}>
                        <View style={styles.infoItem}>
                            <Text style={styles.infoLabel}>Phone Number</Text>
                            <Text style={styles.infoValue}>+1 234 567 890</Text>
                        </View>
                        <View style={styles.separator} />
                        <View style={styles.infoItem}>
                            <Text style={styles.infoLabel}>Date of Birth</Text>
                            <Text style={styles.infoValue}>Jan 15, 1995</Text>
                        </View>
                        <View style={styles.separator} />
                        <View style={styles.infoItem}>
                            <Text style={styles.infoLabel}>Address</Text>
                            <Text style={styles.infoValue}>123 Banking Street, Digital City</Text>
                        </View>
                    </View>
                </View>

                <View style={{ height: 100 }} />
            </ScrollView>
        </LinearGradient>
    );
};

export default Profile;

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
    editButton: {
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
    profileCard: {
        backgroundColor: '#fff',
        borderRadius: 32,
        padding: 30,
        alignItems: 'center',
        marginBottom: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 5,
    },
    avatarContainer: {
        position: 'relative',
        marginBottom: 20,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 4,
        borderColor: '#f0f0f0',
    },
    cameraButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#1a1a1a',
        width: 36,
        height: 36,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#fff',
    },
    userName: {
        fontSize: 24,
        fontFamily: 'Poppins',
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: 4,
    },
    userEmail: {
        fontSize: 14,
        fontFamily: 'Poppins',
        color: '#999',
        marginBottom: 30,
    },
    statsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
    },
    statItem: {
        flex: 1,
        alignItems: 'center',
    },
    statValue: {
        fontSize: 18,
        fontFamily: 'Poppins',
        fontWeight: '700',
        color: '#1a1a1a',
    },
    statLabel: {
        fontSize: 12,
        fontFamily: 'Poppins',
        color: '#999',
    },
    statDivider: {
        width: 1,
        height: 30,
        backgroundColor: '#f0f0f0',
    },
    infoSection: {
        marginBottom: 25,
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
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    infoItem: {
        paddingVertical: 12,
    },
    infoLabel: {
        fontSize: 12,
        fontFamily: 'Poppins',
        color: '#999',
        marginBottom: 4,
    },
    infoValue: {
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '500',
        color: '#1a1a1a',
    },
    separator: {
        height: 1,
        backgroundColor: '#f5f5f5',
    },
});