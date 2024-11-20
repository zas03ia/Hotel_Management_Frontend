'use client';
import { useState, useEffect } from 'react';

interface GalleryProps {
  images: string[]; // Array of image URLs
  modalCaption: string;
}

const Gallery: React.FC<GalleryProps> = ({ images, modalCaption }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [baseURL, setBaseURL] = useState<string | null>(null);

  // Set the base URL once the component is mounted to avoid SSR mismatch
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setBaseURL(process.env.FILE_BASE_URL || 'http://localhost:3000/uploads');
    }
  }, []);

  // Function to change images (next or previous)
  const changeImage = (direction: number) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) {
      newIndex = images.length - 1; // Go to last image if it's the first image
    } else if (newIndex >= images.length) {
      newIndex = 0; // Go to first image if it's the last image
    }
    setCurrentIndex(newIndex);
  };

  // Function to open the modal and show the clicked image
  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!baseURL) return null; // Return nothing until the base URL is ready

  return (
    <div className="container-images">
      <div className="main-image">
        <img
          src={`${baseURL}${images[0]}`}
          alt="Property Image"
          className="gallery-img"
          onClick={() => openModal(0)}
        />
      </div>
      <div className="following-images">
        {images.slice(1, 5).map((image, index) => (
          <div key={index} className="following-image">
            <img
              src={`${baseURL}${image}`}
              alt={`Property Image ${index + 2}`}
              className="gallery-img"
              onClick={() => openModal(index + 1)}
            />
          </div>
        ))}
        <div className="more-images">
          <i className="fa-solid fa-images"></i> <span>{images.length}+</span>
        </div>
      </div>

      {/* Modal Structure */}
      {isModalOpen && (
        <div id="galleryModal" className="gallery-modal">
          <div className="gallery-modal-content">
            <span className="gallery-close" onClick={closeModal}>
              &times;
            </span>
            <div className="gallery-navigation">
              <img
                className="gallery-modal-image"
                src={images[currentIndex]}
                alt="Gallery Image"
                id="modalImage"
              />
            </div>
            <div className="arrows">
              <button className="gallery-prev" onClick={() => changeImage(-1)}>
                &#10094;
              </button>
              <button className="gallery-next" onClick={() => changeImage(1)}>
                &#10095;
              </button>
            </div>
            <div className="img-info">
              <div className="gallery-modal-caption" id="modalCaption">
                {modalCaption}
              </div>
              <div className="img-number" id="img-number">
                {currentIndex + 1}/{images.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
