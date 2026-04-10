import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import {
    Dimensions,
    Image,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import NumericKeypad from '../../components/NumericKeypad';

const { width } = Dimensions.get('window');
const BOTTOM_INSET = Platform.OS === 'ios' ? 34 : 24;

export default function Payment() {
    const router = useRouter();
    const { name, account, avatar } = useLocalSearchParams();
    const [amount, setAmount] = useState('0');

    const handleKeyPress = (key: string) => {
        if (key === 'backspace') {
            setAmount((prev) => prev.slice(0, -1) || '0');
        } else if (key === '.') {
            if (!amount.includes('.')) {
                setAmount((prev) => prev + '.');
            }
        } else {
            if (amount === '0' && key !== '.') {
                setAmount(key);
            } else {
                setAmount((prev) => prev + key);
            }
        }
    };

    const formatAmount = (val: string) => {
        if (!val || val === '') return '$0';
        const parts = val.split('.');
        const intPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        if (parts.length > 1) {
            return `$${intPart}.${parts[1]}`;
        }
        return `$${intPart}`;
    };

    return (
        <LinearGradient
            colors={["#dee8e6ff", "#B1D4BB"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.screen}
        >
            <View style={styles.topBar}>
                <TouchableOpacity
                    onPress={() => router.back()}
                    style={styles.topBarBtn}
                    activeOpacity={0.7}
                >
                    <Ionicons name="chevron-back" size={24} color="#1a1a1a" />
                </TouchableOpacity>
                <Text style={styles.topTitle}>Pay</Text>
                <TouchableOpacity style={styles.topBarBtn} activeOpacity={0.7}>
                    <Ionicons name="people-outline" size={22} color="#1a1a1a" />
                </TouchableOpacity>
            </View>

            <View style={styles.card}>
                <View style={styles.chipRow}>
                    <TouchableOpacity style={styles.chip} activeOpacity={0.8}>
                        <View style={styles.mcDots}>
                            <View style={[styles.mcDot, { backgroundColor: '#EB001B' }]} />
                            <View style={[styles.mcDot, { backgroundColor: '#F79E1B', marginLeft: -6 }]} />
                        </View>
                        <Text style={styles.chipText}>**** 2872</Text>
                        <Ionicons name="chevron-down" size={16} color="#fff" style={{ marginLeft: 4 }} />
                    </TouchableOpacity>
                </View>

                <View style={styles.recipientRow}>
                    <Image
                        source={avatar ? { uri: avatar as string } : require('../../assets/images/user.png')}
                        style={styles.avatar}
                    />
                    <View style={styles.recipientInfo}>
                        <Text style={styles.recipientName}>{name || 'Ashutosh Pathy'}</Text>
                        <Text style={styles.recipientAcct}>{account || '1111 *** **** 1720'}</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => router.push('/screens/contacts')}>
                        <Text style={styles.changeLink}>Change</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.amountBlock}>
                    <Text
                        style={styles.amountText}
                        numberOfLines={1}
                        adjustsFontSizeToFit
                    >
                        {formatAmount(amount)}
                    </Text>
                    <Text style={styles.balanceLabel}>Balance: $126,887.09</Text>
                </View>

                <View style={styles.noteRow}>
                    <Ionicons name="chatbubble-ellipses-outline" size={16} color="#bbb" />
                    <TextInput
                        placeholder="Note"
                        placeholderTextColor="#ccc"
                        style={styles.noteInput}
                    />
                </View>
                <View style={styles.divider} />

                <NumericKeypad onKeyPress={handleKeyPress} />

                <TouchableOpacity style={styles.sendBtn} activeOpacity={0.85}>
                    <Text style={styles.sendText}>Send</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 56 : 44,
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 12,
    },
    topBarBtn: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topTitle: {
        fontSize: 18,
        fontFamily: 'Poppins',
        fontWeight: '600',
        color: '#1a1a1a',
    },
    card: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        borderBottomLeftRadius: 28,
        borderBottomRightRadius: 28,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 40,
        shadowColor: 'rgba(0, 0, 0, 0.02)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 2,
        borderWidth: 1,
        borderColor: 'rgba(27, 31, 35, 0.15)',
        height: '90%',
    },
    chipRow: {
        alignItems: 'center',
        marginBottom: 12,
    },
    chip: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1a1a1a',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
    },
    mcDots: {
        flexDirection: 'row',
        marginRight: 8,
    },
    mcDot: {
        width: 18,
        height: 18,
        borderRadius: 9,
    },
    chipText: {
        color: '#fff',
        fontSize: 13,
        fontFamily: 'Poppins',
        fontWeight: '600',
        letterSpacing: 1,
    },
    recipientRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#eee',
        marginTop: 10,
    },
    recipientInfo: {
        flex: 1,
        marginLeft: 12,
    },
    recipientName: {
        fontSize: 15,
        fontFamily: 'Poppins',
        fontWeight: '600',
        color: '#1a1a1a',
    },
    recipientAcct: {
        fontSize: 12,
        fontFamily: 'Poppins',
        color: '#aaa',
        marginTop: 1,
    },
    changeLink: {
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '500',
        color: '#999',
    },
    amountBlock: {
        alignItems: 'center',
        marginBottom: 24,
        marginTop: 10,
    },
    amountText: {
        fontSize: 38,
        fontFamily: 'Poppins',
        fontWeight: '700',
        color: '#1a1a1a',
        letterSpacing: -1,
    },
    balanceLabel: {
        fontSize: 13,
        fontFamily: 'Poppins',
        color: '#bbb',
        marginTop: 2,
    },
    noteRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 4,
        marginBottom: 6,
    },
    noteInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 14,
        fontFamily: 'Poppins',
        color: '#333',
        paddingVertical: 2,
    },
    divider: {
        height: 1,
        backgroundColor: '#f0f0f0',
        marginBottom: 12,
    },
    sendBtn: {
        backgroundColor: '#1a1a1a',
        borderRadius: 18,
        paddingVertical: 14,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 6,
    },
    sendText: {
        color: '#fff',
        fontSize: 17,
        fontFamily: 'Poppins',
        fontWeight: '600',
    },
});