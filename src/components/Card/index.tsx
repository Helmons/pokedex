import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from "./styles";
import theme from "../../styles/theme";

interface Cardprops {
    title: string;
    icon: boolean;
    activeIcon?: boolean;
    onPress?: () => void;
}


export function Card({ title, onPress, icon = false, activeIcon = true }: Cardprops) {

    if (!activeIcon) {
        return (
            <TouchableOpacity style={styles.containerWithoutIcon} onPress={onPress}>
                <Text style={styles.titleWithoutIcon}>{title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>

            <Ionicons
                name={icon ? "heart-sharp" : "heart-outline"}
                size={24}
                color={theme.colors.border_color}
            />
        </TouchableOpacity>
    )
}