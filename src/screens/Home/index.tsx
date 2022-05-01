import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import Logo from '../../assets/images/logo_pokemon.svg'
import { Card } from "../../components/Card";
import { SearchBox } from "../../components/SearchBox";
import { api } from "../../services/api";
import { styles } from "./styles";



export function Home() {
    const [pokeList, setPokeList] = useState()

    async function getData() {
        const response = await api.get('pokemon')

        setPokeList(response.data.results)

    }


    useEffect(() => {
        getData();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <Logo style={styles.logo} />
                <SearchBox />

            </View>

            <View style={styles.content}>

                <FlatList
                    style={styles.list}
                    showsVerticalScrollIndicator={false}
                    data={pokeList}
                    keyExtractor={item => String(item.name)}
                    renderItem={({ item }) =>
                        <Card title={item.name} icon={false} />
                    }

                />



            </View>


        </View>
    )
}