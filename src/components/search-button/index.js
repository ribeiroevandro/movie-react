import React, { Component } from 'react';
import './style.css'


class SearchButton extends Component{
    constructor(props){
        super(props);

        this.state = {
            searchField: "",
        }

        this.searchMovie = this.searchMovie.bind(this);
        this.search = this.search.bind(this);
    }

    search(event){
        console.log("clck")
        event.preventDefault();
        this.props.onSubmit(this.state.searchField);
    }

    searchMovie(e){
        let movie = e.target.value;
        this.setState({searchField: movie});
    }
 
    render(){
        return(
        <section className="search-button">
            <div className="container">
                <div className="search-wrap">
                    <form onSubmit = {this.search}>
                        <input type="text" name="search-field" id="search-field" onChange = {this.searchMovie} value={this.state.searchField} 
                        />
                        <input type="submit" className="search-btn" value="Buscar"/>
                    </form>
                </div>
            </div>
        </section>
        )
    }
}


export default SearchButton;