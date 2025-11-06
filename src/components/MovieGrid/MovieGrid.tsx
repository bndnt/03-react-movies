import css from "./MovieGrid.module.css";

import type { Movie } from "../../types/movie";
import Clapperboard from "../../../public/clapperboard.png";

interface MoviesGridProps {
  items: Movie[];
  onSelect: (movie: Movie) => void;
}
const MovieGrid = ({ items, onSelect }: MoviesGridProps) => {
  return (
    <div>
      <ul className={css.grid}>
        {items.map((item) => (
          <li key={item.id} onClick={() => onSelect(item)}>
            <div className={css.card}>
              <span className={css.moviesListItemImgCover}>
                {item.poster_path ? (
                  <img
                    className={css.image}
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    alt={item.title}
                  />
                ) : item.backdrop_path ? (
                  <img
                    className={css.image}
                    src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                    alt={item.title}
                  />
                ) : (
                  <img
                    src={Clapperboard}
                    alt="img"
                    className={(css.image, css.moviesListItemNoImg)}
                  />
                )}
              </span>

              <h2 className={css.title}>{item.title}</h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieGrid;
