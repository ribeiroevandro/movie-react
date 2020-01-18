import React, { Component } from 'react';
import api from '../../services/api';
import RelatedMovies from '../../components/related-movies'
import { Link } from 'react-router-dom';
import dayjs from "dayjs";

import './style.css';
class Movie extends Component{

    constructor(props){
        super(props);

        this.state = {
            movie: "",
            related: []   
        }

    this.loadMovie = this.loadMovie.bind(this);
    }

    componentWillMount(){
        const movieFav = JSON.parse(localStorage.getItem('movies'));
        this.setState({related: movieFav})
    }

    componentDidMount(){
        this.loadMovie();

    }

    handleFavorite = id => {
        const favoritedMovie = this.state.movie;

        if (favoritedMovie.id === id) favoritedMovie.isFavorite = !favoritedMovie.isFavorite;
      };

    loadMovie = async () => {
        
        const { id } = this.props.match.params;
        const movieFav = JSON.parse(localStorage.getItem('movies'));
        const response = await api.get(`shows/${id}`);
        movieFav.map(movieIN => {
            if (movieIN.show.id === response.data.id){
                this.setState({movie: movieIN.show}); 

            }
          });      
    };

    render(){
        const {movie} = this.state;
        const premiered = dayjs(movie.premiered);

        return(
            
            <section className="movie-detail">
                <div className="container">
                    {movie.image ? 
                    <div className="single-movie">
                        <aside> 
                            <span 
                                className={movie.isFavorite ? "fav" :  "unFav" }
                                onClick={() => this.handleFavorite(movie.id)}>Favorito
                            </span>
                            <figure className="movie-poster">
                                <img src={movie.image.original} alt=""/>
                            </figure>
                        </aside>
                        <div className="movie-description">
                            <h1 className="single-movie-title">{movie.name}</h1><span className="release-date">{premiered.format("YYYY")}</span>
                            <small>{movie.genres.map((genre,i) => (
                                <span className="movie-genres" key={i}>{genre}</span>
                            ))}</small>
                            <article>
                                <p className="full-description" dangerouslySetInnerHTML= {{__html: movie.summary}}></p>
                                <Link to="/">Voltar para a listagem</Link>
                            </article>
                        </div>
                    </div>
                    :null}
                </div>
                <RelatedMovies related={this.state.related} ></RelatedMovies>
            </section>  
        )
    }
}

export default Movie;