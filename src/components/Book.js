import React from 'react';
import noImage from '../images/no-image.jpg';

const Book = ({ book }) => {
  const imageStyle = {
    width: '150px',
    height: '200px'
  }

  return (
    <div className="card">
      <div className="media d-flex justify-content-center">
        <img
          className="mr-3"
          src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : noImage}
          alt="not-found"
          style={imageStyle}
        />
        <div className="media-body">
          <h1>Title: {book.volumeInfo.title ? book.volumeInfo.title : 'Untitled'}</h1>
          <h4>Author(s): {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'No author(s)'}</h4>
          <h5>Publisher: {book.volumeInfo.publisher ? book.volumeInfo.publisher : 'No publisher(s)'}</h5>
          <a target="_blank" rel="noopener noreferrer" href={book.volumeInfo.infoLink}>More info</a>
        </div>
      </div>
    </div>
  );
}

export default Book;
