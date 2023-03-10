import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    count: 0,
    movies: getMovies(),
  };

  getValue() {
    const { movies } = this.state;

    return movies.length === 0
      ? "ZERO!"
      : `${movies.length} Movies in Database.`;
  }

  onDelete = (movie) => {
    const newMoviees = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: newMoviees });
  };

  render() {
    if (this.state.movies.length === 0) return <h1>No movie found!</h1>;

    return (
      <React.Fragment>
        <p>{this.getValue()}</p>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Genre</th>
              <th scope="col">In Stock</th>
              <th scope="col">Rate</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie, index) => (
              <tr key={movie._id}>
                <th scope="row">{index + 1}</th>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.onDelete(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
