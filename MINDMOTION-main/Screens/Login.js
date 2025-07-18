import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import axios from "axios";
import styles from "../Styles/styles.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    if (!email.trim() || !senha.trim()) {
      window.alert("Preencha todos os campos.");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:3000/usuarios?email=${email}&senha=${senha}`
      );

      if (response.data.length > 0) {
        const usuario = response.data[0];

        // Armazena o ID do usuário logado
        await AsyncStorage.setItem("usuarioId", usuario.id.toString());

        window.alert("Login realizado com sucesso!");
        navigation.navigate("Home");
      } else {
        window.alert("Email ou senha inválidos.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      window.alert("Erro de conexão com o servidor.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Logo.png')}
        style={{
          width: 250,
          height: 250,
          alignSelf: "center",
          marginBottom: 10,
          marginTop: 20,
        }}
      />
      <Text style={styles.title}>Bem Vindo ao MindMotion</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Cadastrar")}>
        <Text style={styles.link}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
