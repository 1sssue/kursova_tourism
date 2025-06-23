import React from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const newsData = [
  {
    id: 1,
    title: "Карпати влітку: нові маршрути для пішохідного туризму 2025",
    date: "2025-06-10",
    summary: "У Карпатах відкрито декілька нових стежок для туристів з різним рівнем підготовки. Доступні карти та GPS-навігація.",
    image: "https://otdihnavse100.com.ua/img/cms/blog/karpaty/poezdka-v-verhovinu-karpaty.JPG",
  },
  {
    id: 2,
    title: "Одеський серпень: фестивалі, пляжі та нічне життя",
    date: "2025-06-09",
    summary: "Одеса готується до головного туристичного сезону. Що відвідати, де зупинитись і як уникнути натовпу?",
    image: "https://i.ytimg.com/vi/_q-hLw_CC0A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCGBBir547bGzLrTGqRo-orsEhX6w",
  },
  {
    id: 3,
    title: "Хотинська фортеця потрапила у ТОП-5 найвідвідуваніших замків Східної Європи",
    date: "2025-06-08",
    summary: "Аналітики TripAdvisor відзначили зростання інтересу до історичних пам’яток України.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/73-250-0001_Khotyn_Fortress_RB_18.jpg/1200px-73-250-0001_Khotyn_Fortress_RB_18.jpg",
  },
  {
    id: 4,
    title: "Софійський собор у Києві увійшов до списку об’єктів UNESCO з підвищеною охороною",
    date: "2025-06-07",
    summary: "Що це означає для туристів і як зміниться доступ до святині?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/80-391-0151_Kyiv_St.Sophia%27s_Cathedral_RB_18_2_%28cropped%29.jpg/1200px-80-391-0151_Kyiv_St.Sophia%27s_Cathedral_RB_18_2_%28cropped%29.jpg",
  },
  {
    id: 5,
    title: "Місто Лева в новому світлі: нічні екскурсії по Львову тепер і українською, і англійською",
    date: "2025-06-06",
    summary: "Туристичні агенції Львова запускають унікальні маршрути старим містом після заходу сонця.",
    image: "https://elitatour.com.ua/wp-content/uploads/2020/09/5-2.jpg",
  },
  {
    id: 6,
    title: "Бакота: затоплене село стає магнітом для еко-туризму",
    date: "2025-06-05",
    summary: "Чому туристи обирають спокій і природу над мегаполісами? Огляд локації та інфраструктури.",
    image: "https://vidviday.ua/blog/app/uploads/2017/09/Bakota-panorama-03-Int.jpg",
  },
  {
    id: 7,
    title: "Чернівці – культурна перлина Буковини з новими туристичними подіями",
    date: "2025-06-04",
    summary: "Університет, театри, кав'ярні – що варто побачити в місті, де Європа починається?",
    image: "https://promin.cv.ua/uploads/posts/2017-10/1507709750_1442180581_68423_800x600_chernovcy.jpg",
  },
  {
    id: 8,
    title: "Заповідник Асканія-Нова відновлює прийом туристів після реставрації",
    date: "2025-06-03",
    summary: "Нові правила відвідування, оновлені маршрути та екозони.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpLMS5cgY87mbM052-CjTP4dLkeTPlZj5foA&s",
  },
  {
    id: 9,
    title: "Кам’янець-Подільський: новий туристичний рік з лазерним шоу на фортеці",
    date: "2025-06-02",
    summary: "Унікальна візуалізація історичних подій – як побачити?",
    image: "https://tamtour.com.ua/image/410/003/e1141d8077f72563dfbb304ca0c76b59-01-kamenets-podolskiy-depositphotos-41792869-original.jpg",
  },
  {
    id: 10,
    title: "Харківська область розвиває туристичний напрямок: Сковородинівка, парк Фельдмана та більше",
    date: "2025-06-01",
    summary: "Що побачити туристу у Слобожанщині – нові гіди та місцеві родзинки.",
    image: "https://studfile.net/html/2706/328/html_dwZcaRC30p.l1qx/img-aQo0by.jpg",
  },
];

function NewsList() {
  const handleDetailsClick = (newsTitle) => {
    toast.info(`Функція перегляду деталей для новини "${newsTitle}" ще в розробці`, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <section>
      <ToastContainer />
      <h2 className="section-title">Головні новини</h2>
      <div className="grid-row row">
        {newsData.map((news) => (
          <div className="col-md-6" key={news.id}>
            <div
              className="card h-100 shadow-sm"
              style={{ cursor: 'pointer' }}
              onClick={() => handleDetailsClick(news.title)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if(e.key === 'Enter') handleDetailsClick(news.title); }}
            >
              <img
                src={news.image}
                alt={news.title}
                className="card-img-top card-img"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{news.title}</h5>
                <h6 className="card-date">{news.date}</h6>
                <p className="card-text flex-grow-1">{news.summary}</p>
                <button 
                  className="btn btn-primary align-self-start mt-auto mx-auto"
                  onClick={() => handleDetailsClick(news.title)}
                >
                  Детальніше
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewsList;