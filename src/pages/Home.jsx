// components

import Card from "../components/Card";
import Pagination from "../components/Pagination";

// containers

import FlexCotainer from "../containers/FlexContainer";
import Main from "../containers/Main";

// others

import useCharactersQuery from "../hooks/useCharactersQuery"
import useCurrentPageStore from "../store/useCurrentPageStore";

function Home() {
    const currentPage = useCurrentPageStore((state) => state.currentPage);
    const { data: characters, isLoading } = useCharactersQuery(currentPage);

    if (isLoading) {
        return (
            <Main>
                <FlexCotainer justify={'center'} >
                    <img className="c-logoImg" src="https://logosmarcas.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" alt="logo" />
                </FlexCotainer>
                <FlexCotainer>
                    <img className="c-logoImg" src="https://media.giphy.com/media/3o7aD2d7hy9ktXNDP2/giphy.gif" alt="logo" />
                </FlexCotainer>
            </Main>
        )
    }

    return (
        <Main>
            <FlexCotainer justify={'center'} >
                <img className="c-logoImg" src="https://logosmarcas.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" alt="logo" />
            </FlexCotainer>
            <FlexCotainer>
                {characters?.results.map((character) => (
                    <Card key={character.id} data={character} />
                ))}
            </FlexCotainer>
            <Pagination
                totalCount={characters?.info.count}
                pageSize={20}
                currentPage={currentPage}
                siblingCount={5}
            />
            <div className="l-footer">
                <img className="c-logoImgMin" src="https://logosmarcas.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" alt="logo" />
                <p className="c-textFooter">a website by mateus do prado ferreira</p>
                <p className="c-textFooter">RICK & MORTY  © 2022</p>
            </div>
        </Main>
    )
}

export default Home;
