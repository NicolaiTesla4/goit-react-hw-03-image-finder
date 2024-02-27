import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'; // Importar estilos según sea necesario

const ImageGalleryItem = ({ image, onClick }) => {
  const handleClick = () => {
    onClick(image.largeImageURL);
  };

  return (
    <li className="ImageGalleryItem">
      <img src={image.webformatURL} alt="" className="ImageGalleryItem-image" onClick={handleClick} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem; 