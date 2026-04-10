import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { DATA_URL } from '../../components/config/api';
import {
    FlatList,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const Notifications = () => {
    const router = useRouter();
    const [notifications, setNotifications] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const res = await fetch(`${DATA_URL}/notifications`);
                const data = await res.json();
                setNotifications(data);
            } catch (err) {
                console.log("Notifications fetch error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchNotifications();
    }, []);

    const getIcon = (category: string) => {
        switch (category) {
            case 'payment': return { name: 'arrow-down-circle', color: '#4CAF50' };
            case 'security': return { name: 'shield-checkmark', color: '#F44336' };
            case 'promo': return { name: 'gift', color: '#9C27B0' };
            default: return { name: 'notifications', color: '#2196F3' };
        }
    };

    const renderNotificationItem = ({ item }: { item: any }) => {
        const icon = getIcon(item.category);
        return (
            <TouchableOpacity style={[styles.notificationCard, item.unread && styles.unreadCard]} activeOpacity={0.7}>
                <View style={styles.iconContainer}>
                    <Ionicons name={icon.name as any} size={24} color={icon.color} />
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.titleRow}>
                        <Text style={styles.titleText}>{item.title}</Text>
                        {item.unread && <View style={styles.unreadDot} />}
                    </View>
                    <Text style={styles.descriptionText} numberOfLines={2}>{item.description}</Text>
                    <Text style={styles.timeText}>{item.time}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <LinearGradient
            colors={["#dee8e6ff", "#B1D4BB"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.container}
        >
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="chevron-back" size={28} color="#1a1a1a" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Notifications</Text>
                <TouchableOpacity style={styles.clearButton}>
                    <Text style={styles.clearText}>Clear</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.contentCard}>
                {notifications.length > 0 ? (
                    <FlatList
                        data={notifications}
                        keyExtractor={(item) => item.id}
                        renderItem={renderNotificationItem}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.listContent}
                    />
                ) : (
                    <View style={styles.emptyContainer}>
                        <Ionicons name="notifications-off-outline" size={80} color="#ccc" />
                        <Text style={styles.emptyText}>All caught up!</Text>
                    </View>
                )}
            </View>
        </LinearGradient>
    );
};

export default Notifications;

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
    headerTitle: {
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '700',
        color: '#1a1a1a',
    },
    clearButton: {
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    clearText: {
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '600',
        color: '#666',
    },
    contentCard: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        paddingTop: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -10 },
        shadowOpacity: 0.05,
        shadowRadius: 15,
        elevation: 5,
    },
    listContent: {
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    notificationCard: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 20,
        marginBottom: 15,
        alignItems: 'center',
    },
    unreadCard: {
        backgroundColor: '#fff',
        borderWidth: 1.5,
        borderColor: '#B1D4BB',
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    textContainer: {
        flex: 1,
        marginLeft: 15,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    titleText: {
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '600',
        color: '#1a1a1a',
    },
    unreadDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#F44336',
    },
    descriptionText: {
        fontSize: 14,
        fontFamily: 'Poppins',
        color: '#666',
        lineHeight: 20,
    },
    timeText: {
        fontSize: 12,
        fontFamily: 'Poppins',
        color: '#999',
        marginTop: 6,
    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 100,
    },
    emptyText: {
        fontSize: 18,
        fontFamily: 'Poppins',
        fontWeight: '600',
        color: '#ccc',
        marginTop: 20,
    },
});
