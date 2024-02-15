import express from "express";
import { home, movieDetail, filterMovie } from "./movieController";

const movieRouter = express.Router();

movieRouter.get("/", home);
movieRouter.get("/:id", movieDetail);
movieRouter.get("/filter", filterMovie);

export default movieRouter;
