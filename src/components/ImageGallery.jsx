import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.css'; // Importa los estilos según sea necesario

class ImageGallery extends Component {
  render() {
    const { children } = this.props;
    return <ul className="gallery">{children}</ul>;
  }
}

ImageGallery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ImageGallery; 