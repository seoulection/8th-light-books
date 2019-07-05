import React from 'react';
import SearchBar from './SearchBar.js';
import BookList from './BookList.js';
import google from '../apis/google';

const MAX_RESULTS = 40;
const VOLUMES_URI = '/volumes';

class App extends React.Component {
  state = { books: [] };

  onTermSubmit = async term => {
    const response = await google.get(VOLUMES_URI, {
      params: {
        q: term,
        maxResults: MAX_RESULTS
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
