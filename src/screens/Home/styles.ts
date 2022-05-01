import { StyleSheet, Text, View } from 'react-native';
import theme from '../../styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background_primary,
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: 20,
    },

    header: {
        alignItems: 'center', 
        justifyContent: 'space-around',
        alignSelf: 'flex-start',
        padding: 10,

        marginTop: 10,
    },

    logo: {
        width: '100%',
        height: '100%',
        marginBottom: 20,
    },

    content: {
        height: '75%',
        alignItems: 'center',
        width: '100%',
        padding: 10,
    },

    list: {
        width: '100%',
        marginBottom: 20,
    }
})