 
/* import { Component } from 'react';
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

export { App };  */


 
import React, { Component } from 'react';
import Searchbar from './Searchbar.jsx';
import ImageGallery from './ImageGallery.jsx';
import Button from './Button.jsx';
import Modal from './Modal.jsx';
import Loader from './Loader.jsx';
import { fetchImages} from './API/fetchimages.js';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    showModal: false,
    largeImageURL: '',
  };

  handleSubmit = async (query) => {
    await this.setState({ query, page: 1, images: [] });
    this.fetchImages();
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }), this.fetchImages);
  };

  handleOpenModal = (largeImageURL) => {
    this.setState({ showModal: true, largeImageURL });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  fetchImages = async () => {
    const { query, page } = this.state;
    this.setState({ isLoading: true });
    try {
      const response = await fetchImages(query, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...response.data.hits],
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      this.setState({ isLoading: false });
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  render() {
    const { images, isLoading, showModal, largeImageURL } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        <ImageGallery images={images} onImageClick={this.handleOpenModal} /> 

        {images.length > 0 && !isLoading && <Button onClick={this.handleLoadMore} />}
        {showModal && <Modal largeImageURL={largeImageURL} onClose={this.handleCloseModal} />}
      </div>
    );
  }
}

export default App; 