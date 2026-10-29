import { motion } from 'framer-motion';
import { Mic, Music, Smile, Heart, Award, Clock } from 'lucide-react';
import './About.css';

export default function About() {
  const skills = [
    { icon: <Mic size={28} />, title: 'Харизма', desc: 'Умение завладеть вниманием аудитории с первых минут' },
    { icon: <Music size={28} />, title: 'Чувство ритма', desc: 'Точное тайминг и чувство момента' },
    { icon: <Smile size={28} />, title: 'Юмор', desc: 'Уместный юмор, который объединяет гостей' },
    { icon: <Heart size={28} />, title: 'Эмпатия', desc: 'Чувствую настроение гостей и адаптирую программу' },
    { icon: <Award size={28} />, title: 'Профессионализм', desc: '10 лет опыта и сотни довольных клиентов' },
    { icon: <Clock size={28} />, title: 'Пунктуальность', desc: 'Всегда вовремя и готов на 100%' },
  ];

  return (
    <div className="about-page">
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="about-hero__bg">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80"
            alt="Ведущий"
            className="about-hero__image"
          />
          <div className="about-hero__overlay"></div>
        </div>
        <div className="container">
          <motion.div
            className="about-hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Обо мне</h1>
            <p>Узнайте больше о моём пути в мире мероприятий</p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="about-bio section">
        <div className="container">
          <div className="about-bio__grid">
            <motion.div
              className="about-bio__image-wrapper"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="about-bio__image">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                  alt="Вадим — ведущий"
                />
                <div className="about-bio__image-frame"></div>
              </div>
            </motion.div>

            <motion.div
              className="about-bio__text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2>Привет, я Вадим!</h2>
              <div className="about-bio__divider"></div>
              <p>
                Уже более 10 лет я помогаю людям создавать незабываемые праздники. 
                Моя карьера началась с небольших семейных торжеств, а сегодня я провожу 
                масштабные корпоративы, роскошные свадьбы и эксклюзивные мероприятия.
              </p>
              <p>
                Каждый проект для меня — это не просто работа, а возможность подарить 
                людям радость и яркие эмоции. Я тщательно продумываю каждую деталь, 
                чтобы ваше мероприятие стало именно таким, каким вы его мечтаете увидеть.
              </p>
              <p>
                Мой подход — это сочетание профессионализма, креативности и искреннего 
                внимания к каждому гостю. Я не использую шаблонов — каждая программа 
                создаётся индивидуально под ваше событие.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="about-skills section section-dark">
        <div className="container">
          <div className="section-title">
            <h2>Мои качества</h2>
            <p>Что отличает меня как ведущего</p>
          </div>

          <div className="about-skills__grid">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="about-skills__card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="about-skills__card-icon">{skill.icon}</div>
                <h3>{skill.title}</h3>
                <p>{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline section">
        <div className="container">
          <div className="section-title">
            <h2>Мой путь</h2>
            <p>Ключевые этапы карьеры</p>
          </div>

          <div className="timeline">
            {[
              { year: '2014', title: 'Начало карьеры', desc: 'Первые мероприятия и обретение опыта' },
              { year: '2016', title: 'Первые 100 событий', desc: 'Наработка клиентской базы и репутации' },
              { year: '2018', title: 'Расширение географии', desc: 'Начал проводить мероприятия по всей России' },
              { year: '2020', title: 'Онлайн-формат', desc: 'Освоение новых форматов проведения событий' },
              { year: '2023', title: '500+ мероприятий', desc: 'Знаковый рубеж и новые вершины' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`timeline__item ${index % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="timeline__dot"></div>
                <div className="timeline__card">
                  <span className="timeline__year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
