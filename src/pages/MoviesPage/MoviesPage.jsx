import { useEffect, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { getSearchedMovie } from "../../api/apiServices";
import noPoster from "../../images/noposter.jpg";
import {
  Form,
  Input,
  Button,
  ContainerDiv,
  ListUl,
  ListItemLi,
  ItemLink,
  ItemImg,
  ItemInfoDiv,
  ItemTitleH2,
  ItemRateSpan,
} from "./MoviePage.styled";

export default function MoviesView() {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentQuery = searchParams.get("query");
  const location = useLocation();

  useEffect(() => {
    if (currentQuery) {
      getSearchedMovie(currentQuery).then(setMovies);
    }
  }, [currentQuery]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.currentTarget.elements.inputValue.value;

    if (query.trim() === "") {
      return;
    }

    setSearchParams({ query: query });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="inputValue"
          autoComplete="off"
          autoFocus
          placeholder="Searched movie..."
        />
        <Button type="submit">Search</Button>
      </Form>
      {movies && (
        <ContainerDiv>
          {movies.length > 0 && (
            <ListUl>
              {movies.map((movie) => (
                <ListItemLi key={movie.id}>
                  <ItemLink to={`${movie.id}`} state={{ from: location }}>
                    <div>
                      <ItemImg
                        src={
                          movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                            : noPoster
                        }
                        alt={movie.title}
                      />
                    </div>
                    <ItemInfoDiv>
                      <ItemTitleH2>{movie.title}</ItemTitleH2>
                      <ItemRateSpan>{movie.vote_average}</ItemRateSpan>
                    </ItemInfoDiv>
                  </ItemLink>
                </ListItemLi>
              ))}
            </ListUl>
          )}
          {movies.length === 0 && <p>Nothing was found</p>}
        </ContainerDiv>
      )}
    </>
  );
}
