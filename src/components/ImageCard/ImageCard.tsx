import css from './ImageCard.module.css';
import { Photo } from "../../gallery-api";

interface ImageCardProps {
  item: Photo;
  onImageClick: (image: string) => void;
}

export default function ImageCard({ item, onImageClick }: ImageCardProps) {
  const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    const image = event.currentTarget.getAttribute('data-image');
    if (image) {
      onImageClick(image);
    }
  }

  return (
    <div className={css.imageWrap}>
      <img
        src={item.urls.small}
        data-image={item.urls.regular}
        alt={item.alt_description}
        className={css.image}
        width="400"
        height="240"
        onClick={handleImageClick}
      />
    </div>
  );
}
