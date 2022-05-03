import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
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
        alignItems: 'center', 
        justifyContent: 'center',
        padding: 10,
        marginTop: getStatusBarHeight(),
        marginBottom: 20,
    },


    title: {
        fontFamily: theme.fonts.primary_500,
        fontSize: 32,
        color: theme.colors.text_color,
        alignSelf: 'center',
        marginRight: 20
    },


    content: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        padding: 20,
    },

    list: {
        width: '100%',
        marginBottom: 20,
    },

    alert: {
        position: 'absolute',
        fontFamily: theme.fonts.primary_400,
        fontSize: 20,
        color: theme.colors.placeholder_color,
        alignSelf: 'center',
        marginRight: 20
    },
})