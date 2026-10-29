import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Play } from 'lucide-react';
import './Portfolio.css';

const categories = ['Все', 'Свадьбы', 'Корпоративы', 'Юбилеи', 'Выпускные'];

const portfolioItems = [
  {
    id: 1,
    title: 'Свадьба Александра и Елены',
    category: 'Свадьбы',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    desc: 'Роскошная свадьба на 150 гостей в загородном поместье',
    date: 'Июнь 2024',
  },
  {
    id: 2,
    title: 'Корпоратив IT-компании',
    category: 'Корпоративы',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    desc: 'Новогодний корпоратив на 300 человек с шоу-программой',
    date: 'Декабрь 2023',
  },
  {
    id: 3,
    title: 'Юбилей 50 лет',
    category: 'Юбилеи',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
    desc: 'Душевный юбилей в кругу семьи и близких друзей',
    date: 'Сентябрь 2023',
  },
  {
    id: 4,
    title: 'Свадьба Дмитрия и Анны',
    category: 'Свадьбы',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80',
    desc: 'Камерная свадьба на 80 гостей с видом на море',
    date: 'Август 2023',
  },
  {
    id: 5,
    title: 'Корпоратив банка',
    category: 'Корпоративы',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
    desc: 'Торжественное мероприятие с награждением сотрудников',
    date: 'Ноябрь 2023',
  },
  {
    id: 6,
    title: 'Выпускной вечер 2024',
    category: 'Выпускные',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
    desc: 'Яркий выпускной для 200 выпускников с развлекательной программой',
    date: 'Июнь 2024',
  },
  {
    id: 7,
    title: 'Свадьба Михаила и Ольги',
    category: 'Свадьбы',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
    desc: 'Тематическая свадьба в стиле Great Gatsby на 200 гостей',
    date: 'Июль 2023',
  },
  {
    id: 8,
    title: 'Юбилей компании',
    category: 'Корпоративы',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80',
    desc: 'Празднование 15-летия компании с масштабной программой',
    date: 'Октябрь 2023',
  },
  {
    id: 9,
    title: 'Юбилей 60 лет',
    category: 'Юбилеи',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80',
    desc: 'Элегантный юбилей в ресторане с живой музыкой',
    date: 'Май 2024',
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const filteredItems = activeCategory === 'Все'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const selectedItemData = selectedItem !== null ? portfolioItems.find(i => i.id === selectedItem) : null;

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="portfolio-page">
      {/* Hero */}
      <section className="portfolio-hero">
        <div className="portfolio-hero__bg">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80"
            alt="Портфолио"
            className="portfolio-hero__image"
          />
          <div className="portfolio-hero__overlay"></div>
        </div>
        <div className="container">
          <motion.div
            className="portfolio-hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Портфолио</h1>
            <p>Мои лучшие работы и проведённые мероприятия</p>
          </motion.div>
        </div>
      </section>

      {/* Carousel */}
      <section className="portfolio-carousel section">
        <div className="container">
          <div className="carousel">
            <div className="carousel__viewport">
              <AnimatePresence mode="wait">
                <motion.div
                  key={carouselIndex}
                  className="carousel__slide"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={filteredItems[carouselIndex]?.image}
                    alt={filteredItems[carouselIndex]?.title}
                    className="carousel__image"
                  />
                  <div className="carousel__info">
                    <span className="carousel__category">{filteredItems[carouselIndex]?.category}</span>
                    <h3>{filteredItems[carouselIndex]?.title}</h3>
                    <p>{filteredItems[carouselIndex]?.desc}</p>
                    <span className="carousel__date">{filteredItems[carouselIndex]?.date}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button className="carousel__btn carousel__btn--prev" onClick={prevSlide}>
              <ChevronLeft size={24} />
            </button>
            <button className="carousel__btn carousel__btn--next" onClick={nextSlide}>
              <ChevronRight size={24} />
            </button>

            <div className="carousel__dots">
              {filteredItems.map((_, index) => (
                <button
                  key={index}
                  className={`carousel__dot ${index === carouselIndex ? 'carousel__dot--active' : ''}`}
                  onClick={() => setCarouselIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="portfolio-gallery section section-dark">
        <div className="container">
          <div className="section-title">
            <h2>Галерея мероприятий</h2>
            <p>Выберите категорию для просмотра</p>
          </div>

          <div className="portfolio__filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`portfolio__filter-btn ${activeCategory === cat ? 'portfolio__filter-btn--active' : ''}`}
                onClick={() => { setActiveCategory(cat); setCarouselIndex(0); }}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div className="portfolio__grid" layout>
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="portfolio__item"
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedItem(item.id)}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="portfolio__item-image">
                    <img src={item.image} alt={item.title} />
                    <div className="portfolio__item-overlay">
                      <Play size={40} />
                    </div>
                  </div>
                  <div className="portfolio__item-info">
                    <span className="portfolio__item-category">{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItemData && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <button className="lightbox__close" onClick={() => setSelectedItem(null)}>
              <X size={30} />
            </button>
            <motion.div
              className="lightbox__content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedItemData.image} alt={selectedItemData.title} />
              <div className="lightbox__info">
                <h3>{selectedItemData.title}</h3>
                <p>{selectedItemData.desc}</p>
                <span>{selectedItemData.date}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
