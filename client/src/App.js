import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div className="app">
        <SavedList list={this.state.savedList} />
        <Route path="/" render={ownProps => (
          <MovieList {...ownProps} addToSavedList={this.addToSavedList}/>
          )} exact/>

        <Route path="/movies/:id" render={ownProps => (
          <Movie {...ownProps} addToSavedList={this.addToSavedList}/>
          )} />
      </div>
    );
  }
}
