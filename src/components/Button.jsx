import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'; // Importar estilos según sea necesario

const Button = ({ onClick }) => {
  return (
    <button type="button" className="Button" onClick={onClick}>
      Load More
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
