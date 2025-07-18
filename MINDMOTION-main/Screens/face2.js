import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';

export default function AtividadesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar} />
      </View>

      <ScrollView contentContainerStyle={styles.main}>
        <View style={styles.cardGrid}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("face4")}
          >
            <Text>Plano de Exercício{"\n"}Personalizado</Text>
            <View style={styles.circleProgress}><Text>100%</Text></View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Text>MONITORIA{"\n"}COM PERSONAL</Text>
            <Image
              source={require("../assets/Personal.png")}
              style={{ width: 28, height: 28, tintColor: "#fff" }}
            />
          </TouchableOpacity>
        </View>

        {/* Cards com imagens */}
        <View style={styles.cardRow}>
          <TouchableOpacity style={styles.cardSmall}>
            <Image
              source={require('../assets/Yoga.png')}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Yoga</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardSmall}>
            <Image
              source={require('../assets/Correr.png')}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Corrida</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardSmall}>
            <Image
              source={require('../assets/Meditar.png')}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Ahummmm</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.progressBar} />

        {/* Chat com imagem do cérebro */}
        <View style={styles.chatSection}>
          <Image
            source={require('../assets/Cerebro_forte.png')}
            style={styles.brainIcon}
          />
          <View style={styles.chatBubble}>
            <Text style={{ color: 'white' }}>Vamos Exercitar e esquecer os problemas?</Text>
          </View>
        </View>
      </ScrollView>

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
  header: { backgroundColor: '#32aaff', padding: 16 },
  avatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#ccc' },
  main: { padding: 16, paddingBottom: 100 },
  cardGrid: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  card: {
    backgroundColor: '#ffb6c1', flex: 1, marginHorizontal: 5,
    borderRadius: 10, padding: 10, alignItems: 'center'
  },
  circleProgress: {
    marginTop: 10, width: 60, height: 60, borderRadius: 30,
    backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'
  },
  cardRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  cardSmall: {
    backgroundColor: '#ffb6c1', flex: 1, marginHorizontal: 5,
    borderRadius: 10, padding: 10, alignItems: 'center'
  },
  cardImage: {
    width: 40,
    height: 40,
    marginBottom: 6,
    resizeMode: 'contain',
  },
  cardText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
  },
  progressBar: { height: 5, backgroundColor: '#32aaff', borderRadius: 5, marginVertical: 20 },
  chatSection: { flexDirection: 'row', alignItems: 'flex-start', gap: 10 },
  brainIcon: {
    width: 85,
    height: 85,
    resizeMode: 'contain',
    borderRadius: 25,
  },
  chatBubble: {
    backgroundColor: '#00cc33', padding: 10, borderRadius: 15, maxWidth: 250
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
