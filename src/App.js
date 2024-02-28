import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
        ) : (
          movies.map((movie) => (
            <div class="movies">
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                year={movie.year}
              />
            </div>
          ))
        )}
      </section>
    );
  }
}

export default App;
