import { useParams } from "react-router-dom";
import useCurrentCharacterQuery from "../hooks/useCurrentCharacterQuery";

function CurrentCharacter() {
    const params = useParams();
    const ID = params['*'];
    const { data: CurrentCharacter, isFetching } = useCurrentCharacterQuery(ID);

    if (isFetching) {
        return (
            <p>loading...</p>
        )
    }

    return (
        <div>
            <h1>{CurrentCharacter?.name}</h1>
            <img src={CurrentCharacter?.image} alt={CurrentCharacter?.name} />
        </div>
    );
}

export default CurrentCharacter;