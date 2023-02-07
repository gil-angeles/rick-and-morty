import { useQuery } from 'react-query'
import axios from 'axios';

const GetAllCharacters = () => {
    return useQuery({
        queryKey: ['get-characters'],
        queryFn: () =>
            axios
                .get("https://rickandmortyapi.com/api/character")
                .then((res) => res.data),
    })
}

const GetPageCharacters = (page: number) => {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`
    return useQuery({
        queryKey: ['get-page-characters'],
        queryFn: () =>
            axios
                .get(url)
                .then((res) => res.data),
    })
}

export {GetAllCharacters, GetPageCharacters}