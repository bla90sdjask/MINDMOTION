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

export default function Face1({ navigation }) { // <-- aqui a correção
  const [texto, setTexto] = useState('');
  const [emocaoSelecionada, setEmocaoSelecionada] = useState(null);
  const [usuarioId, setUsuarioId] = useState(null);

  const emocoes = [
    '😊 Feliz',
    '😢 Triste',
    '😭 Choroso',
    '🤗 Amável',
    '🥰 Carinhoso',
    '😴 Cansado',
    '😕 Confuso',
  ];

  useEffect(() => {
    const buscarUsuario = async () => {
      try {
        const id = await AsyncStorage.getItem('usuarioId');
        console.log('ID do usuário recuperado:', id);
        setUsuarioId(id);
      } catch (error) {
        console.error('Erro ao recuperar usuário:', error);
      }
    };

    buscarUsuario();
  }, []);

  const enviarDiario = async () => {
    if (!texto && !emocaoSelecionada) {
      Alert.alert('Preencha algo antes de enviar!');
      return;
    }

    if (!usuarioId) {
      Alert.alert('Erro: usuário não encontrado.');
      return;
    }

    const dataAtual = new Date().toISOString().split('T')[0];

    try {
      await axios.post('http://localhost:3000/diarios', {
        usuarioId,
        data: dataAtual,
        texto,
        emocao: emocaoSelecionada,
      });

      Alert.alert('Diário salvo com sucesso!');
      setTexto('');
      setEmocaoSelecionada(null);
    } catch (error) {
      console.error('Erro ao salvar diário:', error);
      Alert.alert('Erro ao salvar, verifique o servidor.');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.main} keyboardShouldPersistTaps="handled">
        <Text style={styles.label}>Como você se sentiu hoje?</Text>
        <TextInput
          style={styles.textarea}
          placeholder="Escreva seu sentimento..."
          multiline
          value={texto}
          onChangeText={setTexto}
        />

        <Text style={styles.label}>Selecione sua emoção:</Text>
        <View style={styles.emotionButtons}>
          {emocoes.map((emoji, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.emojiButton,
                emocaoSelecionada === emoji && styles.emojiSelecionado,
              ]}
              onPress={() => setEmocaoSelecionada(emoji)}
            >
              <Text>{emoji}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={enviarDiario}>
          <Text style={styles.submitText}>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.submitText}>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  main: { padding: 20 },
  label: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  textarea: {
    height: 150,
    borderWidth: 1,
    borderColor: '#32aaff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  emotionButtons: {
    backgroundColor: '#e0f4ff',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  emojiButton: {
    backgroundColor: '#ffb6c1',
    borderRadius: 15,
    paddingVertical: 6,
    paddingHorizontal: 12,
    margin: 4,
  },
  emojiSelecionado: {
    backgroundColor: '#ff6ea6',
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: '#32aaff',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
