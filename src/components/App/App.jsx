import { useEffect, useRef, useState } from "react";
import { searchPhotos } from "../../gallery-api";

import css from "./App.module.css";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [galleryArray, setGalleryArray] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [topic, setTopic] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleSearch = async (newTopic) => {
    if (newTopic === topic) {
      return;
    }

    setTotalPages(0);
    setGalleryArray([]);
    setTopic(newTopic);
    setCurrentPage(1);
  };

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (topic === '') {
      return;
    }

    async function getGalleryApi() {
      try {
        setLoader(true);
        setError(false);

        const data = await searchPhotos(topic, currentPage);

        setTotalPages(data.total_pages);
        setGalleryArray((prevGallery) => {
          return [...prevGallery, ...data.results];
        });
      } catch (error) {
        setError(true);
        console.log(error.message);
      } finally {
        setLoader(false);
      }
    }
    getGalleryApi();
  }, [topic, currentPage]);

  return (
    <div className="app">
      <SearchBar onSubmit={handleSearch} />

      <main className={css.container}>
        {error ? (
          <ErrorMessage />
        ) : (
          <ImageGallery gallery={galleryArray} onImageClick={openModal} />
        )}
        {totalPages > 1 && currentPage < totalPages && (
          <LoadMoreBtn page={currentPage} onClickMore={setCurrentPage} />
        )}
        <Loader loader={loader} />
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          imageUrl={selectedImage}
        />
      </main>
    </div>
  );
}

export default App;








