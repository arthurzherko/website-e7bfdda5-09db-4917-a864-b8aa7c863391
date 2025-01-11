import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/90 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-purple-500">Game</span>
              <span className="text-2xl font-bold text-white">Zone</span>
            </Link>
            <p className="mt-4 text-sm">Погрузись в мир игр вместе с нами</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Навигация</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/pricing" className="hover:text-purple-500">
                  Цены
                </Link>
              </li>
              <li>
                <Link to="/equipment" className="hover:text-purple-500">
                  Оборудование
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-purple-500">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-purple-500">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Контакты</h3>
            <ul className="mt-4 space-y-2">
              <li>Адрес: ул. Игровая, 42</li>
              <li>Телефон: +7 (999) 123-45-67</li>
              <li>Email: info@gamezone.ru</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Мы в соцсетях</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-purple-500">
                <Facebook />
              </a>
              <a href="#" className="hover:text-purple-500">
                <Instagram />
              </a>
              <a href="#" className="hover:text-purple-500">
                <Twitter />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm">© 2024 GameZone. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
