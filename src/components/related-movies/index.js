import React, {Component} from 'react';
import api from '../../services/api'
import SearchButton from '../search-button'

class RelatedMovies extends Component{
    constructor(props){
        super(props);

        this.state = {
            relateds: [],
        }
        
        this.loadRelated = this.loadRelated.bind(this);
    }


    componentDidMount(){
        this.loadRelated();
    };

    loadRelated = async searchField => {
    const response = await api.get(`search/shows?q=${searchField}`);
    console.log(searchField);
    console.log("RESPONSE")
    console.log(response.data);

    }

    render(){
        return(
            <div className="related-movies">
                <div className="container">
                    <div className="wrap-related">
                        <h1>TESTE</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default RelatedMovies;