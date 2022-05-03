import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import theme from "../../styles/theme";

interface Props {
    title: string
    like?: boolean
    onPress?: () => void
}

export function FavoriteButton({ title, onPress, like = false }: Props) {
    return (
        <TouchableOpacity 
            style={[styles.container, {borderColor: like ? theme.colors.border_color: 'transparent'}]} 
            onPress={onPress}
        >
            <Text style={styles.title}>{title}</Text>

            <Ionicons
                name={like ? "heart-sharp" : "heart-outline"}
                size={30}
                color={theme.colors.border_color}
            />
        </TouchableOpacity>
    )
}