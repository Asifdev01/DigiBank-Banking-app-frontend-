import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Image,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { DATA_URL } from '../../components/config/api';

const Contacts = () => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [contacts, setContacts] = useState<any[]>([]);
    const [recentContacts, setRecentContacts] = useState<any[]>([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const res = await fetch(`${DATA_URL}/contacts`);
                const data = await res.json();

                setContacts(data);
                setRecentContacts(data.slice(0, 4));
            } catch (err) {
                console.log(err);
            }
        };

        fetchContacts();
    }, []);

    const filteredContacts = contacts.filter((contact: any) =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSelectContact = (contact: any) => {
        router.push({
            pathname: '/screens/payment',
            params: {
                name: contact.name,
                account: contact.account,
                avatar: contact.avatar
            }
        });
    };

    const renderContactItem = ({ item }: { item: any }) => (
        <TouchableOpacity
            style={styles.contactItem}
            activeOpacity={0.7}
            onPress={() => handleSelectContact(item)}
        >
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.contactInfo}>
                <Text style={styles.contactName}>{item.name}</Text>
                <Text style={styles.contactAccount}>{item.account}</Text>
            </View>
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
                <Text style={styles.title}>Select Recipient</Text>
                <View style={{ width: 40 }} />
            </View>

            <View style={styles.searchBarContainer}>
                <Ionicons name="search-outline" size={20} color="#999" style={styles.searchIcon} />
                <TextInput
                    placeholder="Search name or account..."
                    placeholderTextColor="#999"
                    style={styles.searchInput}
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
            </View>

            <View style={styles.contentCard}>
                <FlatList
                    data={filteredContacts}
                    keyExtractor={(item) => item.id}
                    renderItem={renderContactItem}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContent}
                    ListHeaderComponent={() => (
                        <>
                            {searchQuery === '' && (
                                <View style={styles.section}>
                                    <Text style={styles.sectionTitle}>Recent Transactions</Text>
                                    <View style={styles.recentGrid}>
                                        {recentContacts.map((contact: any) => (
                                            <TouchableOpacity
                                                key={contact.id}
                                                style={styles.recentItem}
                                                activeOpacity={0.7}
                                                onPress={() => handleSelectContact(contact)}
                                            >
                                                <Image source={{ uri: contact.avatar }} style={styles.recentAvatar} />
                                                <Text style={styles.recentName} numberOfLines={1}>{contact.name.split(' ')[0]}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                            )}
                            <Text style={styles.sectionTitle}>All Contacts</Text>
                        </>
                    )}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                />
            </View>
        </LinearGradient>
    );
};

export default Contacts;

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
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 20,
        borderRadius: 15,
        paddingHorizontal: 15,
        height: 50,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 15,
        fontFamily: 'Poppins',
        color: '#1a1a1a',
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
        paddingHorizontal: 25,
        paddingBottom: 40,
    },
    section: {
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: 15,
    },
    recentGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    recentItem: {
        alignItems: 'center',
        width: 70,
    },
    recentAvatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 8,
        borderWidth: 2,
        borderColor: '#B1D4BB',
    },
    recentName: {
        fontSize: 12,
        fontFamily: 'Poppins',
        color: '#666',
        fontWeight: '500',
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#f0f0f0',
    },
    contactInfo: {
        flex: 1,
        marginLeft: 15,
    },
    contactName: {
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '600',
        color: '#1a1a1a',
    },
    contactAccount: {
        fontSize: 13,
        fontFamily: 'Poppins',
        color: '#999',
        marginTop: 2,
    },
    separator: {
        height: 1,
        backgroundColor: '#f5f5f5',
        marginVertical: 4,
    },
});