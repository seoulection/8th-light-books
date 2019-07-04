import React from 'react';
import noImage from '../images/no-image.jpg';

const imageWidth = '150px';
const imageHeight = '200px';
const noBookTitle = 'Untitled';
const noAuthors = 'No Author(s)';
const noPublisher = 'No Publisher';

const Book = ({ book }) => {

  const imageStyle = {
    width: imageWidth,
    height: imageHeight
  }

  return (
    <div className="card">
      <div className="media d-flex justify-content-center">
        <img
          className="mr-3"
          src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail.replace('http://', 'https://') : noImage}
          alt="not-found"
          style={imageStyle}
        />
        <div className="media-body">
          <h1>Title: {book.volumeInfo.title ? book.volumeInfo.title : noBookTitle}</h1>
          <h4>Author(s): {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : noAuthors}</h4>
          <h5>Publisher: {book.volumeInfo.publisher ? book.volumeInfo.publisher : noPublisher}</h5>
          <a target="_blank" rel="noopener noreferrer" href={book.volumeInfo.infoLink.replace('http://', 'https://')}>More info</a>
        </div>
      </div>
    </div>
  );
}

export default Book;
