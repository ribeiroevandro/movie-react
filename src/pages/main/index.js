import React, { Component } from 'react';
import api from '../../services/api';
import SearchButton from '../../components/search-button'
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
    }

  loadMovies = async searchField => {
    const res = await api.get(searchField);
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
                        <figure className="wrap-image">
                            <img src={movie.show.image.medium} alt="Pic movie" title="Pic movie"/>
                        </figure>
                        <span className="genre">{movie.show.genres}</span>
                        <h1 className="movie-title">{movie.show.name}</h1>
                   </div>:null
               )}
                                  
                </div>
           </section>
        )         
    }
}

export default Main;