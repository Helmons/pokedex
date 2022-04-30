import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { api } from "../../services/api";
import { styles } from "./styles";


export function Home() {


    async function getData() {
        const response = await api.get('pokemon/')

        console.log(response.data)

    }


    useEffect(() => {
        getData();
    }, [])

    return(
        <View style={styles.container}>
            <View style={styles.container}>
                <Text>React native Home</Text>

            </View>
            
            
        </View>
    )
}