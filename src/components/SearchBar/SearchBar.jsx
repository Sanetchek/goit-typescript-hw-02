import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchValue = form.elements.search.value.trim();

    if (!searchValue) {
      toast.error("Please enter a search term.", {
        position: 'right-top'
      });
      return;
    }

    onSubmit(searchValue);
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          name="search"
          placeholder="Search images and photos"
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
      <Toaster />
    </header>
  );
}


