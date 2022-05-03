import React, { useEffect, useState } from "react";
import { View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import { api } from "../../services/api";
import theme from "../../styles/theme";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useFavorite } from "../../hooks/favorites";

import Logo from '../../assets/images/logo_pokemon.svg'
import { Card } from "../../components/Card";
import { SearchBox } from "../../components/SearchBox";

import { styles } from "./styles";
import { LoadingAnimation } from "../../components/LoadingAnimation";


interface Pokelist {
    id: string;
    name: string;
    favorited: boolean
}

export function Home() {
    const { pokemonProps } = useFavorite()
    const navigation = useNavigation()
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    const [pokeList, setPokeList] = useState([] as Array<Pokelist>)
    const [query, setQuery] = useState([] as Array<Pokelist>)

    async function getData() {
        try {
            setLoading(true)
            const response = await api.get('pokemon')

            //setPokeList(response.data.results)
            const responseData = response.data.results

            if (responseData != null) {

                const data = []
                for (let i in responseData) {

                    const list = {
                        id: i,
                        name: responseData[i].name,
                        favorited: pokemonProps.find(item => item.id === i) ? true : false
                    }

                    data.push(list)
                }
                setPokeList([...data])
                setQuery([...data])
            }

        } catch (error) {
            Alert.alert('Ops..', 'Erro ao recuperar dados')
        } finally {
            setLoading(false)
        }

    }

    const filter = () =>
        pokeList.filter((item: Pokelist) => {
            const titleMatch = item.name
                .toLowerCase()
                .includes(search.toLowerCase())
            if (titleMatch) {
                return item
            }
            return null
        })


    function handleNavigate(item: Pokelist) {
        navigation.navigate('Details', { item } as never)
    }

    useEffect(() => {

        if (search !== '') {
            setQuery(filter())
        } else {
            getData()
        }

    }, [search])

    useFocusEffect(
        React.useCallback(() => {
            getData()

            return () => { }

        }, [])
    )

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>

                <View style={styles.header}>

                    <Logo style={styles.logo} />
                    <SearchBox
                        testID="input-search"
                        placeholder='Buscar...'
                        placeholderTextColor={theme.colors.placeholder_color}
                        autoCorrect={false}
                        autoCapitalize='none'
                        onChangeText={setSearch}
                        value={search}
                    />

                </View>

                <View style={styles.content}>

                    {
                        loading ? <LoadingAnimation /> :

                            <FlatList
                                style={styles.list}
                                showsVerticalScrollIndicator={false}
                                data={query}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) =>
                                    <Card title={item.name} icon={item.favorited} onPress={() => { handleNavigate(item) }} />
                                }
                            />
                    }

                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}