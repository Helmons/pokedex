import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import Logo from '../../assets/images/logo_pokemon.svg'
import { Card } from "../../components/Card";
import { SearchBox } from "../../components/SearchBox";
import { api } from "../../services/api";
import { styles } from "./styles";


interface Pokelist {
    id: string;
    name: string;
}

export function Home() {
    const navigation = useNavigation()
    const [search, setSearch] = useState('')
    const [pokeList, setPokeList] = useState([] as Array<Pokelist>)
    const [query, setQuery] = useState([] as Array<Pokelist>)


    async function getData() {
        const response = await api.get('pokemon')

        //setPokeList(response.data.results)
        const responseData = response.data.results

        if (responseData != null) {

            const data = []
            for (let i in responseData) {
                const list = {
                    id: i,
                    name: responseData[i].name
                }

                data.push(list)
            }
            setPokeList([...data])
            setQuery([...data])
        }
    }

    const filter = () =>
        pokeList.filter((item: any) => {
            const titleMatch = item.name
                .toLowerCase()
                .includes(search.toLowerCase())
            if (titleMatch) {
                return item
            }
            return null
        })

console.log(pokeList)

    function handleNavigate(name: string) {

        console.log(name)
        navigation.navigate('Details', { name } as never)
    }

    useEffect(() => {

        if (search !== '') {
            setQuery(filter())
        } else {
            getData()
        }

    }, [search])

    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <Logo style={styles.logo} />
                <SearchBox
                    placeholder="Pesquisa"
                    autoCorrect={false}
                    autoCapitalize='none'
                    onChangeText={setSearch}
                    value={search}
                />

            </View>

            <View style={styles.content}>

                <FlatList
                    style={styles.list}
                    showsVerticalScrollIndicator={false}
                    data={query}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <Card title={item.name} icon={false} onPress={() => { handleNavigate(item.name) }} />
                    }

                />

            </View>


        </View>
    )
}