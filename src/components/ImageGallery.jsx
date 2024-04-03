import ImageCard from "./ImageCard";

export default function ImageGallery({ images, openModal }) {
  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
}
