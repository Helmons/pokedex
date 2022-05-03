import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, Alert } from "react-native";
import { api } from "../../services/api";

import { useRoute } from "@react-navigation/native";
import { useFavorite } from "../../hooks/favorites";

import { BackButton } from "../../components/BackButton";
import { Card } from "../../components/Card";

import { FavoriteButton } from "../../components/FavoriteButton";
import { styles } from "./styles";

import { LoadingAnimation } from "../../components/LoadingAnimation";


interface Params {
    item: {
        id: string;
        name: string;
        favorited: boolean
    }
}

export function Details() {
    const route = useRoute()
    const { handleFavorited, pokemonProps } = useFavorite()
    const { item } = route.params as Params
    const [loading, setLoading] = useState(false)
    const [favorite, setFavorite] = useState(false)
    const [abilities, setAbilities] = useState()
    const [image, setImage] = useState<any>([])

    async function getData() {
        try {
            setLoading(true)
            const response = await api.get(`pokemon/${item.name}`)

            //console.log(response.data.moves)

            setAbilities(response.data.abilities)
            setImage([
                response.data.sprites.front_default,
                response.data.sprites.back_default,
                response.data.sprites.front_shiny,
                response.data.sprites.back_shiny,
            ])
            // console.log(response.data.abilities)

        } catch (error) {
            Alert.alert('Ops..', 'Erro ao recuperar dados')
        } finally {
            setLoading(false)
        }
    }

    async function handleFavoriteButton() {
        setFavorite(prevState => !prevState)

        const data = {
            id: item.id,
            name: item.name,
            favorited: !favorite
        }

        handleFavorited(data)
    }

    useEffect(() => {
        getData()

        const check = pokemonProps.find(obj => obj.id === item.id) ? true : false

        if (check) {
            setFavorite(true)
        } else {
            setFavorite(false)
        }

    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.titleContainer}>
                    <BackButton />
                    <Text style={styles.title}>Detalhes</Text>
                </View>

                <View style={styles.slideContainer}>
                    {
                        loading ?
                            <View style={styles.slide}/>
                            :
                            <FlatList
                                style={styles.slide}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={image}
                                keyExtractor={item => item}
                                renderItem={({ item }) =>
                                    <Image style={styles.image} source={{ uri: item }} />
                                }
                            />
                    }
                </View>

            </View>


            <View style={styles.content}>
                {
                    loading ? <LoadingAnimation /> :
                        <>
                            <FavoriteButton title="Favorito" onPress={handleFavoriteButton} like={favorite} />

                            <Text style={styles.subTitle}>Habilidades</Text>

                            <FlatList
                                style={styles.list}
                                showsVerticalScrollIndicator={false}
                                data={abilities}
                                keyExtractor={item => item.ability.name}
                                renderItem={({ item }) =>
                                    <Card title={item.ability.name} icon={false} activeIcon={false} />
                                }
                            />
                        </>
                }
            </View>

        </View>
    )
}