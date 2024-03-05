 import React, { Component } from 'react';
import Searchbar from './Searchbar.jsx';
import ImageGallery from './ImageGallery.jsx';
import Button from './Button.jsx';
import Modal from './Modal.jsx';
import Loader from './Loader.jsx';
import { fetchImages } from './API/fetchimages.js';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    showModal: false,
    largeImageURL: '',
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleEscKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscKeyPress);
  }

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

  handleEscKeyPress = (event) => {
    if (event.key === 'Escape') {
      this.handleCloseModal();
    }
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
      <div className='app'>
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