import { Text, View } from 'react-native'
import home from '../styles/home';
import axios from 'axios';
import { useEffect } from 'react';


export default function Listagem() {

	useEffect(() => { 
		const getTransactions = async() =>{
			const response = await axios.get('http://localhost:3000/transactions')
			console.log(response)	
		}

		getTransactions()
	}, [])


	return (

    <View style={home.buttonText}>
		<Text>Minhas Transações</Text>
	</View>
	
  );
}
