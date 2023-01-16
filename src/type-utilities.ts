type Movies = {
  id: number;
  name: string;
  isLocated: boolean;
};

const movie: Readonly<Movies> = {
  id: 1,
  name: "Eliezer e as libs do Azure ",
  isLocated: true,
};

function updateMovie(movie: Movies, fieldsToUpdate: Partial<Movies>) {
  return { ...movie, ...fieldsToUpdate };
}

const movie2: Movies = updateMovie(movie, { isLocated: false });

// PICK

type PreviewMovie = Pick<Movies, "id" | "name">;

const pMovie: PreviewMovie = {
  id: 2,
  name: "Yan só reclama",
};

// Omit

type PreviewMovie2 = Omit<Movies, "isLocated">

const pMovie2: PreviewMovie2 = {
    id: 3,
    name: "Yan só reclama 2"
} 