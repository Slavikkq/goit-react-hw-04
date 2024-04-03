export default function ImageCard({ image, openModal }) {
  const handleClick = () => {
    openModal(image);
  };

  return (
    <div className="image-card">
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={handleClick}
      />
    </div>
  );
}
