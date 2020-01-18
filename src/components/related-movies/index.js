import React, {Component} from 'react';

import './style.css'

class RelatedMovies extends Component{
    constructor(props){
        super(props);

        this.state = {
            relateds: this.props.related,
            
        }

    }

    render(){
        const { relateds } = this.state;
        return(
            <div className="related-movies">
                <div className="container">
                    <h3>Você também pode gostar: </h3>
                   {relateds.slice(0, 5).map((rel) => rel.show.image ?
                    <div className="rel-movie" key={rel.show.id}>
                        <figure>
                            <img src={rel.show.image.medium} alt=""/>
                        </figure>
                        <h2>{rel.show.name}</h2>
                    </div>:null
                   )}
                         
                </div>
            </div>
        )
    }
}

export default RelatedMovies;