import React, { Component } from 'react';
import PropTypes from 'prop-types';  

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state.query);
  };

  render() {
    const { query } = this.state;

    return (
      <header className='searchbar'>
        <form className='searchForm' onSubmit={this.handleSubmit}>
          <button type="submit" className='searchForm-button'>
            <span className='searchForm-button-label'>Search</span>
          </button>
          <input
            className='searchForm-input'
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
