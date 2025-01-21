import IO from "../utils/io.js";

class FilmsService {
  constructor() {
    this.fs = new IO();
  }
  async getTopMovies(limit) {
    const data = await this.fs.readFile("movies.json");
    const result = data
      .sort((a, b) => b.rating - a.rating)
      .filter((f, index) => index < limit && f.rating >= 7)
      .sort((a, b) => a.id - b.id);
    return result;
  }
  async getMoviesByGenre(genre) {
    const data = await this.fs.readFile("movies.json");
    const result = data.filter((f) => f.genre.toLowerCase().includes(genre));
    return result;
  }
  async getMoviesByCountry(country) {
    const data = await this.fs.readFile("movies.json");
    const result = data.filter((f) =>
      f.country.toLowerCase().includes(country)
    );
    return result;
  }
  async getMoviesByYear(from, to) {
    if (from <= to) {
      const data = await this.fs.readFile("movies.json");
      const result = data.filter((f) => f.year >= from && f.year <= to);
      return result;
    } else {
      throw new Error(
        "Birinchi kiritilgan yil ikkinchi kiritilgan yildan kichik bo`lishi talab etiladi"
      );
    }
  }
  async getMoviesByDuration(time) {
    const data = await this.fs.readFile("movies.json");
    const result = data.filter((f) => f.duration === +time);
    return result;
  }
  async getMoviesBySearch(q) {
    const data = await this.fs.readFile("movies.json");
    const result = data.filter(
      (f) =>
        f.title.toLowerCase().includes(q) ||
        f.genre.toLowerCase().includes(q) ||
        f.country.toLowerCase().includes(q)
    );
    return result;
  }
  async addMovie(body) {
    const data = await this.fs.readFile("movies.json");
    const item = { id: data.length + 1, ...body };
    data.push(item);
    await this.fs.writeFile("movies.json", data);
    return data;
  }
}

export default FilmsService;
