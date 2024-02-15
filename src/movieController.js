import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear,
  addMovie,
} from "./db";

export const home = (req, res) => {
  const movies = getMovies();
  return res.render("home", { pageTitle: "Movies!", movies });
};

export const getAdd = (req, res) => {
  return res.render("add", { pageTitle: "Add Movie" });
};

export const postAdd = (req, res) => {
  const { title, synopsis, genre } = req.body; //POST로부터 데이터를 받아옴
  console.log(title, synopsis, genre);
  addMovie({ title, synopsis, genre });
  return res.redirect("/"); //이전 페이지로 이동.
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
  const { id } = req.params;
  const movie = getMovieById(id);
  if (!movie) {
    return res.status(404).send("Movie not found");
  }
  return res.render("movieDetail", { pageTitle: movie.title, movie });
};
