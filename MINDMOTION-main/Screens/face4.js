import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const exercicios = [
  { id: 1, qtd: '4x 10 polichinelo', img: require('../assets/polichinelo.gif') },
  { id: 2, qtd: '3x 15 Agachamento', img: require('../assets/Agachamento.gif') },
  { id: 3, qtd: '3x 15 Afundo', img: require('../assets/Afundo.gif') },
  { id: 4, qtd: '3x 10 Pull Up', img: require('../assets/pull_up.gif') },
  { id: 5, qtd: '4x 20 Corridinha', img: require('../assets/Corridinha.gif') },
];

const Exercicios = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      {/* Topo */}
      <View style={styles.header}>
        <Image
          source={require("../assets/user.png")}
          style={styles.profile}
        />
      </View>

      {/* Área dos exercícios */}
      <ScrollView contentContainerStyle={styles.scrollArea}>
        {exercicios.map((item) => (
          <View key={item.id} style={styles.cardWrapper}>
            <View style={styles.card}>
              <Text style={styles.cardText}>{item.qtd}</Text>
              <Image source={item.img} style={styles.cardImage} />
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Botão Voltar */}
      <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.botaoTexto}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Exercicios;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#22A8F2',
    width: '100%',
    padding: 20,
    alignItems: 'flex-start',
  },
  profile: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#fff',
  },
  scrollArea: {
    paddingBottom: 150,
    backgroundColor: '#ffc0cb', // rosa claro entre os cards
    paddingTop: 16,
    paddingHorizontal: 8,
  },
  cardWrapper: {
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#00b140', // verde vivo
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    height: 120,
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    marginRight: 12,
  },
  cardImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  botaoVoltar: {
    position: 'absolute',
    bottom: 70,
    left: 20,
    right: 20,
    backgroundColor: '#00aaff',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 4,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  navBar: {
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
  },
  navIcon: {
    width: 28,
    height: 28,
    tintColor: '#fff',
  },
});
