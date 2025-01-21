import { Router } from "express";
import FilmsController from "../controller/films.controller.js";

const filmsRouter = Router();
const controller = new FilmsController();

filmsRouter.get("/movies/top", async (req, res) => {
  return await controller.getTopMoviesController(req, res);
});

filmsRouter.get("/movies/genre/:genre", async (req, res) => {
  return await controller.getMoviesByGenreController(req, res);
});

filmsRouter.get("/movies/country/:country", async (req, res) => {
  return await controller.getMoviesByCountryController(req, res);
});

filmsRouter.get("/movies/year", async (req, res) => {
  return await controller.getMoviesByYearController(req, res);
});

filmsRouter.get("/movies/duration", async (req, res) => {
  return await controller.getMoviesByDurationController(req, res);
});

filmsRouter.get("/movies/search", async (req, res) => {
  return await controller.getMoviesBySearchController(req, res);
});

filmsRouter.post("/movie", async (req, res) => {
  return await controller.addMovieController(req, res);
});

export default filmsRouter;
