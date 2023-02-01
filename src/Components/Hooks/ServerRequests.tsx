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

export {GetAllCharacters}