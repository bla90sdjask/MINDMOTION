import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ChatScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <View style={styles.chatTitle}>
          <Text style={styles.chatTitleText}>Chat Terapêutico</Text>
        </View>
      </View>

      <View style={styles.main}>
        <Text style={styles.textoExplicativo}>
          Converse com nossa inteligência artificial especializada em saúde mental.
        </Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() =>
            Linking.openURL(
              "https://chatgpt.com/g/g-6842f655d74c8191ae7887a74b55acb6-mindmotion"
            )
          }
        >
          <Text style={styles.botaoTexto}>Abrir Chat Terapêutico</Text>
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
    gap: 16
  },
  chatTitle: {
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
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textoExplicativo: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333'
  },
  botao: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    width: '80%'
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});
