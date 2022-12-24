import { useQuery } from "react-query";
import { API } from "../services/api/api";

async function getCharacter(ctx) {
    const [, currentCharacterID] = ctx.queryKey;
    const { data } = await API.get(`/character/${currentCharacterID}`);
    return data;
}

export default function useCurrentCharacterQuery(currentCharacterID) {
    return useQuery(['currentCharacter', currentCharacterID], getCharacter);
}