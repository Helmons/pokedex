import React, { useState } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import theme from "../../styles/theme";

interface Props extends TextInputProps {
    value?: string
 }


export function SearchBox({ value, ...rest } : Props) {
    const [isFocused, setIsfocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)

    function handleFocus() {
        setIsfocused(true)
     }
  
     function handleBlur() {
        setIsfocused(false)
        setIsFilled(!!value)
     }

    return (
        <View 
            style={[
                styles.container, 
                { borderColor: isFocused || isFilled ? theme.colors.border_color : theme.colors.text_color}
            ]}
        >
            <TextInput
                style={styles.textInput}
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...rest}
            />

            <Ionicons
                name="search-outline"
                size={24}
                color={ isFocused || isFilled ? theme.colors.border_color : theme.colors.text_color}
            />

        </View>
    )
}