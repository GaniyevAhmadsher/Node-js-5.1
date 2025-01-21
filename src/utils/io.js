import { readFile, writeFile } from "fs/promises";
import { join } from "path";
import { cwd } from "process";

class IO {
  constructor() {
    this.base = join(cwd(), "src", "data");
  }
  async readFile(filename) {
    try {
      const path = join(this.base, filename);
      const data = await readFile(path, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      console.log(error.message);
      throw new Error("Filni o'qishda xatolik yuzaga keldi");
    }
  }
  async writeFile(filename, data) {
    try {
      const path = join(this.base, filename);
      await writeFile(path, JSON.stringify(data, null, 2), "utf-8");
    } catch (error) {
      console.log(error.message);
      throw new Error("Filni yozishda xatolik yuzaga keldi");
    }
  }
}

export default IO;
