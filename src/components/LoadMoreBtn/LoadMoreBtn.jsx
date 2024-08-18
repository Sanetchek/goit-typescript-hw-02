import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ page, onClickMore }) {
  const handleLoadMore = () => {
    onClickMore(page + 1);
  };

  return (
    <div className={css.container}>
      <button onClick={handleLoadMore} className={css.btn}>
        Load more
      </button>
    </div>
  );
}




