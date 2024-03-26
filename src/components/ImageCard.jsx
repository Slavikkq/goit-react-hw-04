export default function ImageCard({ image, openModal }) {
  return (
    <div className="image-card">
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={openModal}
      />
    </div>
  );
}
