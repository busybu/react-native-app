import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#46387C',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#00D8FF',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        marginTop: 0

    },
    topScreen: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
    },
    buttonText: { color: '#302850', fontSize: 16 },
    inputWrapper: {
        width: 306,
        height: 45,
        backgroundColor: '#302850',
        borderRadius: 10,
        color: '#0BD8FD',
        paddingHorizontal: 15,
        margin: 8
    }
});

export default styles
