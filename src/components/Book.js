import React from 'react';

const Book = ({ book }) => {
  const title = book.volumeInfo.title;
  const authors = book.volumeInfo.authors;
  const publisher = book.volumeInfo.publisher;
  const image = book.volumeInfo.imageLinks.smallThumbnail;

  return (
    <div>
      <div>
        <img src={image ? image : 'No image'} alt="hello" />
      </div>
      <div>
        <h1>{title ? title : 'Untitled'}</h1>
        <h4>{authors ? authors.join(', ') : 'No author(s)'}</h4>
        <h5>{publisher ? publisher : 'No publisher(s)'}</h5>
      </div>
    </div>
  );
}

export default Book;
