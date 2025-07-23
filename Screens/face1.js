import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Face1({ navigation }) {
  const [texto, setTexto] = useState('');
  const [emocao, setEmocao] = useState('');
  const [usuarioId, setUsuarioId] = useState(null);
  const [diarios, setDiarios] = useState([]);
  const [dataAtual, setDataAtual] = useState('');

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const id = await AsyncStorage.getItem('usuarioId');
        setUsuarioId(id);

        const hoje = new Date();
        const dataFormatada = hoje.toLocaleDateString('pt-BR');
        setDataAtual(dataFormatada);

        if (id) {
          // Busca todos os registros e filtra no front-end por segurança
          const resposta = await axios.get('http://localhost:3000/diarios');
          const apenasDoUsuario = resposta.data.filter(item => item.usuarioId === id);
          setDiarios(apenasDoUsuario);
        }
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };

    carregarDados();
  }, []);

  const enviarEntrada = async () => {
    if (!texto || !emocao) {
      Alert.alert('Preencha todos os campos');
      return;
    }

    try {
      await axios.post('http://localhost:3000/diarios', {
        usuarioId,
        texto,
        emocao,
        data: dataAtual,
      });

      Alert.alert('Registro salvo com sucesso!');
      setTexto('');
      setEmocao('');

      // Atualiza lista local com filtro seguro
      const resposta = await axios.get('http://localhost:3000/diarios');
      const apenasDoUsuario = resposta.data.filter(item => item.usuarioId === usuarioId);
      setDiarios(apenasDoUsuario);
    } catch (error) {
      console.error('Erro ao salvar diário:', error);
      Alert.alert('Erro ao salvar o registro.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Diário Emocional</Text>
      <Text style={styles.label}>Como você está se sentindo hoje?</Text>

      <TextInput
        style={styles.input}
        placeholder="Escreva aqui..."
        value={texto}
        onChangeText={setTexto}
        multiline
      />

      <Text style={styles.label}>Selecione sua emoção:</Text>
      <View style={styles.emocoesContainer}>
        {['😊', '😢', '😠', '😨', '❤️'].map((emo) => (
          <TouchableOpacity
            key={emo}
            style={[styles.botaoEmocao, emocao === emo && styles.botaoSelecionado]}
            onPress={() => setEmocao(emo)}
          >
            <Text style={styles.emoji}>{emo}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.botaoEnviar} onPress={enviarEntrada}>
        <Text style={styles.botaoTexto}>Enviar</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Seus registros anteriores:</Text>
      {diarios.map((item, index) => (
        <View key={index} style={styles.registroItem}>
          <Text>📅 {item.data}</Text>
          <Text>💬 {item.texto}</Text>
          <Text>{item.emocao}</Text>
          <View style={styles.linha} />
        </View>
      ))}

      <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.botaoTexto}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    marginTop: 15,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
    padding: 10,
    minHeight: 80,
    textAlignVertical: 'top',
    fontSize: 16,
  },
  emocoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  botaoEmocao: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#eee',
  },
  botaoSelecionado: {
    backgroundColor: '#cdeffd',
  },
  emoji: {
    fontSize: 24,
  },
  botaoEnviar: {
    backgroundColor: '#00aaff',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  botaoVoltar: {
    backgroundColor: '#999',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registroItem: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#f0f8ff',
    borderRadius: 5,
  },
  linha: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 10,
  },
});
