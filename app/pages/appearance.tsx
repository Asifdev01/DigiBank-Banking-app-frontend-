import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const Appearance = () => {
    const router = useRouter();
    const [theme, setTheme] = useState('Light');

    const renderThemeOption = (name: string, icon: any) => (
        <TouchableOpacity
            style={[styles.themeOption, theme === name && styles.selectedOption]}
            onPress={() => setTheme(name)}
            activeOpacity={0.7}
        >
            <Ionicons name={icon} size={30} color={theme === name ? '#B1D4BB' : '#ccc'} />
            <Text style={[styles.themeName, theme === name && styles.selectedText]}>{name}</Text>
            {theme === name && (
                <View style={styles.checkContainer}>
                    <Ionicons name="checkmark-circle" size={20} color="#B1D4BB" />
                </View>
            )}
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
                <Text style={styles.title}>Appearance</Text>
                <View style={{ width: 40 }} />
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.content}
                contentContainerStyle={styles.scrollContent}
            >
                <Text style={styles.sectionTitle}>Choose Theme</Text>
                <View style={styles.themeGrid}>
                    {renderThemeOption('Light', 'sunny-outline')}
                    {renderThemeOption('Dark', 'moon-outline')}
                    {renderThemeOption('System', 'settings-outline')}
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Font Size</Text>
                    <View style={styles.fontControls}>
                        <Text style={[styles.fontLabel, { fontSize: 14 }]}>A</Text>
                        <View style={styles.sliderPlaceholder} />
                        <Text style={[styles.fontLabel, { fontSize: 20 }]}>A</Text>
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default Appearance;

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
    sectionTitle: {
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '700',
        color: '#999',
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 20,
        marginLeft: 10,
    },
    themeGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 25,
    },
    themeOption: {
        backgroundColor: '#fff',
        width: '31%',
        aspectRatio: 0.9,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
        position: 'relative',
    },
    selectedOption: {
        borderWidth: 2,
        borderColor: '#B1D4BB',
    },
    themeName: {
        marginTop: 10,
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '500',
        color: '#ccc',
    },
    selectedText: {
        color: '#1a1a1a',
    },
    checkContainer: {
        position: 'absolute',
        top: 8,
        right: 8,
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
    cardTitle: {
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '600',
        color: '#1a1a1a',
        marginBottom: 20,
    },
    fontControls: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    fontLabel: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        color: '#1a1a1a',
    },
    sliderPlaceholder: {
        flex: 1,
        height: 4,
        backgroundColor: '#f5f5f5',
        marginHorizontal: 20,
        borderRadius: 2,
    },
});
