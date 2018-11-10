import React, {Component} from 'react';
import CardList from './CardList';
import './App.css';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';

class App extends Component {
    constructor() {
        super();
        this.state = {
            users: '',
            searchfield: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ users }));
    }

    render() {
        console.log(this.state.users);
        if (false) {
            return (
                <h1>Loading...</h1>
            )
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <input
                        onChange={e => this.setState({ searchfield: e.target.value })}
                        className="pa3 ba b--green bg-lightest-blue" placeholder="Search robot" />
                    <Scroll>
                      <ErrorBoundry>
                      <CardList searchfield={this.state.searchfield} />
                      </ErrorBoundry>
                    </Scroll>
                </div>
            )
        }

    }
}

export default App;
//test
