import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const MindMotion = ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: "#f0f2f5" }}>
    <ScrollView
      contentContainerStyle={{ paddingBottom: 100, alignItems: "center" }}
    >
      <View
        style={{
          backgroundColor: "#22A8F2",
          width: "100%",
          padding: 24,
          alignItems: "flex-start",
        }}
      >
        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            borderWidth: 3,
            borderColor: "#fff",
          }}
        />
      </View>

      <View style={{ marginVertical: 20, alignItems: "center" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#F7A8B8",
            paddingHorizontal: 30,
            paddingVertical: 12,
            borderRadius: 30,
          }}
          onPress={() => navigation.navigate("Face1")}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
            Seu Relatório
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: "90%",
          borderRadius: 16,
          padding: 16,
          marginVertical: 10,
          backgroundColor: "#22A8F2",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/Cerebro_heroi.png")}
          style={{ width: 150, height: 150 }}
        />
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 18,
            marginLeft: 12,
          }}
        >
          7 Dia intensivo
        </Text>
      </View>

      <View
        style={{
          width: "90%",
          borderRadius: 16,
          padding: 16,
          marginVertical: 10,
          backgroundColor: "#F7A8B8",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 18,
            marginBottom: 8,
          }}
        >
          Análise
        </Text>
        <Text style={{ color: "#fff" }}>
          Você se mostra ansioso e fadigado, mas proativo e procurando melhora.
          Caso queira conversar, vá em nosso chat.
        </Text>
      </View>

      <View
        style={{
          width: "90%",
          borderRadius: 16,
          padding: 16,
          marginVertical: 10,
          backgroundColor: "#22A8F2",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontStyle: "italic",
            fontSize: 15,
            textAlign: "center",
          }}
        >
          “A jornada mais longa começa com um único passo”
        </Text>
      </View>

      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          marginVertical: 10,
          gap: 10,
        }}
      >
        <Image
          source={require("../assets/Cerebro_inte.png")}
          style={{ width: 90, height: 90 }}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("face1")}
          style={{
            backgroundColor: "#35C546",
            padding: 12,
            borderRadius: 20,
            borderTopLeftRadius: 4,
            maxWidth: "70%",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 14 }}>
            Olá, como você está se sentindo hoje?
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#32aaff',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 16,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image
          source={require("../assets/CerebroMeditando.png")}
          style={{ width: 28, height: 28, tintColor: "#fff" }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("face2")}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/25/25694.png",
          }}
          style={{ width: 28, height: 28, tintColor: "#fff" }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("face3")}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1380/1380338.png",
          }}
          style={{ width: 28, height: 28, tintColor: "#fff" }}
        />
      </TouchableOpacity>
    </View>
  </View>
);

export default MindMotion;
