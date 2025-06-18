import React from 'react';
import evaImg from '../../addons/eva.png';

const EvaPage: React.FC = () => {
  return (
    <div className="min-h-screen scroll-smooth flex flex-col items-center">
      <div className="flex flex-col items-center text-center max-w-3xl px-4 pt-40">
        <h1 className="text-5xl font-medium mb-4 whitespace-nowrap">
            Найдёт и закроет вашу следующую сделку
        </h1>
        <p className="text-gray-500 text-xl">
            Ева закрывает полный цикл продаж. От поиска и анализа потенциального клиента до холодного контакта и совершения продажи.
        </p>
      </div>
      <div className="w-full flex justify-center mt-32">
        <img
          src={evaImg}
          alt="Ева"
          className="object-contain h-[60vh] max-w-5xl w-full"
        />
      </div>
    </div>
  );
};

export default EvaPage;
