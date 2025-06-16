import React from 'react';
import { Button } from '../../widgets/button';
import Faq from '../../widgets/faq';

const FaqPage: React.FC = () => {
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
            Часто задаваемые вопросы
          </h1>
          <p className="text-gray-500 text-xl mb-4">
            Подготовили ответы на возникающие у Вас вопросы!
          </p>
        </div>
        <div className="flex gap-4 mt-6">
          <div onClick={() => scrollToSection('general')} className="cursor-pointer">
            <Button>Общие вопросы</Button>
          </div>
          <div onClick={() => scrollToSection('technical')} className="cursor-pointer">
            <Button>Партнерская программа</Button>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-24">
        <div id="general" className="pt-12 pb-20 scroll-mt-20">
          <h2 className="text-3xl font-medium mb-8">Общие вопросы</h2>
          <div className="grid grid-cols-3 gap-8">
            <Faq
              number="01"
              title="Безопасно ли работать с Евой?"
              description="Да. Ева отправляет письма только с вашего согласия и читает только входящие письма, из ее контактов."
            />
            <Faq
              number="02"
              title="Может ли Ева подключаться к нескольким адресам электронной почты и/или доменам?"
              description="Да. Ева подключается к нескольким адресам электронной почты и отправляет письма с разных почтовых ящиков."
            />
            <Faq
              number="03"
              title="Может ли Ева писать контактам, которые я нашел самостоятельно?"
              description="Да. Если вы хотите, чтобы Ева писала списку лидов, которые вы сгенерировали сами, вы можете загрузить CSV-файл в личном кабинете."
            />
          </div>
        </div>

        <div id="technical" className="pt-12 pb-20 scroll-mt-20">
          <h2 className="text-3xl font-medium mb-8">Партнерская программа</h2>
          <div className="grid grid-cols-3 gap-8">
            <Faq
              number="01"
              title="Что такое Ударник?"
              description="Ударник - первая в России экосистема AI сотрудников. Мы автоматизируем ручные и аналитические процессы бизнеса."
            />
            <Faq
              number="02"
              title="Сколько я могу заработать работая с Ударник?"
              description="Привлекая клиентов по вашей персональной ссылке - вы будете зарабатывать 30% с каждого привлечённого вами клиента."
            />
            <Faq
              number="03"
              title="Кто может стать партнером Ударник?"
              description="Наша партнерская программа предназначена для всех — будь то физическое лицо или бизнес-структура, стремящаяся увеличить свои доходы и охват рынка."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
