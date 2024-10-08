import 'bootstrap/dist/css/bootstrap.css'
import { Movie } from './Movie';

document.addEventListener("DOMContentLoaded", () => {
  let tbody = document.getElementById("tbody")!;
  const movieForm = document.getElementById("movieForm") as HTMLFormElement;
  const movieTitleInput = document.getElementById("movieTitleInput") as HTMLInputElement;
  const movieDurationInput = document.getElementById("movieDurationInput") as HTMLInputElement;

  const movie : Movie = new Movie("The Lord of The Rings", 190, ["fantasy", "adventure", "romance"])
  const movie2 : Movie = new Movie("Harry Potter", 150, ["fantasy", "drama"])
  const movie3 : Movie = new Movie("John Wick", 130, ["action", "thriller", "noir"])

  const movies : Movie[] = [movie, movie2, movie3];

  function displayMovies(movies : Movie[]) : void {
    tbody.innerHTML = "";
    movies.forEach(element => {
      const tr = document.createElement("tr") as HTMLTableRowElement;
      const td1 = document.createElement('td') as HTMLTableCellElement;
      const td2 = document.createElement('td') as HTMLTableCellElement;
      const td3 = document.createElement('td') as HTMLTableCellElement;

      tbody.appendChild(tr);
      td1.textContent = element.title;
      td2.textContent = element.displayGenres();
      td3.textContent = element.duration.toString();
      tr.appendChild(td1)
      tr.appendChild(td2)
      tr.appendChild(td3)
    });
  };

  displayMovies(movies);

  movieForm.addEventListener("submit", e =>{
    e.preventDefault();
    movies.push(new Movie(movieTitleInput.value, parseInt(movieDurationInput.value), []))
    displayMovies(movies);
  })

})