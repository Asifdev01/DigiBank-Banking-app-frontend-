import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { AUTH_URL } from '../../components/config/api';

const Signup = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const handleSignup = () => {
        // Placeholder for real signup logic
        router.replace("/");
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <LinearGradient
                colors={["#dee8e6ff", "#B1D4BB"]}
                style={styles.gradient}
            >
                <View style={styles.content}>
                    <View style={styles.illustrationContainer}>
                        <Image
                            source={require("../../assets/images/app-icon.png")}
                            style={styles.illustration}
                            resizeMode="contain"
                        />
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.titleText}>Sign Up</Text>
                        <Text style={styles.subtitleText}>Use proper information to continue</Text>

                        <View style={styles.inputWrapper}>
                            <View style={styles.inputContainer}>
                                <Ionicons name="person-outline" size={20} color="#999" />
                                <TextInput
                                    placeholder="Full name"
                                    placeholderTextColor="#999"
                                    style={styles.input}
                                    value={username}
                                    onChangeText={setUsername}
                                />
                            </View>

                            <View style={styles.inputContainer}>
                                <Ionicons name="mail-outline" size={20} color="#999" />
                                <TextInput
                                    placeholder="Email address"
                                    placeholderTextColor="#999"
                                    style={styles.input}
                                    keyboardType="email-address"
                                />
                            </View>

                            <View style={styles.inputContainer}>
                                <Ionicons name="lock-closed-outline" size={20} color="#999" />
                                <TextInput
                                    placeholder="Password"
                                    placeholderTextColor="#999"
                                    style={styles.input}
                                    secureTextEntry={!isPasswordVisible}
                                    value={password}
                                    onChangeText={setPassword}
                                />
                                <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                    <Ionicons name={isPasswordVisible ? "eye-off-outline" : "eye-outline"} size={20} color="#999" />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.termsRow}>
                                <Text style={styles.termsText}>By signing up, you are agree to our </Text>
                                <TouchableOpacity>
                                    <Text style={styles.linkText}>Terms & Conditions</Text>
                                </TouchableOpacity>
                                <Text style={styles.termsText}> and </Text>
                                <TouchableOpacity>
                                    <Text style={styles.linkText}>Privacy Policy</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <TouchableOpacity
                            style={styles.signupButton}
                            activeOpacity={0.8}
                            onPress={handleSignup}
                        >
                            <Text style={styles.signupButtonText}>Create Account</Text>
                        </TouchableOpacity>

                        <View style={styles.footer}>
                            <Text style={styles.footerText}>Already have an Account? </Text>
                            <TouchableOpacity onPress={() => router.push("/")}>
                                <Text style={styles.loginText}>Sign in</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
};

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    illustrationContainer: {
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    illustration: {
        width: '50%',
        height: '50%',
    },
    card: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 30,
        paddingTop: 40,
        paddingBottom: 40,
        minHeight: '70%',
    },
    titleText: {
        fontSize: 28,
        fontFamily: 'Poppins',
        fontWeight: '700',
        color: '#1a1a1a',
        textAlign: 'center',
    },
    subtitleText: {
        fontSize: 14,
        fontFamily: 'Poppins',
        color: '#666',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 30,
    },
    inputWrapper: {
        gap: 15,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f7fa',
        borderRadius: 15,
        paddingHorizontal: 15,
        height: 55,
        borderWidth: 1,
        borderColor: '#eef1f6',
    },
    input: {
        flex: 1,
        marginLeft: 10,
        fontSize: 15,
        fontFamily: 'Poppins',
        color: '#1a1a1a',
    },
    termsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 10,
    },
    termsText: {
        fontSize: 12,
        fontFamily: 'Poppins',
        color: '#999',
    },
    linkText: {
        fontSize: 12,
        fontFamily: 'Poppins',
        fontWeight: '700',
        color: '#007AFF',
    },
    signupButton: {
        backgroundColor: '#007AFF',
        borderRadius: 15,
        paddingVertical: 18,
        alignItems: 'center',
        marginTop: 30,
        shadowColor: '#007AFF',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
    },
    signupButtonText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Poppins',
        fontWeight: '600',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 40,
    },
    footerText: {
        fontSize: 14,
        fontFamily: 'Poppins',
        color: '#666',
    },
    loginText: {
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '700',
        color: '#007AFF',
    },
});