import React, { Component } from 'react';
import api from '../../services/api';
import './style.css'

class Main extends Component{

    state = {
        movies: [],
    }

    componentDidMount(){
        this.loadMovies();
    }

  loadMovies = async () => {
    const res = await api.get("sem");
    console.log(res.data)
    this.setState({movies: res.data});

}

    render(){
        return(

           <section className="movie-list">
               <div className="container">
               {this.state.movies.map(movie => (
                   <div key={movie.show.id} className="movie">
                        <figure className="wrap-image">
                            <img src={movie.show.image.medium} alt="Photo movie" title="Photo movie"/>
                        </figure>
                        <span className="genre">{movie.show.genres}</span>
                        <h1 className="movie-title">{movie.show.name}</h1>
                   </div>
               ))}
                                  
                </div>
           </section>
        )         
    }
}

export default Main;