import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Building2, PartyPopper, GraduationCap, Baby, Mic2 } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <Heart size={36} />,
    title: 'Свадьбы',
    desc: 'Романтичное и трогательное проведение вашего самого важного дня. От первого танца до последнего тоста — каждый момент будет идеальным.',
    features: ['Выездная регистрация', 'Конкурсы и игры', 'Координация программы', 'Работа с артистами'],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    price: 'от 50 000 ₽',
  },
  {
    icon: <Building2 size={36} />,
    title: 'Корпоративы',
    desc: 'Профессиональное проведение корпоративных мероприятий любого масштаба. Тимбилдинг, новогодние праздники, юбилеи компаний.',
    features: ['Тимбилдинг-программы', 'Награждения', 'Презентации', 'Развлекательная программа'],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
    price: 'от 40 000 ₽',
  },
  {
    icon: <PartyPopper size={36} />,
    title: 'Юбилеи',
    desc: 'Тёплая и душевная атмосфера на вашем юбилее. Индивидуальная программа с учётом интересов именинника и гостей.',
    features: ['Индивидуальный сценарий', 'Видеопоздравления', 'Музыкальная программа', 'Сюрпризы'],
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80',
    price: 'от 35 000 ₽',
  },
  {
    icon: <GraduationCap size={36} />,
    title: 'Выпускные',
    desc: 'Яркий и запоминающийся выпускной вечер для школьников и студентов. Весёлые конкурсы, танцы и незабываемые эмоции.',
    features: ['Тематическая программа', 'Фотозона', 'Дискотека', 'Вручение дипломов'],
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80',
    price: 'от 30 000 ₽',
  },
  {
    icon: <Baby size={36} />,
    title: 'Детские праздники',
    desc: 'Волшебный праздник для маленьких гостей. Интерактивные программы, квесты и море веселья для детей любого возраста.',
    features: ['Квесты и игры', 'Аниматоры', 'Мастер-классы', 'Шоу-программы'],
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80',
    price: 'от 25 000 ₽',
  },
  {
    icon: <Mic2 size={36} />,
    title: 'Частные мероприятия',
    desc: 'Дни рождения, семейные торжества, тематические вечеринки — любое событие станет особенным с профессиональным ведущим.',
    features: ['Любой формат', 'Гибкая программа', 'Работа с DJ', 'Декор и оформление'],
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80',
    price: 'от 30 000 ₽',
  },
];

export default function Services() {
  return (
    <div className="services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="services-hero__bg">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80"
            alt="Мероприятие"
            className="services-hero__image"
          />
          <div className="services-hero__overlay"></div>
        </div>
        <div className="container">
          <motion.div
            className="services-hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Мои услуги</h1>
            <p>Полный спектр услуг для вашего идеального мероприятия</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-list section">
        <div className="container">
          <div className="services-list__grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="service-card__image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-card__image-overlay"></div>
                  <div className="service-card__icon">{service.icon}</div>
                </div>
                <div className="service-card__body">
                  <h3>{service.title}</h3>
                  <p className="service-card__desc">{service.desc}</p>
                  <ul className="service-card__features">
                    {service.features.map((f, i) => (
                      <li key={i}>
                        <span className="service-card__check">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="service-card__footer">
                    <span className="service-card__price">{service.price}</span>
                    <Link to="/contact" className="btn btn-primary btn-sm">Заказать</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="services-process section section-dark">
        <div className="container">
          <div className="section-title">
            <h2>Как мы работаем</h2>
            <p>Простой и понятный процесс от заявки до праздника</p>
          </div>

          <div className="process__steps">
            {[
              { step: '01', title: 'Знакомство', desc: 'Обсуждаем ваши пожелания, формат и масштаб мероприятия' },
              { step: '02', title: 'Сценарий', desc: 'Разрабатываю индивидуальную программу под ваше событие' },
              { step: '03', title: 'Подготовка', desc: 'Согласовываем детали, подбираем артистов и оборудование' },
              { step: '04', title: 'Праздник!', desc: 'Провожу ваше мероприятие на высшем уровне' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="process__step"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="process__step-number">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                {index < 3 && <div className="process__arrow">→</div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
