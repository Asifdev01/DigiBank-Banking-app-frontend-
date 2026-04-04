import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');
const KEY_SIZE = (width - 32 - 40 - 24) / 3;

interface NumericKeypadProps {
    onKeyPress: (key: string) => void;
}

const NumericKeypad: React.FC<NumericKeypadProps> = ({ onKeyPress }) => {
    const keypadRows = [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
        ['.', '0', 'backspace'],
    ];

    return (
        <View style={styles.keypad}>
            {keypadRows.map((row, ri) => (
                <View key={ri} style={styles.kRow}>
                    {row.map((key, ki) => {
                        if (key === '') {
                            return <View key={ki} style={styles.kEmpty} />;
                        }
                        return (
                            <TouchableOpacity
                                key={ki}
                                style={styles.kBtn}
                                activeOpacity={0.6}
                                onPress={() => onKeyPress(key)}
                            >
                                {key === 'backspace' ? (
                                    <Ionicons name="backspace-outline" size={22} color="#333" />
                                ) : (
                                    <Text style={styles.kText}>{key}</Text>
                                )}
                            </TouchableOpacity>
                        );
                    })}
                </View>
            ))}
        </View>
    );
};

export default NumericKeypad;

const styles = StyleSheet.create({
    keypad: {
        flex: 1,
        justifyContent: 'center',
    },
    kRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
    },
    kBtn: {
        width: KEY_SIZE,
        height: KEY_SIZE * 0.52,
        backgroundColor: '#f4f4f4',
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    kEmpty: {
        width: KEY_SIZE,
        height: KEY_SIZE * 0.52,
    },
    kText: {
        fontSize: 22,
        fontFamily: 'Poppins',
        fontWeight: '500',
        color: '#1a1a1a',
    },
});
