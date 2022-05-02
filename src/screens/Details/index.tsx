import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image } from "react-native";
import { BackButton } from "../../components/BackButton";
import { Card } from "../../components/Card";
import { api } from "../../services/api";
import { styles } from "./styles";


interface Params {
    name: string;
}


export function Details() {
    const route = useRoute()
    const { name } = route.params as Params
    const [pokeList, setPokeList] = useState()
    const [image, setImage] = useState<any>([])

    //const photos = [image.front_default, image.back_default, image.back_shiny, image.front_shiny]

    async function getData() {
        const response = await api.get(`pokemon/${name}`)

        setPokeList(response.data.abilities)
        setImage([
            response.data.sprites.front_default,
            response.data.sprites.back_default,
            response.data.sprites.front_shiny,
            response.data.sprites.back_shiny,
        ])
        // console.log(response.data.abilities)
    }
    //console.log(image)

    useEffect(() => {
        getData()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.titleContainer}>
                    <BackButton/>
                    <Text style={styles.title}>Detalhes</Text>
                </View>
                

                <View style={styles.slideContainer}>
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

                </View>



                {/* <Image style={styles.image} source={{ uri: image.front_default }} />
                <Image style={styles.image} source={{ uri: image.back_default }} />     
                <Image style={styles.image} source={{ uri: image.back_shiny }} />     
                <Image style={styles.image} source={{ uri: image.front_shiny }} />    */}


            </View>

            <View style={styles.content}>
                <Text style={styles.subTitle}>Habilidades</Text>

                <FlatList
                    style={styles.list}
                    showsVerticalScrollIndicator={false}
                    data={pokeList}
                    keyExtractor={item => item.ability.name}
                    renderItem={({ item }) =>
                        <Card title={item.ability.name} icon={false} onPress={() => {}}/>
                    }
                />
            </View>

        </View>
    )
}