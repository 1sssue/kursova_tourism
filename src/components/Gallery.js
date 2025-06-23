import React, { useState } from "react";
import "./styles/Gallery.css";

const images = [
  {
    src: "https://bukowina.org.ua/wp-content/uploads/2025/02/91951591.jpg",
    alt: "Карпати",
  },
  {
    src: "https://dance.knukim.edu.ua/wp-content/uploads/2022/12/A098B2F3-9598-4F1F-9E4E-4D88774D789F-1024x682.jpeg",
    alt: "Київ",
  },
  {
    src: "https://realty-odessa.com.ua/wp-content/uploads/2023/02/mikrorajony-odessy.jpg",
    alt: "Одеса",
  },
  {
    src: "https://mypoltava.info/wp-content/uploads/2021/05/ROtonda-1024x617.jpg",
    alt: "Полтава",
  },
  {
    src: "https://blog.pokupon.ua/wp-content/uploads/2021/02/hosprom-panorama-1024x689.jpg",
    alt: "Харків",
  },
  {
    src: "https://etnotur.ua/wp-content/uploads/2018/03/2193185_800x600_DSC_0975.jpg",
    alt: "Кременчуг",
  },
  {
    src: "https://ukr-prokat.com/wp-content/uploads/2020/07/lviv.jpg",
    alt: "Львів",
  },
  {
    src: "https://tamtour.com.ua/image/410/003/e1141d8077f72563dfbb304ca0c76b59-01-kamenets-podolskiy-depositphotos-41792869-original.jpg",
    alt: "Кам'янець-Подільський",
  }
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (img) => {
    setSelectedImage(img);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Блокуємо прокрутку сторінки
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Відновлюємо прокрутку сторінки
  };

  return (
    <section className="gallery-section">
      <h2 className="section-title">Галерея картинок</h2>
      <div className="grid-row row">
        {images.map((img, i) => (
          <div className="col-sm-6 col-md-4" key={i}>
            <div className="card shadow-sm" onClick={() => openModal(img)}>
              <img 
                src={img.src} 
                alt={img.alt} 
                className="card-img-top card-img"
                loading="lazy"
              />
              <div className="card-body">
                <p className="card-text text-center">{img.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="modal-image"
            />
            <p className="image-caption">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;