import React, { Component } from 'react';
import BookDetail from '../containers/BookDetail';
import BookList from '../containers/BookList';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}

export default App;
