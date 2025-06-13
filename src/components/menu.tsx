import type { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '../addons/logo.svg';
import { Button } from '../widgets/button';

const Menu: FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-24 py-5 flex items-center justify-between">
        <div className="w-[200px]">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-5 w-auto" />
          </Link>
        </div>
        
        <div className="flex gap-6 font-medium mb-2">
          <Link to="/about" className="hover:text-gray-600">О нас</Link>
          <Link to="/price" className="hover:text-gray-600">Тарифы</Link>
          <Link to="/eva" className="hover:text-gray-600">Ева</Link>
          <Link to="/partner" className="hover:text-gray-600">Партнерам</Link>
          <Link to="/faq" className="hover:text-gray-600">Вопросы</Link>
          <Link to="/contact" className="hover:text-gray-600">Контакты</Link>
        </div>

        <div className="w-[200px] flex justify-end">
          <a href="https://app.udarnikai.ru" rel="noopener noreferrer">
            <Button>Попробовать</Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
