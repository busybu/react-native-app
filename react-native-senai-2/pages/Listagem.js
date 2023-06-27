import { Text, View } from 'react-native'
import home from '../styles/home';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Listagem() {
	const [transactions, setTransactions] = useState([])

	useEffect(() => {
		const getTransactions = async () => {
			try {
				const response = await axios.get('http://localhost:3000/transactions')
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


	return (

		<View style={home.container}>
			<View style={home.topScreen}>
				<Text>Minhas Transações</Text>

				<View style={home.button}>
					<Text>+</Text>
				</View>
			</View>

			{ transactions.map((transactions, index) => {
				return (
					<View>
						<Text>{ transactions.reference }</Text>
						<Text>{ transactions.amount }</Text>
						<Text>{ transactions.date }</Text>
					</View>
				)
			}) }

		</View>

	);
}
