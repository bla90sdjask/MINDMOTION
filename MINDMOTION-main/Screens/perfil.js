import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function Perfil({ navigation }) {
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const id = await AsyncStorage.getItem('id');
        if (!id) {
          console.warn('ID do usuário não encontrado');
          setCarregando(false);
          return;
        }

        const response = await axios.get(`http://localhost:3000/usuarios/${id}`);
        setUsuario(response.data);
      } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error);
      } finally {
        setCarregando(false);
      }
    };

    carregarDados();
  }, []);

  if (carregando) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Carregando dados...</Text>
      </View>
    );
  }

  if (!usuario) {
    return (
      <View style={styles.container}>
        <Text>Usuário não encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../assets/user.png")}
        style={styles.fotoPerfil}
      />
      <Text style={styles.nome}>{usuario.nome}</Text>
      <Text style={styles.texto}>Email: {usuario.email}</Text>
      <Text style={styles.texto}>Data de Nascimento: {usuario.dataNascimento}</Text>
      <Text style={styles.texto}>Gênero: {usuario.genero}</Text>
      <Text style={styles.texto}>Telefone: {usuario.telefone}</Text>
      <Text style={styles.texto}>CEP: {usuario.cep}</Text>
      <Text style={styles.texto}>Cidade: {usuario.cidade}</Text>
      <Text style={styles.texto}>Estado: {usuario.estado}</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('EditarPerfil')}
      >
        <Text style={styles.textoBotao}>Editar Dados</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botao, { backgroundColor: '#ccc' }]}
        onPress={() => navigation.navigate('MindMotion')}
      >
        <Text style={styles.textoBotao}>Voltar para Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fotoPerfil: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#aaa',
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    marginVertical: 4,
    textAlign: 'center',
  },
  botao: {
    marginTop: 15,
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
  },
});
