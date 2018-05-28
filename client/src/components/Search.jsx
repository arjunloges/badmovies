import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
      currentGenre: '12'
    };
    this.getGenres = this.getGenres.bind(this);
  }

  componentDidMount() {
    this.getGenres();
    this.searchGenre();
  }

  getGenres() {
    axios.get('/genres')
    .then((res) => {
      this.setState ({
        genres: res.data
      })
    })
  }

  searchGenre() {
    this.props.getMovies(this.state.currentGenre)
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select onChange={(e) => this.setState({currentGenre: e.target.value})}>
          {this.state.genres.map((genre) => {
            return (
              <option value={genre.id}>{genre.name}</option>
              )
          }
          )}
        </select>
        <br/><br/>

        <button onClick={() => this.searchGenre()}>Search</button>

      </div>
    );
  }
}

export default Search;
