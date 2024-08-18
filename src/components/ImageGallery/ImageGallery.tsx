import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { Photo } from '../../gallery-api';

interface ImageGalleryProps {
  gallery: Photo[];
  onImageClick: (image: string) => void;
}

export default function ImageGallery({ gallery, onImageClick }: ImageGalleryProps) {
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