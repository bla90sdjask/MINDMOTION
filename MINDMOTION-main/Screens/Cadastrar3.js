import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import styles from '../Styles/styles.js';
import axios from 'axios';

const Cadastrar3 = ({ navigation, route }) => {
  const { nome, email, telefone, senha, idade, peso, altura, genero } = route.params;

  const [selectedSource, setSelectedSource] = useState('');
  const [motivo, setMotivo] = useState('');
  const [sentimento, setSentimento] = useState('');

  const handleCadastro = async () => {
    if (!motivo || !sentimento || !selectedSource) {
      window.alert('Por favor, preencha todos os campos e selecione uma opção.');
      return;
    }

    try {
      await axios.post('http://localhost:3000/usuarios', {
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

      window.alert('Usuário cadastrado com sucesso!');
      navigation.navigate('Home');
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      window.alert('Erro ao cadastrar usuário.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Logo.png')}
        style={{ width: 250, height: 250, alignSelf: "center", marginBottom: 10, marginTop: 20, }}
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
            style={[styles.sourceButton, selectedSource === src && styles.selectedButton]}
            onPress={() => setSelectedSource(src)}
          >
            <Text style={styles.sourceText}>{src}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
        <Text style={styles.buttonText}>Voltar para Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Já possuo Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cadastrar3;