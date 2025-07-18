import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function ChatScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar} />
        <View style={styles.chatTitle}>
          <Text style={styles.chatTitleText}>Chat Terapêutico</Text>
        </View>
      </View>

      <View style={styles.main}>
        {/* Aqui pode ir o conteúdo da conversa futuramente */}
      </View>

      {/* ABA AZUL DE NAVEGAÇÃO */}
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            source={require("../assets/CerebroMeditando.png")}
            style={{ width: 28, height: 28, tintColor: "#fff" }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("face2")}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/25/25694.png" }}
            style={{ width: 28, height: 28, tintColor: "#fff" }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("face3")}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/1380/1380338.png" }}
            style={{ width: 28, height: 28, tintColor: "#fff" }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    backgroundColor: '#32aaff',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative'
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc'
  },
  chatTitle: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -50 }],
    backgroundColor: '#ffb6c1',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8
  },
  chatTitleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14
  },
  main: {
    flex: 1,
    padding: 20
  },
  nav: {
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
  }
});
