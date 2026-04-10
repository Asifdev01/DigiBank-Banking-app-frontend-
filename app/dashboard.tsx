import LatestTransaction from "@/components/latestTransaction";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BalanceCard from "../components/balanceCard";
import Header from "../components/header";
import { DATA_URL } from "../components/config/api";

export default function Dashboard() {
  const router = useRouter();
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [favorites, setFavorites] = useState<any[]>([]);
  const [user, setUser] = useState<{ name: string; avatar: any }>({ name: "User", avatar: null });

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await fetch(`${DATA_URL}/transactions`);
        const data = await res.json();
        setTransactions(data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchBalanceData = async () => {
      try {
        const res = await fetch(`${DATA_URL}/balance`);
        const data = await res.json();
        setBalance(data.balance);
        setIncome(data.income);
      } catch (err) {
        console.log("Balance fetch error:", err);
      }
    };

    const fetchFavorites = async () => {
      try {
        const res = await fetch(`${DATA_URL}/favorites`);
        const data = await res.json();
        setFavorites(data);
      } catch (err) {
        console.log("Favorites fetch error:", err);
      }
    };

    const fetchUser = async () => {
      try {
        const res = await fetch(`${DATA_URL}/user`);
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.log("User fetch error:", err);
      }
    };

    fetchTransactions();
    fetchBalanceData();
    fetchFavorites();
    fetchUser();
  }, []);

  return (
    <LinearGradient
      colors={["#dee8e6ff", "#B1D4BB"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <Header 
        style={styles.header} 
        name={user.name}
        avatar={user.avatar}
      />
      <BalanceCard
        style={styles.balanceCard}
        balance={balance}
        income={income}
      />

      <View style={styles.favoritesSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Favorites</Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={favorites}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.favoritesList}
          renderItem={({ item }) => (
            <TouchableOpacity 
                style={styles.favoriteItem}
                activeOpacity={0.7}
                onPress={() => router.push({
                    pathname: '/screens/payment',
                    params: { name: item.name, account: item.account, avatar: item.avatar }
                })}
            >
              <View style={styles.favoriteAvatarContainer}>
                <Image source={{ uri: item.avatar }} style={styles.favoriteAvatar} />
              </View>
              <Text style={styles.favoriteName} numberOfLines={1}>{item.name.split(' ')[0]}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={styles.recentTransactionsContainer}>
        <Text style={styles.recentTransactions}>Latest Transactions</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      {transactions.map((item: any) => (
        <LatestTransaction
          key={item.id}
          style={styles.latestTransaction}
          name={item.name}
          amount={`₹${item.amount}`}
          time={item.time}
        />
      ))}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    alignItems: "center",
    paddingBottom: 150,
  },
  header: {
    width: "100%",
    marginBottom: 20,
    marginTop: 20,
  },
  text: {
    fontSize: 24,
    color: "#000",
    marginTop: "auto",
    marginBottom: "auto",
    fontFamily: "Poppins",
  },
  recentTransactions: {
    fontSize: 18,
    color: "#000",
    fontFamily: "Poppins",
    fontWeight: "600",
  },
  recentTransactionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 35,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  seeAll: {
    fontSize: 14,
    color: "#666",
    fontFamily: "Poppins",
    fontWeight: "600",
  },
  balanceCard: {
    overflow: "hidden",
    width: "100%",
    height: "20%",
    marginTop: 25,
  },
  latestTransaction: {
    width: "100%",
    marginTop: 0,
  },
  favoritesSection: {
    width: "100%",
    marginTop: 25,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    color: "#000",
    fontFamily: "Poppins",
    fontWeight: "600",
  },
  favoritesList: {
    paddingHorizontal: 10,
    gap: 20,
  },
  favoriteItem: {
    alignItems: "center",
    width: 70,
  },
  favoriteAvatarContainer: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: "#fff",
    padding: 3,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  favoriteAvatar: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },
  favoriteName: {
    fontSize: 12,
    color: "#444",
    fontFamily: "Poppins",
    fontWeight: "500",
  },
});
