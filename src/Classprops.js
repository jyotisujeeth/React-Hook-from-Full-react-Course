import React, {Component, component} from 'react';

class Classprops extends Component{
    render () {
        return(
            <div>
                <h1>
                    hello {this.props.name} from {this.props.place}! Welcome
                </h1>
                <p>{this.props.children}</p>
            </div>
        )
    }
}
    
    