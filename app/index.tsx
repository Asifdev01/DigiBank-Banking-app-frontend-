import LatestTransaction from "@/components/latestTransaction";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BalanceCard from "../components/balanceCard";
import Header from "../components/header";

export default function Index() {
  return (
    <LinearGradient
      colors={["#dee8e6ff", "#B1D4BB"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <Header style={styles.header} />
      <BalanceCard style={styles.balanceCard} />

      <View style={styles.recentTransactionsContainer}>
        <Text style={styles.recentTransactions}>Latest Transactions</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <LatestTransaction
        style={styles.latestTransaction}
        name="Mega Store"
        amount="- ₹500"
        time="3 mins ago"
      />
      <LatestTransaction style={styles.latestTransaction} />




    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60, // Moving header to top with some padding
    paddingHorizontal: 20,
    alignItems: "center",
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
});