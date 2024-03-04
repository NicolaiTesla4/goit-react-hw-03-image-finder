import React from 'react';
import PropTypes from 'prop-types'; 

class ImageGalleryItem extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.image.largeImageURL);
  };

  render() {
    const { image } = this.props;
    return (
      <li className="gallery-item" onClick={this.handleClick}>
        <img src={image.webformatURL} alt="" />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem; 
