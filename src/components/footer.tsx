import type { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '../addons/logo.svg';

const Footer: FC = () => {
  return (
    <footer className="border-t">
      <div className="max-w-[1440px] mx-auto px-24 py-12">
        <div className="flex items-start justify-between">
          <div className="w-[200px]">
            <img src={logo} alt="Logo" className="h-5 w-auto mb-4" />
            <p className="text-gray-600 text-sm mb-2">
              Создаём новую индустриальную революцию
            </p>
            <p className="text-gray-600 text-sm">
              © 2025 ООО "Ударник"
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-medium mb-2">Продукт</h3>
            <Link to="/price" className="text-gray-600 hover:text-gray-900 text-sm">Тарифы</Link>
            <Link to="/eva" className="text-gray-600 hover:text-gray-900 text-sm">Ева</Link>
            <Link to="/faq" className="text-gray-600 hover:text-gray-900 text-sm">Вопросы</Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-medium mb-2">Документы</h3>
            <Link to="/terms" className="text-gray-600 hover:text-gray-900 text-sm">Пользовательское соглашение</Link>
            <Link to="/policy" className="text-gray-600 hover:text-gray-900 text-sm">Политика конфиденциальности</Link>
            <Link to="/offer" className="text-gray-600 hover:text-gray-900 text-sm">Договор оферты</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
