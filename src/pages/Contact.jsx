import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Instagram, Youtube } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    date: '',
    guests: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero__bg">
          <img
            src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=80"
            alt="Контакты"
            className="contact-hero__image"
          />
          <div className="contact-hero__overlay"></div>
        </div>
        <div className="container">
          <motion.div
            className="contact-hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Контакты</h1>
            <p>Свяжитесь со мной для обсуждения вашего мероприятия</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="contact-main section">
        <div className="container">
          <div className="contact-main__grid">
            {/* Contact Info */}
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Давайте создадим ваш праздник вместе!</h2>
              <div className="contact-info__divider"></div>
              <p>
                Заполните форму или свяжитесь со мной любым удобным способом. 
                Я отвечу в течение 2 часов в рабочее время.
              </p>

              <div className="contact-info__items">
                <div className="contact-info__item">
                  <div className="contact-info__item-icon">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4>Телефон</h4>
                    <a href="tel:+79001234567">+7 (900) 123-45-67</a>
                  </div>
                </div>

                <div className="contact-info__item">
                  <div className="contact-info__item-icon">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:vadim@event.ru">vadim@event.ru</a>
                  </div>
                </div>

                <div className="contact-info__item">
                  <div className="contact-info__item-icon">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4>Локация</h4>
                    <span>Москва и Московская область</span>
                  </div>
                </div>

                <div className="contact-info__item">
                  <div className="contact-info__item-icon">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4>Время работы</h4>
                    <span>Ежедневно с 9:00 до 21:00</span>
                  </div>
                </div>
              </div>

              <div className="contact-info__socials">
                <h4>Мессенджеры и соцсети</h4>
                <div className="contact-info__social-links">
                  <a href="#" className="contact-info__social-link" title="WhatsApp">
                    <MessageCircle size={22} />
                  </a>
                  <a href="#" className="contact-info__social-link" title="Instagram">
                    <Instagram size={22} />
                  </a>
                  <a href="#" className="contact-info__social-link" title="YouTube">
                    <Youtube size={22} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Оставить заявку</h3>
                
                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label>Ваше имя *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Как к вам обращаться?"
                      required
                    />
                  </div>
                  <div className="contact-form__group">
                    <label>Телефон *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+7 (___) ___-__-__"
                      required
                    />
                  </div>
                </div>

                <div className="contact-form__group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>

                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label>Тип мероприятия</label>
                    <select name="eventType" value={formData.eventType} onChange={handleChange}>
                      <option value="">Выберите тип</option>
                      <option value="wedding">Свадьба</option>
                      <option value="corporate">Корпоратив</option>
                      <option value="jubilee">Юбилей</option>
                      <option value="graduation">Выпускной</option>
                      <option value="birthday">День рождения</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>
                  <div className="contact-form__group">
                    <label>Дата мероприятия</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="contact-form__group">
                  <label>Количество гостей</label>
                  <input
                    type="text"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    placeholder="Примерное количество гостей"
                  />
                </div>

                <div className="contact-form__group">
                  <label>Сообщение</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Расскажите подробнее о вашем мероприятии..."
                    rows={4}
                  />
                </div>

                <button type="submit" className="contact-form__submit btn btn-primary">
                  <Send size={18} />
                  Отправить заявку
                </button>

                {isSubmitted && (
                  <motion.div
                    className="contact-form__success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ✓ Заявка отправлена! Я свяжусь с вами в ближайшее время.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="contact-map">
        <div className="contact-map__placeholder">
          <MapPin size={48} />
          <p>Москва и Московская область</p>
          <span>Выезд в любой регион по договорённости</span>
        </div>
      </section>
    </div>
  );
}
