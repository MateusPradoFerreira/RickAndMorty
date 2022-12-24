import { useQuery } from "react-query";
import { API } from "../services/api/api";

async function getCharacters(ctx) {
    const [, currentPage] = ctx.queryKey;
    const { data } = await API.get(`/character/?page=${currentPage}`);
    return data;
}

export default function useCharactersQuery(currentPage) {
    return useQuery(['currentCharacter', currentPage], getCharacters, { cacheTime: 0 });
}