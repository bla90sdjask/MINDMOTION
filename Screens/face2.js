import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView, Image } from 'react-native';

export default function Face2({ navigation }) {
  const aulasDeYoga = [
    { titulo: 'Yoga para Iniciantes', url: 'https://www.youtube.com/watch?v=VaoV1PrYft4' },
    { titulo: 'Yoga Relaxante', url: 'https://www.youtube.com/watch?v=OQ6NfFIr2jw' },
    { titulo: 'Alongamento com Yoga', url: 'https://www.youtube.com/watch?v=4pKly2JojMw' },
    { titulo: 'Yoga para Ansiedade', url: 'https://www.youtube.com/watch?v=6kJgTouHHeE' },
  ];

  const abrirLink = (url) => {
    Linking.openURL(url).catch(err => console.error('Erro ao abrir link:', err));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Aulas de Ioga</Text>
      <Image
        source={require('../assets/Yoga.png')} // imagem opcional
        style={styles.imagem}
      />
      {aulasDeYoga.map((aula, index) => (
        <TouchableOpacity key={index} style={styles.botao} onPress={() => abrirLink(aula.url)}>
          <Text style={styles.textoBotao}>{aula.titulo}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffc0cb',
    padding: 20,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  botaoVoltar: {
    marginTop: 20,
    backgroundColor: '#35C546',
    padding: 10,
    borderRadius: 10,
    width: '100%',
  },
});
