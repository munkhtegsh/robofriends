import React, {Component} from 'react';
import CardList from './CardList';
import './App.css';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';
import './App.css';
import {connect} from 'react-redux';
import {setSearchField, requestRobots} from './actions';

class App extends Component {
    componentDidMount() {
      this.props.onRequestRobots()
    }

    render() {
        console.log(this.props)
        const {searchField, onSearchChange, isPending, robots} = this.props;
        if (isPending) {
            return (
                <h1>Loading...</h1>
            )
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <input
                        onChange={onSearchChange}
                        className="pa3 ba b--green bg-lightest-blue" placeholder="Search robot" />
                    <Scroll>
                      <ErrorBoundry>
                        <CardList searchfield={searchField} />
                      </ErrorBoundry>
                    </Scroll>
                </div>
            )
        }

    }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
