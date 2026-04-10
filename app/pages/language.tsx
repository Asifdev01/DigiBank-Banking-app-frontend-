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

const Language = () => {
    const router = useRouter();
    const [selectedLanguage, setSelectedLanguage] = useState('English (US)');

    const languages = [
        { name: 'English (US)', flag: '🇺🇸' },
        { name: 'English (UK)', flag: '🇬🇧' },
        { name: 'Spanish', flag: '🇪🇸' },
        { name: 'French', flag: '🇫🇷' },
        { name: 'German', flag: '🇩🇪' },
        { name: 'Japanese', flag: '🇯🇵' },
        { name: 'Chinese', flag: '🇨🇳' },
        { name: 'Hindi', flag: '🇮🇳' },
    ];

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
                <Text style={styles.title}>Language</Text>
                <View style={{ width: 40 }} />
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.content}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.card}>
                    {languages.map((lang, index) => (
                        <View key={lang.name}>
                            <TouchableOpacity
                                style={styles.langOption}
                                onPress={() => setSelectedLanguage(lang.name)}
                                activeOpacity={0.7}
                            >
                                <Text style={styles.flag}>{lang.flag}</Text>
                                <Text style={[styles.langName, selectedLanguage === lang.name && styles.selectedText]}>
                                    {lang.name}
                                </Text>
                                {selectedLanguage === lang.name && (
                                    <Ionicons name="checkmark-sharp" size={20} color="#B1D4BB" />
                                )}
                            </TouchableOpacity>
                            {index < languages.length - 1 && <View style={styles.separator} />}
                        </View>
                    ))}
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default Language;

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
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    langOption: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15,
    },
    flag: {
        fontSize: 24,
        marginRight: 15,
    },
    langName: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '500',
        color: '#1a1a1a',
    },
    selectedText: {
        color: '#B1D4BB',
        fontWeight: '700',
    },
    separator: {
        height: 1,
        backgroundColor: '#f5f5f5',
        marginLeft: 55,
    },
});
