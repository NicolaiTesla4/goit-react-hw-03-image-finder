import React from 'react';
import PropTypes from 'prop-types';

class ImageGalleryItem extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.image.largeImageURL);
  };

  render() {
    const { image } = this.props;
    return (
      <li className='imageGalleryItem' onClick={this.handleClick}>
        <img
          src={image.webformatURL} 
          alt={image.tags} 
          className="imageGalleryItem-image"
          data-largeurl={image.largeImageURL} 
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem; 