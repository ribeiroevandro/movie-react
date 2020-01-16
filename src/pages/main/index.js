import React, { Component } from 'react';
import api from '../../services/api';
import SearchButton from '../../components/search-button';
import { Link } from 'react-router-dom';
import './style.css'

class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
            movies: [],
        }
    
    }

    componentDidMount(){
        this.loadMovies();

        if (localStorage.getItem('movies')) {
            this.setState({
              movies: JSON.parse(localStorage.getItem('movies'))
            });
            return;
          }
    }

    handleFavorite = id => {
        const favoritedMovies = this.state.movies.map(movie => {
          if (movie.show.id === id) movie.isFavorite = !movie.isFavorite;
          return movie;
        });
        this.setState({
          movies: favoritedMovies
        });
      };

      componentWillUnmount() {
        localStorage.setItem('movies', JSON.stringify(this.state.movies));
      }


  loadMovies = async searchField => {
    const res = await api.get(`search/shows?q=${searchField}`);
    console.log(res.data)
    this.setState({movies: res.data});
    console.log(searchField)

}


    render(){


        return(

           <section className="movie-list">
               <div className="container">
               <SearchButton onSubmit={this.loadMovies}></SearchButton>
               {this.state.movies.map(movie => movie.show.image ?
                   <div key={movie.show.id} className="movie">
                        <span 
                            className={movie.isFavorite ? "fav" :  "unFav" }
                            onClick={() => this.handleFavorite(movie.show.id)}>Favorito
                        </span>
                       <Link className="movie-link" to={`/shows/${movie.show.id}`}>
                            <figure className="wrap-image">
                                <img src={movie.show.image.medium} alt="Pic movie" title="Pic movie"/>
                            </figure>
                            <div className="wrap-description">
                                <small>{movie.show.genres.map((genre,i) => (
                                    <span key={i} className="genre">{genre}</span>
                                ))}
                                </small>
                                <h1 className="movie-title">{movie.show.name}</h1>
                            </div>
                        </Link>
                   </div>:null
               )}
                                  
                </div>
           </section>
        )         
    }
}

export default Main;