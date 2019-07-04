import React from 'react';

const PLACEHOLDER = 'Enter search term';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  }

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <div>
        <form className="form-group" onSubmit={this.onFormSubmit}>
          <h2>Book Search:</h2>
          <input
            className="form-control-lg"
            type="text"
            onChange={this.onInputChange}
            placeholder={PLACEHOLDER} />
        </form>
      </div>
    );
  }
}

export default SearchBar;
