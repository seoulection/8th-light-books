import React from 'react';
import noImage from '../images/no-image.jpg';

const IMAGE_WIDTH = '150px';
const IMAGE_HEIGHT = '200px';
const IMAGE_ALT = 'not-found';
const NO_TITLE = 'Untitled';
const NO_AUTHORS = 'No Author(s)';
const NO_PUBLISHER = 'No Publisher';

const Book = ({ book: { volumeInfo: { imageLinks, title, authors, publisher, infoLink } } }) => {

  const imageStyle = {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT
  }

  return (
    <div className="card">
      <div className="media d-flex justify-content-center">
        <img
          className="mr-3"
          src={imageLinks ? imageLinks.smallThumbnail.replace('http://', 'https://') : noImage}
          alt={IMAGE_ALT}
          style={imageStyle}
        />
        <div className="media-body">
          <h1>Title: {title ? title : NO_TITLE}</h1>
          <h4>Author(s): {authors ? authors.join(', ') : NO_AUTHORS}</h4>
          <h5>Publisher: {publisher ? publisher : NO_PUBLISHER}</h5>
          <a target="_blank" rel="noopener noreferrer" href={infoLink.replace('http://', 'https://')}>More info</a>
        </div>
      </div>
    </div>
  );
}

export default Book;
