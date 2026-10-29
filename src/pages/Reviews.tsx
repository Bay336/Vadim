import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Reviews.css';

const reviews = [
  {
    id: 1,
    name: 'Александр и Елена',
    event: 'Свадьба',
    date: 'Июнь 2024',
    rating: 5,
    text: 'Вадим сделал нашу свадьбу просто волшебной! Каждый гость был в восторге. Программа была идеально подобрана — ни одной паузы, всё динамично и весело. Отдельное спасибо за трогательную церемонию!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    id: 2,
    name: 'ООО "ТехноПром"',
    event: 'Корпоратив',
    date: 'Декабрь 2023',
    rating: 5,
    text: 'Уже третий год подряд приглашаем Вадима на наш корпоратив. Каждый раз программа уникальна и невероятно интересна. Сотрудники до сих пор обсуждают прошедший праздник. Рекомендую!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
  {
    id: 3,
    name: 'Марина Петрова',
    event: 'Юбилей 50 лет',
    date: 'Сентябрь 2023',
    rating: 5,
    text: 'Вадим провёл юбилей моей мамы просто блестяще! Все гости были растроганы до слёз. Он нашёл подход к каждому — и к молодёжи, и к старшему поколению. Спасибо за незабываемый вечер!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
  {
    id: 4,
    name: 'Дмитрий и Анна',
    event: 'Свадьба',
    date: 'Август 2023',
    rating: 5,
    text: 'Мы долго выбирали ведущего и не ошиблись! Вадим — настоящий профессионал. Он чувствовал атмосферу и моментально реагировал на настроение гостей. Наша свадьба прошла идеально!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    id: 5,
    name: 'Ирина Козлова',
    event: 'День рождения',
    date: 'Март 2024',
    rating: 5,
    text: 'Заказывала Вадима на день рождения мужа. Всё было организовано на высшем уровне! Конкурсы были оригинальными, музыка подобрана идеально. Муж был в восторге!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
  },
  {
    id: 6,
    name: 'Банк "Развитие"',
    event: 'Корпоратив',
    date: 'Ноябрь 2023',
    rating: 5,
    text: 'Провели корпоративное мероприятие на 500 человек. Вадим блестяще справился с такой аудиторией! Энергетика, юмор, интерактив — всё на высшем уровне. Обязательно пригласим снова.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80',
  },
];

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(nextReview, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="reviews-page">
      {/* Hero */}
      <section className="reviews-hero">
        <div className="reviews-hero__bg">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80"
            alt="Отзывы"
            className="reviews-hero__image"
          />
          <div className="reviews-hero__overlay"></div>
        </div>
        <div className="container">
          <motion.div
            className="reviews-hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Отзывы</h1>
            <p>Что говорят мои клиенты о проведённых мероприятиях</p>
          </motion.div>
        </div>
      </section>

      {/* Featured Review Slider */}
      <section className="reviews-featured section">
        <div className="container">
          <div className="section-title">
            <h2>Отзывы клиентов</h2>
            <p>Реальные истории от реальных людей</p>
          </div>

          <div className="featured-review">
            <div className="featured-review__slider" ref={sliderRef}>
              <motion.div
                key={activeIndex}
                className="featured-review__card"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="featured-review__quote">
                  <Quote size={40} />
                </div>
                <p className="featured-review__text">{reviews[activeIndex].text}</p>
                <div className="featured-review__rating">
                  {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                    <Star key={i} size={18} fill="var(--gold)" color="var(--gold)" />
                  ))}
                </div>
                <div className="featured-review__author">
                  <img src={reviews[activeIndex].avatar} alt={reviews[activeIndex].name} />
                  <div>
                    <h4>{reviews[activeIndex].name}</h4>
                    <span>{reviews[activeIndex].event} • {reviews[activeIndex].date}</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="featured-review__controls">
              <button className="featured-review__btn" onClick={prevReview}>
                <ChevronLeft size={24} />
              </button>
              <div className="featured-review__counter">
                {activeIndex + 1} / {reviews.length}
              </div>
              <button className="featured-review__btn" onClick={nextReview}>
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="reviews-grid-section section section-dark">
        <div className="container">
          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                className="review-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="review-card__header">
                  <img src={review.avatar} alt={review.name} className="review-card__avatar" />
                  <div>
                    <h4>{review.name}</h4>
                    <span>{review.event}</span>
                  </div>
                </div>
                <div className="review-card__stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="var(--gold)" color="var(--gold)" />
                  ))}
                </div>
                <p className="review-card__text">{review.text}</p>
                <span className="review-card__date">{review.date}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
