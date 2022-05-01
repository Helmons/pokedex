import { StyleSheet } from 'react-native'
import theme from '../../styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background_primary,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    header: {
        width: '100%',
        alignItems: 'center', 
        justifyContent: 'space-around',
        alignSelf: 'flex-start',
        padding: 10,
        
    },

    title: {
        fontFamily: theme.fonts.primary_500,
        fontSize: 32,
        color: theme.colors.text_color,
        alignItems: 'center',
        alignSelf: 'center',
    },

    content: {
        height: '75%',
        alignItems: 'center',
        width: '100%',
        padding: 10,
    },

    subTitle: {
        fontFamily: theme.fonts.primary_500,
        fontSize: 25,
        color: theme.colors.text_color,
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginBottom: 20,
    },


    list: {
        width: '100%',
        marginBottom: 20,
    },


})