import css from './LoadMoreBtn.module.css';

type LoadMore = {
  page: number,
  onClickMore: (newPage: number) => void;
}

export default function LoadMoreBtn({ page, onClickMore }: LoadMore) {
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
