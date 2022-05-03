import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState
} from 'react';

interface PokemonProps {
    id: string;
    name: string;
    favorited: boolean
}

interface FavoriteContextData {
    handleFavorited: (data: PokemonProps) => Promise<void>
    pokemonProps: PokemonProps[]
    storageLoading: boolean
}

interface FavoritesProviderProps {
    children: ReactNode
}

const FavoritesContext = createContext({} as FavoriteContextData)

function FavoritesProvider({ children }: FavoritesProviderProps) {
    const [saveFavorite, setSaveFavorite] = useState([] )
    const [storageLoading, setStorageLoading] = useState(true)
    //const pokeStorageKey = '@appPokedex:pokemons'


    const saved = [] as Array<PokemonProps>

    async function handleFavorited(data: PokemonProps) {
        let index = saved.findIndex(val => val.name == data.name);
        if (index < 0) {
            saved.push(data)
        } else {
            saved.splice(index, 1)
        }
    }


   /*  useEffect(() => {
        async function loadStorageData() {
           
            const storage = await AsyncStorage.getItem(pokeStorageKey)

            console.log(storage)

            if (storage) {
                const savedPokemonList = JSON.parse(storage)

                setSaveFavorite(savedPokemonList)
            }
            setStorageLoading(false)
        }
        loadStorageData()

    }, []) */


    return (
        <FavoritesContext.Provider value={{
            handleFavorited,
            pokemonProps: saved,
            storageLoading
        }}
        >
            {children}

        </FavoritesContext.Provider>
    )
}

function useFavorite(): FavoriteContextData {
    const context = useContext(FavoritesContext)

    return context
}

export { FavoritesProvider, useFavorite }