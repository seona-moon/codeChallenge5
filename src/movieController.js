import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear,
} from "./db";

export const home = (req, res) => {
  const movies = getMovies();
  return res.render("home", { pageTitle: "Movies!", movies });
};

export const filterMovie = (req, res) => {
  const { year, rating } = req.query;
  if (year) {
    const movies = getMovieByMinimumYear(parseInt(year));
    console.log(movies);
    return res.render("filterMovie", {
      pageTitle: `Searching by year: ${year}`,
      movies,
    });
  }
  if (rating) {
    const movies = getMovieByMinimumRating(parseInt(rating));
    return res.render("filterMovie", {
      pageTitle: `Searching by rating: ${rating}`,
      movies,
    });
  }
};

export const movieDetail = (req, res) => {
  // const { id } = req.params;
  // const movie = getMovieById(id);
  // if (!movie) {
  //   return res.status(404).send("Movie not found");
  // }
  // return res.render("movieDetail", { pageTitle: movie.title, movie });

  return res.render("movieDetail");
};
