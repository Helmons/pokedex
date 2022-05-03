import { StyleSheet } from 'react-native'
import theme from '../../styles/theme'



export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.background_secondary,
        borderWidth: 2,
        borderRadius: 10,
        padding: 5,
        marginBottom: 10,
    },

    title: {
        fontFamily: theme.fonts.primary_500,
        fontSize: 20,
        color: theme.colors.text_color,
        paddingRight: 10,
        paddingLeft: 10,
    }
})

