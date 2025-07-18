import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

const MindMotion = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* TOPO COM FOTO DE PERFIL */}
        <TouchableOpacity
          onPress={() => navigation.navigate("perfil")}
          style={styles.profileContainer}
        >
          <Image
            source={require("../assets/user.png")}
            style={styles.profileImage}
          />
        </TouchableOpacity>

        {/* BOAS-VINDAS */}
        <Text style={styles.welcome}>Bem-vindo!</Text>

        {/* BANNER */}
        <View style={styles.banner}>
          <Image
            source={require("../assets/Cerebro_heroi.png")}
            style={styles.hero}
          />
          <Text style={styles.bannerText}>7 Dias Intensivo</Text>
        </View>

        {/* MENSAGEM */}
        <View style={styles.messageContainer}>
          <Image
            source={require("../assets/Cerebro_inte.png")}
            style={styles.brain}
          />
          <View style={styles.messageBubble}>
            <Text style={styles.messageText}>
              Olá, como você está se sentindo hoje?
            </Text>
          </View>
        </View>

        {/* TEXTO DE AÇÃO */}
        <Text style={styles.title}>O que você quer fazer hoje?</Text>

        {/* BOTÕES */}
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate("face4")}
          >
            <Image
              source={require("../assets/exercicio.png")}
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Planos de exercícios</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate("face2")}
          >
            <Image
              source={require("../assets/Yoga.png")}
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Aulas de ioga</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate("face3")}
          >
            <Image
              source={{ uri: "https://cdn-icons-png.flaticon.com/512/1380/1380338.png" }}
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Chat Terapêutico</Text>
          </TouchableOpacity>
        </View>

        {/* FRASE FINAL */}
        <View style={styles.quoteContainer}>
          <Text style={styles.quote}>
            “A jornada mais longa começa com um único passo.”
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default MindMotion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scroll: {
    alignItems: "center",
    paddingVertical: 30,
  },
  profileContainer: {
    marginBottom: 15,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#22A8F2",
  },
  welcome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#22A8F2",
    marginBottom: 20,
  },
  banner: {
    backgroundColor: "#22A8F2",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    width: "90%",
    marginBottom: 20,
  },
  hero: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  bannerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: "90%",
    justifyContent: "center",
  },
  brain: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  messageBubble: {
    backgroundColor: "#35C546",
    padding: 12,
    borderRadius: 20,
    maxWidth: "70%",
  },
  messageText: {
    color: "#fff",
    fontSize: 14,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#22A8F2",
    marginBottom: 20,
    textAlign: "center",
  },
  buttonRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
    width: "100%",
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: "#35C546",
    width: 100,
    height: 100,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 8,
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
  quoteContainer: {
    backgroundColor: "#22A8F2",
    width: "90%",
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 30,
  },
  quote: {
    color: "#fff",
    fontStyle: "italic",
    textAlign: "center",
  },
});
