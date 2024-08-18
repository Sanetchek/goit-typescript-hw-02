import css from './ImageCard.module.css';

export default function ImageCard({ item, onImageClick }) {
  const handleImageClick = (event) => {
    const image = event.target.getAttribute('data-image');
    onImageClick(image);
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





