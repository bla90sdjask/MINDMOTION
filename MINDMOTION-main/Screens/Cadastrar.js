import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import styles from '../Styles/styles.js';

const Cadastrar = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');

  const handleNext = () => {
    navigation.navigate('Cadastrar2', {
      nome,
      email,
      telefone,
      senha
    });
  };

  return (
    <View style={styles.container}>
      <Image
              source={require('../assets/Logo.png')}
                style={{ width: 250, height: 250, alignSelf: "center", marginBottom: 10, marginTop: 20, }}
      />
      <Text style={styles.title}>Cadastrar</Text>
      <Text style={styles.subtitle}>Dados Pessoais</Text>
      <TextInput placeholder="Nome" value={nome} onChangeText={setNome} style={styles.input} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" style={styles.input} />
      <TextInput placeholder="Telefone" value={telefone} onChangeText={setTelefone} keyboardType="numeric" style={styles.input} />
      <TextInput placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry style={styles.input} />
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Próximo Passo</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Já possuo Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cadastrar;