import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem'; 

class ImageGallery extends Component {
  render() {
    const { images, onImageClick } = this.props;
    return (
      <ul className="gallery">
        {images.map(image => (
          <ImageGalleryItem 
            key={image.id} 
            image={image} 
            onClick={onImageClick} 
          />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery; 