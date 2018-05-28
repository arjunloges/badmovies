import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'; 
import Search from './components/Search.jsx';
import Movies from './components/Movies.jsx';

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      movies: [{deway: "movies"}],
      favorites: [{deway: "favorites"}],
      showFaves: false

    };
    this.getMovies = this.getMovies.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.swapFavorites = this.swapFavorites.bind(this);

    // you might have to do something important here!
  }

  getMovies(genre) {
    axios.get('/search',{params:{foo: genre}})
    .then((res) => {
      this.setState ({
        movies: res.data
      })
    })
  }

  saveMovie(movie) {
    // console.log('THIS IS THE MOVIE:', movie, idx);
    axios.post('/save', { 
      movie
    })
    .then(() => {
      console.log('made it back to the front after saving')
    })
  }

  deleteMovie(movie) {
    
  }

  swapFavorites() {
  //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  render () {
  	return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header> 
        
        <div className="main">
          <Search swapFavorites={this.swapFavorites} showFaves={this.state.showFaves} getMovies={this.getMovies}/>
          <Movies movies={this.state.showFaves ? this.state.favorites : this.state.movies} showFaves={this.state.showFaves} deleteMovie={this.deleteMovie} saveMovie={this.saveMovie}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));