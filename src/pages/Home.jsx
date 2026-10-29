import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Star, Calendar, Award, Users } from 'lucide-react';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__bg">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&q=80"
            alt="Мероприятие"
            className="hero__bg-image"
          />
          <div className="hero__overlay"></div>
          <div className="hero__particles">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="hero__particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="hero__content">
          <motion.div
            className="hero__text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="hero__badge">Профессиональный ведущий</span>
            <h1 className="hero__title">
              Вадим
              <span className="hero__title-accent">Ваш праздник — моя страсть</span>
            </h1>
            <p className="hero__subtitle">
              Создаю незабываемую атмосферу на свадьбах, корпоративах и торжественных мероприятиях. 
              Более 500 успешных событий за 10 лет карьеры.
            </p>
            <div className="hero__buttons">
              <Link to="/contact" className="btn btn-primary">Обсудить мероприятие</Link>
              <Link to="/portfolio" className="btn btn-outline">Смотреть портфолио</Link>
            </div>
          </motion.div>

          <motion.div
            className="hero__scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <ChevronDown size={30} className="hero__scroll-icon" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats__grid">
            <motion.div
              className="stats__item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
            >
              <div className="stats__icon">
                <Calendar size={32} />
              </div>
              <div className="stats__number">500+</div>
              <div className="stats__label">Проведённых мероприятий</div>
            </motion.div>

            <motion.div
              className="stats__item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="stats__icon">
                <Award size={32} />
              </div>
              <div className="stats__number">10</div>
              <div className="stats__label">Лет опыта</div>
            </motion.div>

            <motion.div
              className="stats__item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="stats__icon">
                <Users size={32} />
              </div>
              <div className="stats__number">98%</div>
              <div className="stats__label">Довольных клиентов</div>
            </motion.div>

            <motion.div
              className="stats__item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="stats__icon">
                <Star size={32} />
              </div>
              <div className="stats__number">5.0</div>
              <div className="stats__label">Средний рейтинг</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section services-preview">
        <div className="container">
          <div className="section-title">
            <h2>Мои услуги</h2>
            <p>Каждое мероприятие — это уникальная история, которую я помогаю рассказать</p>
          </div>

          <div className="services-preview__grid">
            <motion.div
              className="services-preview__card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="services-preview__card-image">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80"
                  alt="Свадьба"
                />
                <div className="services-preview__card-overlay"></div>
              </div>
              <div className="services-preview__card-content">
                <h3>Свадьбы</h3>
                <p>Романтичная и трогательная атмосфера вашего самого важного дня</p>
                <Link to="/services" className="services-preview__card-link">Подробнее →</Link>
              </div>
            </motion.div>

            <motion.div
              className="services-preview__card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="services-preview__card-image">
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80"
                  alt="Корпоратив"
                />
                <div className="services-preview__card-overlay"></div>
              </div>
              <div className="services-preview__card-content">
                <h3>Корпоративы</h3>
                <p>Тимбилдинг, праздники компании и деловые мероприятия на высшем уровне</p>
                <Link to="/services" className="services-preview__card-link">Подробнее →</Link>
              </div>
            </motion.div>

            <motion.div
              className="services-preview__card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="services-preview__card-image">
                <img
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80"
                  alt="Торжества"
                />
                <div className="services-preview__card-overlay"></div>
              </div>
              <div className="services-preview__card-content">
                <h3>Торжества</h3>
                <p>Юбилеи, дни рождения, выпускные и другие особенные события</p>
                <Link to="/services" className="services-preview__card-link">Подробнее →</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta__bg">
          <img
            src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=80"
            alt="Праздник"
            className="cta__bg-image"
          />
          <div className="cta__overlay"></div>
        </div>
        <div className="container">
          <motion.div
            className="cta__content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Готовы создать незабываемый праздник?</h2>
            <p>Свяжитесь со мной, чтобы обсудить детали вашего мероприятия</p>
            <Link to="/contact" className="btn btn-primary">Связаться со мной</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
