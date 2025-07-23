import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import styles from '../Styles/styles.js';

const Cadastro2 = ({ navigation, route }) => {
  const { nome, email, telefone, senha } = route.params;

  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [selectedGender, setSelectedGender] = useState(null);

  const handleNext = () => {
    navigation.navigate('Cadastrar3', {
      nome,
      email,
      telefone,
      senha,
      idade,
      peso,
      altura,
      genero: selectedGender
    });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Logo.png')}
        style={{ width: 250, height: 250, alignSelf: "center", marginBottom: 10, marginTop: 20, }}
      />
      <Text style={styles.title}>Cadastrar</Text>
      <Text style={styles.subtitle}>Dados Corporais</Text>
      <TextInput placeholder="Idade" keyboardType="numeric" value={idade} onChangeText={setIdade} style={styles.input} />
      <TextInput placeholder="Peso" keyboardType="numeric" value={peso} onChangeText={setPeso} style={styles.input} />
      <TextInput placeholder="Altura" keyboardType="numeric" value={altura} onChangeText={setAltura} style={styles.input} />
      <Text style={styles.subtitle}>Gênero:</Text>
      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={[styles.genderButton, selectedGender === 'Feminino' && styles.selectedButton]}
          onPress={() => setSelectedGender('Feminino')}
        >
          <Text style={styles.genderText}>Feminino</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.genderButton, selectedGender === 'Masculino' && styles.selectedButton]}
          onPress={() => setSelectedGender('Masculino')}
        >
          <Text style={styles.genderText}>Masculino</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Próximo Passo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Já possuo Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cadastro2;