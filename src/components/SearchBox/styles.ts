import { StyleSheet } from 'react-native'
import theme from '../../styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: theme.colors.background_secondary,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        borderWidth: 2,
        borderRadius: 20,
    },

    textInput: {
        flex: 1,
        backgroundColor: theme.colors.background_secondary,
        fontFamily: theme.fonts.primary_400,
        fontSize: 17,
        color: theme.colors.text_color,
        paddingLeft: 5,
        paddingRight: 5,
    },
})