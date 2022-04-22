import { useState, useEffect } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import { getMovieDetails } from "../../api/apiServices";

import {
  WrapperDiv,
  WrapperImgDiv,
  WrapperInfoDiv,
  FirstTitleH1,
  RateSpan,
  SecondTitleH2,
  ThirdTitleH3,
  ButtonsDiv,
  ButtonNavLink,
  MovieInfoDiv,
} from "./MovieDetailsPage.styled";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  let location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <WrapperDiv>
          <WrapperImgDiv>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movieId}
            />
            <WrapperInfoDiv>
              <FirstTitleH1>
                {movie.original_title} ({movie.release_date.slice(0, 4)})
              </FirstTitleH1>
              <p>
                User Score: <RateSpan>{movie.vote_average}</RateSpan>{" "}
              </p>
              <SecondTitleH2>Overview</SecondTitleH2>
              <p>{movie.overview}</p>
              <ThirdTitleH3>
                {movie.genres.map((genre) => genre.name + " ")}
              </ThirdTitleH3>
            </WrapperInfoDiv>
          </WrapperImgDiv>
          <ButtonsDiv>
            <ButtonNavLink to={location?.state?.from ?? "/"}>
              Go back
            </ButtonNavLink>
            <MovieInfoDiv>
              <ButtonNavLink
                to="reviews"
                state={{ from: location?.state?.from ?? "/" }}
              >
                Reviews
              </ButtonNavLink>
              <ButtonNavLink
                to="cast"
                state={{ from: location?.state?.from ?? "/" }}
              >
                Cast
              </ButtonNavLink>
            </MovieInfoDiv>
          </ButtonsDiv>

          <Outlet />
        </WrapperDiv>
      )}
    </>
  );
}
