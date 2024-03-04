/* export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
}; */


import { Component } from 'react';
import  Searchbar  from './Searchbar.jsx';
import  ImageGallery  from './ImageGallery.jsx';
import  Button  from './Button.jsx';
import { fetchImages } from './API/fetchimages.js';   
import  Loader  from './Loader';
import Modal from './Modal';

let page = 1;
let search = '';

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    urlModal: null,
    altModal: null,
  };

  handleClick = async e => {
    this.setState({ isLoading: true });
    page += 1;
    try {
      const info = await fetchImages(search, page);
      this.setState({ images: [...this.state.images, ...info.data.hits] });
    } catch (error) {
      this.setState({ error });
    } finally {
      window.scrollBy({
        top: 500,
        behavior: 'smooth',
      });
      this.setState({ isLoading: false });
    }
  };

  handleImgClick = e => {
    this.setState({
      urlModal: e.target.dataset.largeurl,
      altModal: e.target.alt,
    });
  };

  handleModalClick = e => {
    if (e.target.className.includes('overlay'))
      this.setState({ urlModal: null });
  };

  handleModalKey = e => {
    if (e.key === 'Escape') this.setState({ urlModal: null });
  };

  onHandleSubmit = async e => {
    e.preventDefault();
    this.setState({ isLoading: true });
    this.setState({ images: [] });
    page = 1;
    search = e.target.elements[1].value.trim();
    try {
      const info = await fetchImages(search, page);
      this.setState({ images: info.data.hits });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <div className="app">
        <Searchbar onHandleSubmit={this.onHandleSubmit} />
        {this.state.error && (
          <p>Whoops, something went wrong: {this.state.error.message}</p>
        )}
        <ImageGallery
          list={this.state.images}
          onHandleClick={this.handleImgClick}
        />
        {this.state.isLoading && <Loader />}
        {this.state.images.length ? (
          <Button onHandleClick={this.handleClick} />
        ) : null}
        {this.state.urlModal && (
          <Modal
            src={this.state.urlModal}
            alt={this.state.altModal}
            onHandleClick={this.handleModalClick}
            onHandleKey={this.handleModalKey}
          />
        )}
      </div>
    );
  }
}

export { App }; 