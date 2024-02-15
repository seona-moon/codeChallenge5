import express from "express";
import {
  home,
  movieDetail,
  filterMovie,
  getAdd,
  postAdd,
} from "./movieController";

const movieRouter = express.Router();

movieRouter.get("/", home);
movieRouter.route("/add").get(getAdd).post(postAdd);
movieRouter.get("/filter", filterMovie);
movieRouter.get("/:id", movieDetail);

export default movieRouter;
