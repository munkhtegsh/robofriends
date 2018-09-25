import React, {Component} from 'react';
import CardList from './CardList';

class App extends Component { 
    constructor() {
        super();
        this.state = {
            searchfield: ''
        };
    }

    render() {
        console.log(this.state.searchfield)
        return (
            <div className="tc" >
                <h1>RoboFriends</h1>
                <input
                    onChange={e => this.setState({ searchfield: e.target.value })}
                    className="pa3 ba b--green bg-lightest-blue" placeholder="Search robot" />
                <CardList searchfield={this.state.searchfield}/>
            </div>
        )
    }
}

export default App;