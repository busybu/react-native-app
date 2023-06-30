import { StyleSheet, Button, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import home from '../styles/home';
import login from '../styles/styles';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../components/customInput';

export default function Cadastro() {
    const navigation = useNavigation()

    const [val, setValue] = useState()
    const [ref, setReference] = useState()
    const [dat, setData] = useState()

    useEffect(() => {
        const getTransactions = async () => {
            try {
                const response = await axios.post('http://localhost:3000/cadastro')
                if (response.status === 200) {
                    setTransactions(response.data)
                }
            }
            catch (err) {
                console.log(err)
            }
        }
        getTransactions()

    }, [])
    const setValueInputValue = (value) => {
        setValue(value)
      }
      const setReferenceInputValue = (value) => {
        setReference(value)
      }
      const setDataInputValue = (value) => {
        setData(value)
      }


    const postData = async() => {
        try {
            const response = await axios.post('http://localhost:3000/cadastro',{
                date: dat,
                reference: ref,
                value: val
            })
            if (response.status === 200) {
            }
        }
        catch (err) {
            console.log(err)
        }
    }


    return (

        <View style={home.container}>

            <Text>Cadastro</Text>

            < CustomInput
                value={val}
                funcao = {setValueInputValue}
                placeholder={'valor'}
            />

            < CustomInput
                value={ref}
                funcao = {setReferenceInputValue}
                placeholder={'referencia'}
            />
            < CustomInput
                value={dat}
                funcao ={setDataInputValue}
                placeholder={'data'}
            />
            <TouchableOpacity onPress={(postData)}>
                <View style={login.button}>
                    <Text>Cadastrar</Text>
                </View>
            </TouchableOpacity>
        </View>

    );
}
