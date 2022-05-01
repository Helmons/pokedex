import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { Card } from "../../components/Card";
import { api } from "../../services/api";
import { styles } from "./styles";



export function Details() {
    const [pokeList, setPokeList] = useState()
    const [name, setName] = useState('bulbasaur')


    async function getData() {
        const response = await api.get(`pokemon/${name}`)

        setPokeList(response.data.abilities)
       // console.log(response.data.abilities)
    }
    console.log(pokeList)

    useEffect(() => {
        getData()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Detalhes</Text>

            </View>

            <View style={styles.content}>
                <Text style={styles.subTitle}>Habilidades</Text>

                <FlatList
                    style={styles.list}
                    showsVerticalScrollIndicator={false}
                    data={pokeList}
                    keyExtractor={item => item.ability.name}
                    renderItem={({ item }) =>
                        <Card title={item.ability.name} icon={false} />
                    }
                />
            </View>

        </View>
    )
}