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
      <ScrollView 
        contentContainerStyle={styles.scrollArea}
        showsVerticalScrollIndicator={true}
      >
        {exercicios.map((item) => (
          <View key={item.id} style={styles.cardWrapper}>
            <View style={styles.card}>
              <Text style={styles.cardText}>{item.qtd}</Text>
              <Image source={item.img} style={styles.cardImage} />
            </View>
          </View>
        ))}
        {/* Adicione um paddingBottom para que o último card não fique atrás do botão */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Botão Voltar fixo */}
      <TouchableOpacity 
        style={styles.botaoVoltar} 
        onPress={() => navigation.navigate('Home')}
        activeOpacity={0.7}
      >
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
    paddingTop: 16,
    paddingHorizontal: 8,
    backgroundColor: '#ffc0cb', // rosa claro entre os cards
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
    bottom: 20, // abaixei para 20 para ficar mais perto da base da tela
    left: 20,
    right: 20,
    backgroundColor: '#00aaff',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 4,
    zIndex: 10,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
