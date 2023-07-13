function moviesToPrint(input) {
  let movies = [];

  input.forEach((cmd) => {
    if (cmd.includes("addMovie")) {
      const [_, name] = cmd.split("addMovie ");
      movies.push({ name });
    } else if (cmd.includes("directedBy")) {
      const [movieName, director] = cmd.split(" directedBy ");
      const movie = movies.find((m) => m.name === movieName);

      if (movie) {
        movie.director = director;
      }
    } else if (cmd.includes("onDate")) {
      const [movieName, date] = cmd.split(" onDate ");
      const movie = movies.find((m) => m.name === movieName);

      if (movie) {
        movie.date = date;
      }
    }
  });

  movies
    .filter((m) => m.name && m.director && m.date)
    .forEach((m) => console.log(JSON.stringify(m)));
}

moviesToPrint([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
