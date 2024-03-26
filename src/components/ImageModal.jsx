import Modal from "react-modal";

export default function ImageModal({ imageUrl, isOpen, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
    >
      <img src={imageUrl} alt="Large Image" />
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
}
