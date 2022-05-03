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
        height: '30%',
        alignItems: 'center', 
        justifyContent: 'center',
        padding: 10,
        marginTop: getStatusBarHeight(),
        marginBottom: 20,
    },

    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    title: {
        fontFamily: theme.fonts.primary_500,
        fontSize: 32,
        color: theme.colors.text_color,
        alignSelf: 'center',
        marginRight: 20
    },

    slideContainer: {
        
    },

    slide: {
        flex: 1,
    },

    image: {
        borderWidth: 2,
        borderColor: theme.colors.border_color,
        borderRadius: 20,
        width: 300,
        height: 200,
        marginLeft: 10,
        resizeMode: 'cover'
    },

    content: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        padding: 20,
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