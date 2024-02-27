import React from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.css'; // Importa los estilos según sea necesario

const ImageGallery = ({ children }) => {
  return <ul className="gallery">{children}</ul>;
};

ImageGallery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ImageGallery;