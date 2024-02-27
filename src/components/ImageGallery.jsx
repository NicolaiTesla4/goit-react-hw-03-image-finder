import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import './styles.css'; // Importar estilos según sea necesario

class ImageGallery extends Component {
  render() {
    return (
      <ul className="ImageGallery">
        {this.props.images.map(image => (
          <ImageGalleryItem key={image.id} image={image} onClick={this.props.onOpenModal} />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGallery; 