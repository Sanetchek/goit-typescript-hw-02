import React from "react";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

interface SearchBarProps {
  onSubmit: (searchValue: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps): JSX.Element {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const form = event.currentTarget;
    const searchValue = (form.elements.namedItem("search") as HTMLInputElement).value.trim();

    if (!searchValue) {
      toast.error("Please enter a search term.", {
        position: 'top-right',
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
