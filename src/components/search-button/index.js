import React, { Component } from 'react';
import './style.css'


class SearchButton extends Component{
    constructor(props){
        super(props);

        this.state = {
            searchField: "",
            fo: "d"
        }

        this.setMovie = this.setMovie.bind(this);
        this.search = this.search.bind(this);
    }

    componentDidMount(){
       
    }

    search(event){
        event.preventDefault();
        this.props.onSubmit(this.state.searchField);
    }

    setMovie(e){
        let movie = e.target.value;
        this.setState({searchField: movie});
    }
 
    render(){

        return(
        <div className="search-button">
                <div className="search-wrap">
                    <form onSubmit = {this.search}>
                        <input type="text" name="search-field" id="search-field" onChange = {this.setMovie} value={this.state.searchField} 
                        />
                        <input type="submit" className="search-btn" value="Buscar"/>
                    </form>
                </div>
        </div>
        )
    }
}


export default SearchButton;