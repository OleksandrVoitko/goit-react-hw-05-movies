import { useEffect, useState } from "react";
import { getTrendingMovie } from "../../api/apiServices";

import {
  ContainerDiv,
  ListUl,
  ListItemLi,
  ItemLink,
  ItemImg,
  ItemInfoDiv,
  ItemTitleH2,
  ItemRateSpan,
} from "./HomePage.styled";
import noPoster from "../../images/noposter.jpg";

export default function HomeView() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovie().then(setMovies);
  }, []);

  return (
    <ContainerDiv>
      <ListUl>
        {movies &&
          movies.map((movie) => (
            <ListItemLi key={movie.id}>
              <ItemLink to={`movies/${movie.id}`}>
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
    </ContainerDiv>
  );
}
