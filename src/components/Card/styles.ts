import { StyleSheet } from 'react-native'
import theme from '../../styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: theme.colors.background_secondary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,

        borderRadius: 10,

        marginBottom: 10,
    },

    title: {
        width: '50%',
        fontFamily: theme.fonts.primary_500,
        fontSize: 17,
        color: theme.colors.text_color,
    }
})