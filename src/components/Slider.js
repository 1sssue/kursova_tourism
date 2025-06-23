import React from "react";

function Slider() {
  return (
    <div
      id="mainSlider"
      className="carousel slide mb-4"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-inner rounded">
        <div className="carousel-item active">
          <img
            src="https://karpatium.com.ua/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcndQIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e9d9004b033cc3473cf8d64ceb4dea85dca86e11/%D0%BA%D0%B0%D0%BC%D1%8F%D0%BD%D0%B5%D1%86%D1%8C-%D0%BF%D0%BE%D0%B4%D1%96%D0%BB%D1%8C%D1%81%D0%BA%D0%B0-%D1%84%D0%BE%D1%80%D1%82%D0%B5%D1%86%D1%8F.jpeg"
            className="d-block w-100"
            alt="Кам’янець-Подільський"
            style={{ maxHeight: "300px", objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded p-2 ">
            <h5>Кам’янець-Подільський</h5>
            <p>Місто над каньйоном</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://karpaty-ua.org.ua/images/dostoprim/chernivci_2k.jpg"
            className="d-block w-100"
            alt="Чернівці"
            style={{ maxHeight: "300px", objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded p-2">
            <h5>Чернівці</h5>
            <p>Маленький Відень у Карпатах</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b4/%D0%91%D0%B0%D0%BA%D0%BE%D1%82%D0%B0_9198.jpg"
            className="d-block w-100"
            alt="Бакота"
            style={{ maxHeight: "300px", objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded p-2">
            <h5>Бакота</h5>
            <p>Спокій серед скель та води</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#mainSlider"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Попередній</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#mainSlider"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Наступний</span>
      </button>
    </div>
  );
}

export default Slider;
