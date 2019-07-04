import React from 'react';
import Book from './Book';

const NOT_FOUND = 'No books were found!';

const BookList = ({ books }) => {
  let renderedList;
  if (books) {
    renderedList = books.map((book) => {
      return <Book key={book.etag} book={book} />;
    });
  } else {
    renderedList = NOT_FOUND;
  }

  return (
    <div className="container">
      {renderedList}
    </div>
  );
}

export default BookList;
