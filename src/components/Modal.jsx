import React from 'react';
import PropTypes from 'prop-types'; 

class Modal extends React.Component {
  handleClose = () => {
    this.props.onClose();
  };

  render() {
    const { largeImageURL } = this.props;
    return (
      <div className="overlay" onClick={this.handleClose}>
        <div className="modal">
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;


