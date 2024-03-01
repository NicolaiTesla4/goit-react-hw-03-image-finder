import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

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