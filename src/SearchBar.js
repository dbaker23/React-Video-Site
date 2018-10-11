import React, {Component} from 'react';

export class  SearchBar extends Component {
    constructor( props ) {
        super( props );

        this.state = { term: '' };        
    }

    render() {
        return (
            <div>
                <input 
                    value={ this.state.term }
                    onChange={ event => this.setState({ term: event.target.value }) }/>
                <p>Input: {this.state.term}</p>
            </div>
        );
    }
} 