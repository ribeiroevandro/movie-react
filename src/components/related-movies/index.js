import React, {Component} from 'react';

class RelatedMovies extends Component{
    constructor(props){
        super(props);

        this.state = {
            relateds: this.props.related,
            
        }

    }

    componentDidMount(){
        console.log("opa")
        console.log(this.state.relateds)
    }


    render(){
        const { relateds } = this.state;
        return(
            <div className="related-movies">
                <div className="container">
                   {relateds.map((rel) => 
                    <div key={rel.show.id}>
                        <span>{rel.show.name}</span>
                    </div>
                   )}
                         
                </div>
            </div>
        )
    }
}

export default RelatedMovies;