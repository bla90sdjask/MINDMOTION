import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert
} from 'react-native';
import styles from '../Styles/styles.js';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Cadastrar3 = ({ navigation, route }) => {
  const { nome, email, telefone, senha, idade, peso, altura, genero } = route.params;

  const [selectedSource, setSelectedSource] = useState('');
  const [motivo, setMotivo] = useState('');
  const [sentimento, setSentimento] = useState('');

  const handleCadastro = async () => {
    if (!motivo || !sentimento || !selectedSource) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos e selecione uma opção.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/usuarios', {
        nome,
        email,
        telefone,
        senha,
        idade,
        peso,
        altura,
        genero,
        motivo,
        sentimento,
        source: selectedSource
      });

      const usuarioCriado = response.data;

      // Salvar o ID no AsyncStorage
      await AsyncStorage.setItem('usuarioId', usuarioCriado.id.toString());

      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
      navigation.navigate('Home'); // ou 'Perfil' se preferir ir direto pra lá

    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      Alert.alert('Erro', 'Erro ao cadastrar usuário.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Logo.png')}
        style={{ width: 250, height: 250, alignSelf: "center", marginBottom: 10, marginTop: 20 }}
      />
      <Text style={styles.title}>Cadastrar</Text>
      <Text style={styles.subtitle}>Dados Pessoais</Text>

      <TextInput
        placeholder="O Que te Trouxe Aqui?"
        value={motivo}
        onChangeText={setMotivo}
        style={styles.input}
      />

      <TextInput
        placeholder="Como Você está se sentindo?"
        value={sentimento}
        onChangeText={setSentimento}
        style={styles.input}
      />

      <Text style={styles.subtitle}>Como você conheceu o app?</Text>
      <View style={styles.sourceContainer}>
        {['Instagram', 'Facebook', 'Twitter', 'Outro'].map((src) => (
          <TouchableOpacity
            key={src}
            style={[
              styles.sourceButton,
              selectedSource === src && styles.selectedButton
            ]}
            onPress={() => setSelectedSource(src)}
          >
            <Text style={styles.sourceText}>{src}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Já possuo Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cadastrar3;
