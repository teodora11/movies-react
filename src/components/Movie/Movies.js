import React, { Component } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import NewMovie from './NewMovie';

export default class Movies extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.setState(() => ({
      movies: MovieService.getMovies(),

      newId: '',
      newTitle: '',
      newSubtitle: '',
      newDescription: '',
      newYear: '',
      newImageUrl: '',
      newRating: '',

      ratingNumber: 0
    }));
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid" style={{ marginLeft: '-15px' }}>
          <button className='btn btn-warning m-2'><Link to='/new-movie'>Add movie</Link></button>
          <button className='btn btn-warning m-2'><Link to='/'>Movies</Link></button>
          <Route path='/' exact render={() =>
            <div className="d-flex flex-row">
              <div className="col-sm-12">
                <MovieList movies={this.state.movies}
                  deleteMovie={this.handleDelete}
                  rateMovie={this.handleRate} />
              </div>
            </div>
          } />
          <Route path='/new-movie' render={() =>
            <NewMovie
              newId={this.state.newId}
              newTitle={this.state.newTitle}
              newSubtitle={this.state.newSubtitle}
              newDescription={this.state.newDescription}
              newYear={this.state.newYear}
              newImageUrl={this.state.newImageUrl}
              newRating={this.state.newRating}
              onChange={this.handleInput}
              onAdd={this.handleAdd}
            />
          }
          />

        </div>
      </BrowserRouter>
    );
  }

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.newTitle);
  }

  handleAdd = () => {
    let movie = {
      id: this.state.newId,
      title: this.state.newTitle,
      subtitle: this.state.newSubtitle,
      description: this.state.newDescription,
      year: this.state.newYear,
      imageUrl: this.state.newImageUrl,
      rating: this.state.newRating
    }
    console.log(movie);
    if (movie.id === "" || movie.title === "" || movie.subtitle === ""
      || movie.description === "" || movie.year === "" || movie.imageUrl === ""
      || movie.rating === "") {
      alert("Preventing an empty submission");
    }
    else {
      const movies = [...this.state.movies, movie];
      this.setState({
        movies,
        newId: '',
        newTitle: '',
        newSubtitle: '',
        newDescription: '',
        newYear: '',
        newImageUrl: '',
        newRating: ''
      });
    }
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter(m => m !== movie);
    this.setState({ movies });
  }

  handleRate = (movie, rate) => {
    const movies = [...this.state.movies];
    const i = movies.indexOf(movie);
    movies[i].rating = rate;
    this.setState({ movies });
  }
}
