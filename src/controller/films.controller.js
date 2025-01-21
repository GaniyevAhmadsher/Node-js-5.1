import FilmsService from "../service/film.service.js";

class FilmsController {
  constructor() {
    this.service = new FilmsService();
  }
  async getTopMoviesController(req, res) {
    try {
      const query = req.query.limit;
      const movies = await this.service.getTopMovies(query);
      res.status(200).json(movies);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async getMoviesByGenreController(req, res) {
    try {
      const genre = req.params.genre.toLowerCase();
      const movies = await this.service.getMoviesByGenre(genre);
      res.status(200).json(movies);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async getMoviesByCountryController(req, res) {
    try {
      const country = req.params.country.toLowerCase();
      const movies = await this.service.getMoviesByCountry(country);
      res.status(200).json(movies);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async getMoviesByYearController(req, res) {
    try {
      const { from, to } = req.query;
      const movies = await this.service.getMoviesByYear(from, to);
      res.status(200).json(movies);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async getMoviesByDurationController(req, res) {
    try {
      const { time } = req.query;
      const movies = await this.service.getMoviesByDuration(time);
      res.status(200).json(movies);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async getMoviesBySearchController(req, res) {
    try {
      const q = req.query.q.toLowerCase();
      const movies = await this.service.getMoviesBySearch(q);
      res.status(200).json(movies);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async addMovieController(req, res) {
    try {
      const body = req.body;
      const movies = await this.service.addMovie(body);
      if (movies) {
        res.status(201).json({ message: "Mofaqiyatli" });
      } else {
        throw new Error("Qo`shilmadi");
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default FilmsController;
