import React from "react";
import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root"); // Set the root of your application as the appElement

export default function ImageModal({ isOpen, onRequestClose, imageUrl }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img src={imageUrl} alt="Modal Content" />
    </Modal>
  );
}
