import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Youtube, MessageCircle } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__gradient-line"></div>
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col">
            <h3 className="footer__logo">ВАДИМ</h3>
            <p className="footer__logo-sub">ВЕДУЩИЙ МЕРОПРИЯТИЙ</p>
            <p className="footer__desc">
              Профессиональный ведущий для вашего незабываемого события. 
              Свадьбы, корпоративы, юбилеи и торжественные мероприятия.
            </p>
          </div>

          <div className="footer__col">
            <h4 className="footer__title">Навигация</h4>
            <nav className="footer__nav">
              <Link to="/" className="footer__link">Главная</Link>
              <Link to="/about" className="footer__link">Обо мне</Link>
              <Link to="/services" className="footer__link">Услуги</Link>
              <Link to="/portfolio" className="footer__link">Портфолио</Link>
              <Link to="/reviews" className="footer__link">Отзывы</Link>
              <Link to="/contact" className="footer__link">Контакты</Link>
            </nav>
          </div>

          <div className="footer__col">
            <h4 className="footer__title">Контакты</h4>
            <div className="footer__contacts">
              <a href="tel:+79001234567" className="footer__contact-item">
                <Phone size={18} />
                <span>+7 (900) 123-45-67</span>
              </a>
              <a href="mailto:vadim@event.ru" className="footer__contact-item">
                <Mail size={18} />
                <span>vadim@event.ru</span>
              </a>
              <div className="footer__contact-item">
                <MapPin size={18} />
                <span>Москва и Московская область</span>
              </div>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__title">Социальные сети</h4>
            <div className="footer__socials">
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <Instagram size={22} />
              </a>
              <a href="#" className="footer__social-link" aria-label="YouTube">
                <Youtube size={22} />
              </a>
              <a href="#" className="footer__social-link" aria-label="Telegram">
                <MessageCircle size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Вадим — Ведущий мероприятий. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
