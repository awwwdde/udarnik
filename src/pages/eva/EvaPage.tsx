import React from 'react';

const EvaPage: React.FC = () => {
  return (
    <div className="h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center max-w-3xl px-4">
        <h1 className="text-5xl font-bold mb-4 whitespace-nowrap">
            Найдёт и закроет вашу следующую сделку
        </h1>
        <p className="text-gray-500 text-xl">
            Ева закрывает полный цикл продаж. От поиска и анализа потенциального клиента до холодного контакта и совершения продажи.
        </p>
      </div>
    </div>
  );
};

export default EvaPage;
