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

const PaymentMethods = () => {
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
                <Text style={styles.title}>Payment Methods</Text>
                <TouchableOpacity style={styles.addButton} activeOpacity={0.7}>
                    <Ionicons name="add" size={28} color="#1a1a1a" />
                </TouchableOpacity>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.content}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.card}>
                    <Ionicons name="card-outline" size={60} color="#B1D4BB" style={{ marginBottom: 20 }} />
                    <Text style={styles.placeholderText}>You haven't added any payment methods yet.</Text>
                    <TouchableOpacity style={styles.primaryButton}>
                        <Text style={styles.buttonText}>Add New Card</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default PaymentMethods;

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
    addButton: {
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
        padding: 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
        alignItems: 'center',
    },
    placeholderText: {
        fontSize: 16,
        fontFamily: 'Poppins',
        color: '#666',
        textAlign: 'center',
        marginBottom: 30,
    },
    primaryButton: {
        backgroundColor: '#1a1a1a',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '600',
    },
});
