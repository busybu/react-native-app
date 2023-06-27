import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Logo from './assets/logo.png'
import CustomInput from './components/CustomInput';
import styles from './styles/styles';
import app from './firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';

export default function App() {
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const auth = getAuth(app);
 
  useEffect(() => {
    console.log(auth.currentUser)
    // trocar de tela caso exista um usuario
  }, [auth.currentUser])

  const setEmailInputValue = (value) => {
    setEmail(value)
  }

  const setSenhaInputValue = (value) => {
    setSenha(value)
  }

  const criarUsuario = () => {
    createUserWithEmailAndPassword(auth, email, senha)
    .then((dadosDoUsuario) => {
      console.log(dadosDoUsuario)
    }).catch((err) => {
      console.error(err)
    })
  }

  const loginUsuario = () => {
    signInWithEmailAndPassword(auth, email, senha)
    .then((dadosDoUsuario) => {
      console.log(dadosDoUsuario)
    }).catch((err) => {
      console.error(err)
    })
  }
 
  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={{
          width: 100,
          height: 100
        }}
      />

      <CustomInput
        placeholder='E-mail'
        value={email} 
        funcao={setEmailInputValue}
      />

      <CustomInput
        placeholder='Senha'
        value={senha}
        funcao={setSenhaInputValue}
        isPassword={true}
      />

      <TouchableOpacity style={{ marginTop: 15 }} onPress={loginUsuario}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}


