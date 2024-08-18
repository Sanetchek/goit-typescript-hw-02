import { useEffect, useState } from "react";
import { searchPhotos, Photo } from "../../gallery-api";

import css from "./App.module.css";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

export default function App() {
  const [galleryArray, setGalleryArray] = useState<Photo[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [topic, setTopic] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const handleSearch = async (newTopic: string) => {
    if (newTopic === topic) {
      return;
    }

    setTotalPages(0);
    setGalleryArray([]);
    setTopic(newTopic);
    setCurrentPage(1);
  };

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Fetch photos whenever the topic or currentPage changes
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
      } catch (error: unknown) {
        setError(true);
        console.error((error as Error).message);
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
