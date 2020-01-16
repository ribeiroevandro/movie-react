import React, { Component } from 'react';
import api from '../../services/api';
import dayjs from "dayjs";

import './style.css';
class Movie extends Component{

    constructor(props){
        super(props);

        this.state = {
            movie: "",
        }

        this.loadMovie = this.loadMovie.bind(this);
    }

    componentDidMount(){
        this.loadMovie();
    }

    loadMovie = async () => {
        const { id } = this.props.match.params;
        const response = await api.get(`shows/${id}`);

        this.setState({movie: response.data});
        console.log(response.data);
    };

    render(){
        const {movie} = this.state;
        const premiered = dayjs(movie.premiered);
        return(
            <section className="movie-datail">
                <div className="container">
                    {movie.image ? 
                    <div className="single-movie">
                        <aside>
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
                            </article>
                        </div>
                    </div>
                    :null}
                </div>
            </section>
        )
    }
}

export default Movie;