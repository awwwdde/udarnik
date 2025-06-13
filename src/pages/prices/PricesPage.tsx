import React from 'react';
import { Button } from '../../widgets/button';
import Price from '../../widgets/price';

const PricePage: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen scroll-smooth">
      <div className="flex flex-col items-center pb-20">
        <div className="flex flex-col items-center text-center max-w-3xl px-4 pt-40">
          <h1 className="text-5xl font-medium mb-4 whitespace-nowrap">
            Наймите Еву
          </h1>
          <p className="text-gray-500 text-xl mb-4">
            Тарифы для каждого бизнеса: от стартапов на ранних стадиях до крупных предприятий.
          </p>
        </div>
        <div className="flex gap-4 mt-6">
          <div onClick={() => scrollToSection('small-business')} className="cursor-pointer">
            <Button>Для малого бизнеса</Button>
          </div>
          <div onClick={() => scrollToSection('large-business')} className="cursor-pointer">
            <Button>Для крупного бизнеса</Button>
          </div>
          <div onClick={() => scrollToSection('demo')} className="cursor-pointer">
            <Button>Демо</Button>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-24">
        <div id="small-business" className="pt-12 pb-20 scroll-mt-20">
          <h2 className="text-3xl font-medium mb-8">Стартапы + малый бизнес</h2>
          <div className="grid grid-cols-3 gap-8">
            <Price
              title="INTERN"
              description="Подходит для знакомства и начала работы с Евой."
              price="₽0"
              features={[
                "10 лидов",
                "35 персонализированных писем",
                "Подключение 1 почтового ящика",
                "Общие данные по компаниям",
                "Финансовые показатели",
                "Контактная информация"
              ]}
              buttonText="Начать бесплатно"
              buttonHref="https://app.udarnikai.ru"
            />
            <Price
              title="JUNIOR"
              description="Подходит для фрилансеров и стартапов на ранней стадии."
              price="₽4 900"
              features={[
                "500 лидов",
                "1 500 персонализированных писем",
                "Подключение 1 почтового ящика",
                "Общие данные по компаниям",
                "Финансовые показатели",
                "Контактная информация"
              ]}
              buttonText="Выбрать тариф"
              buttonHref="https://app.udarnikai.ru"
            />
            <Price
              title="MIDDLE"
              description="Подходит для малого и среднего бизнеса."
              price="₽9 900"
              features={[
                "1 000 лидов",
                "4 500 персонализированных писем",
                "Подключение 3 почтовых ящиков",
                "Общие данные по компаниям",
                "Финансовые показатели",
                "Контактная информация",
                "Импорт собственной базы",
                "DMARC мониторинг"
              ]}
              buttonText="Выбрать тариф"
              buttonHref="https://app.udarnikai.ru"
            />
          </div>
        </div>

        <div id="large-business" className="pt-12 pb-20 scroll-mt-20">
          <h2 className="text-3xl font-medium mb-8">Крупный бизнес</h2>
          <div className="grid grid-cols-3 gap-8">
            <Price
              title="SENIOR"
              description="Подходит для растущих компаний и предприятий."
              price="Индивидуально"
              features={[
                "Без ограничений",
                "Без ограничений",
                "Без ограничений",
                "Общие данные по компаниям",
                "Финансовые показатели",
                "Контактная информация",
                "Импорт собственной базы",
                "DMARC мониторинг"
              ]}
              buttonText="Связаться с нами"
              buttonHref="https://app.udarnikai.ru"
            />
          </div>
        </div>
        <div id="demo" className="pt-12 pb-20 scroll-mt-20">
          <h2 className="text-3xl font-medium mb-8">Демо</h2>
          <div className="w-full bg-[#F5F5F0] rounded-lg p-12">
            <div className="flex gap-16">
              <div className="flex-1">
                <span className="text-4xl font-medium text-black block mb-4">Забронируйте Демо</span>
                <p className="text-lg text-gray-500 mb-6">Наша команда покажет Еву в действии</p>
                
                <div>
                  <a 
                    href="https://app.fasti.me/user/chernyshenko/event/udarnik_eva._demo?eventTypeId=a5f0e988-aa61-4666-9852-039ebafc761a" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button>Выбрать время</Button>
                  </a>
                </div>
              </div>
              
              <ul className="flex-1 space-y-6">
              <p className="text-lg text-black mb-6">На 30 минутном звонке, вы узнаете:</p>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3"></span>
                  <span className="text-lg text-gray-600">Как Ева находит контакты лидов.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3"></span>
                  <span className="text-lg text-gray-600">Какие данные Ева знает об организациях.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3"></span>
                  <span className="text-lg text-gray-600">Как создавать рассылку.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3"></span>
                  <span className="text-lg text-gray-600">Как загружать свои лиды в Еву.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3"></span>
                  <span className="text-lg text-gray-600">Ответим на вопросы.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricePage;
