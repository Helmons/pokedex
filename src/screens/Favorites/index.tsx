import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

import { useFavorite } from "../../hooks/favorites";

import { Card } from "../../components/Card";
import { LoadingAnimation } from "../../components/LoadingAnimation";

import { styles } from "./styles";
import { useFocusEffect } from "@react-navigation/native";

interface PokemonProps {
    id: string;
    name: string;
    favorited: boolean
}

export function Favorites() {
    const { pokemonProps } = useFavorite()
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([] as Array<PokemonProps>)


    useFocusEffect(
        React.useCallback(() => {
           
            setData([...pokemonProps])

            setLoading(false)
  
           return () => {
            setLoading(false)
           }
            
        }, [])
     )


    /* useEffect(() => {

        setData([...pokemonProps])

    }, [pokemonProps]) */

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Favoritos</Text>

            </View>

            <View style={styles.content}>

                {
                    loading ? <LoadingAnimation /> :

                        <FlatList
                            style={styles.list}
                            showsVerticalScrollIndicator={false}
                            data={data}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) =>
                                <Card title={item.name} icon={item.favorited} onPress={() => { }} />
                            }
                        />
                }
                
                { data.length === 0 && <Text style={styles.alert}>Nenhum favorito salvo</Text> }

            </View>

        </View>
    )
}