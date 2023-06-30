import { useEffect, useState } from 'react'
import { StyleSheet, Button, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Logo from '../assets/logo.png'
import CustomInput from '../components/customInput';
import login from '../styles/styles';
import { useNavigation } from '@react-navigation/native';

import app from '../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';


export default function Login() {
  const auth = getAuth(app)
  const navigation = useNavigation()
  
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()


  useEffect(() => {
    if(!!auth.currentUser)
      navigation.navigate('Listagem')
    //trocar de tela, caso exista um usuario
  }, [auth.currentUser])

  const setEmailInputValue = (value) => {
    setEmail(value)
  }
  const setPassswordInputValue = (value) => {
    setPassword(value)
  }
  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((userCredentials) => {
      console.log(userCredentials)
    }).catch((err) => {
      console.error(err)
    })
  }
  const recoverPassword = () => {
    sendPasswordResetEmail(auth, email)
  }

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password).then((userCredentials) => {
      navigation.navigate('Listagem')
    }).catch((err) => {
      console.error(err)
    })
  }

  return (
    <View style={login.container}>
      <Image
        source={Logo}
        style={{
          width: 100,
          height: 100,
        }}
        >
      </Image>

      < CustomInput
        value = { email }
        funcao = { setEmailInputValue }
        placeholder = { 'E-mail' }
        />

      < CustomInput
        value = { password }
        funcao = { setPassswordInputValue }
        isPassword = { true }
        placeholder = { 'senha' }
        />

      <TouchableOpacity onPress={recoverPassword}>
        <Text>recupere sua senha</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={(signIn)}>
        <View style = {login.button}>
          <Text>Entrar</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={(createUser)}>
        <View style = {login.button}>
          <Text>Criar conta</Text>
        </View>
      </TouchableOpacity>
    </View>
  );


}
