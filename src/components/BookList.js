import React from 'react';
import Book from './Book';

const noBooksFound = 'No books were found!';

const BookList = ({ books }) => {
  let renderedList;
  if (books) {
    renderedList = books.map((book) => {
      return <Book key={book.id} book={book} />;
    });
  } else {
    renderedList = noBooksFound;
  }

  return (
    <div className="container">
      {renderedList}
    </div>
  );
}

export default BookList;
