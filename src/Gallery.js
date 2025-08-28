import React, { useState } from "react";
import img1 from "./images/jagdam1.jpg";
import img2 from "./images/jagdam2.jpg";
import img3 from "./images/jagdam3.jpg";
import img4 from "./images/jagdam4.jpg";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const galleryImages = [
    { src: img1, alt: "Jagdam Hotel - Exterior view" },
    { src: img2, alt: "Jagdam Hotel - Elegant lobby" },
    { src: img4, alt: "Jagdam Hotel - Restaurant area" },
    { src: img3, alt: "Jagdam Hotel - Restaurant area" },
   
  ];

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };
  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="container my-5">
      <h2 className="fw-bold mb-3 text-center">Jagdam Hotel Gallery</h2>
      <p className="text-muted text-center mb-4">Tap an image to view</p>

      {/* Grid Gallery */}
      <div className="row g-3">
        {galleryImages.map((img, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3">
            <img
              src={img.src}
              alt={img.alt}
              className="img-fluid rounded shadow-sm"
              style={{ cursor: "pointer" }}
              onClick={() => openModal(index)}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75"
          style={{ zIndex: 1050 }}
          onClick={closeModal}
        >
          <button
            className="btn btn-light position-absolute top-50 start-0 translate-middle-y ms-3"
            onClick={prevImage}
          >
            ‹
          </button>
          <img
            src={galleryImages[selectedIndex].src}
            alt={galleryImages[selectedIndex].alt}
            className="img-fluid rounded shadow"
            style={{ maxHeight: "80%" }}
          />
          <button
            className="btn btn-light position-absolute top-50 end-0 translate-middle-y me-3"
            onClick={nextImage}
          >
            ›
          </button>
          <button
            className="btn btn-close btn-close-white position-absolute top-0 end-0 m-3"
            onClick={closeModal}
          ></button>
        </div>
      )}
    </section>
  );
}
