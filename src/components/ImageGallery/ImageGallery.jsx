import css from "./ImageGallery.module.css";
import ImageCard from '../ImageCard/ImageCard'

export default function ImageGallery({ gallery, onImageClick }) {
  return (
    <ul className={css.gallery}>
      {gallery.map((item) => (
        <li key={item.id} className={css.galleryItem}>
          <ImageCard item={item} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}







