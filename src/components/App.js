import React from 'react';
import SearchBar from './SearchBar.js';
import BookList from './BookList.js';
import google from '../apis/google';

class App extends React.Component {
  state = { books: [] };

  onTermSubmit = async term => {
    const response = await google.get('/volumes', {
      params: {
        q: term,
        maxResults: 40
      }
    });
    this.setState({ books: response.data.items });
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <BookList books={this.state.books} />
        </div>
      </div>
    );
  }
}

export default App;
