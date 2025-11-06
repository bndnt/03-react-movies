import css from "./MovieGrid.module.css";

import type { Movie } from "../../types/movie";

interface MoviesGridProps {
  items: Movie[];
}
const MovieGrid = ({ items }: MoviesGridProps) => {
  return (
    <div>
      <ul className={css.grid}>
        {items.map((item) => (
          <li key={item.id}>
            <div className={css.card}>
              <img
                className={css.image}
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt="movie title"
                loading="lazy"
              />
              <h2 className={css.title}>{item.title}</h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieGrid;
