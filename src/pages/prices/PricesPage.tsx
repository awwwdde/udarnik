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
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-24">
        <div id="small-business" className="pt-12 pb-20 scroll-mt-20">
          <h2 className="text-3xl font-medium mb-8">Малый бизнес</h2>
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
      </div>
    </div>
  );
};

export default PricePage;
