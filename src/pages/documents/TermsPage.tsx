import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center max-w-3xl px-4">
        <h1 className="text-5xl font-bold mb-4 whitespace-nowrap">
            Пользовательское соглашение
        </h1>
        <p className="text-gray-500 text-xl">
        Настоящее Пользовательское соглашение (далее — Соглашение) регулирует отношения между пользователями Платформы и Обществом с ограниченной ответственностью «Ударник» по использованию Платформы http://app.udarnikai.ru/ Соглашение вступает в силу с момента выражения Пользователем согласия с его условиями в порядке, предусмотренном в Соглашении. Действующая редакция Соглашения доступна на странице в Интернете: www.udarnikai/terms
        Неотъемлемой частью Соглашения являются следующие документы:
        • Политика в отношении обработки персональных данных (далее — Политика конфиденциальности), размещённая по адресу www.udarnikai/policy
        • Оферта на заключение Лицензионного договора на предоставление ПО «Ударник» (далее — Оферта), размещённая по адресу www.udarnik/offer
        </p>
      </div>
    </div>
  );
};

export default TermsPage;
