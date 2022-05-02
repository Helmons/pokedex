import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import theme from "../../styles/theme";

import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

export function BackButton() {
    const navigation = useNavigation()

    function handleBack() {
        navigation.goBack()
    }

    return(
        <TouchableOpacity style={styles.container} onPress={handleBack}>
            <Ionicons
                name="md-arrow-back-outline"
                size={30}
                color={theme.colors.border_color}
            />
        </TouchableOpacity>
    )
}