import React from 'react';
import evaImg from '../../addons/eva.png';

const EvaPage: React.FC = () => {
  return (
    <div className="min-h-screen scroll-smooth flex flex-col items-center">
      <div className="flex flex-col items-center text-center max-w-3xl px-4 pt-40">
        <h1 className="text-5xl font-medium mb-4 whitespace-nowrap">
          Ева - Наш Первый Ударник
        </h1>
        <p className="text-gray-500 text-xl">
            Ева автоматизирует продажи — от поиска и определения нужных людей до написания персонализированных сообщений.
        </p>
      </div>
      <div className="w-full flex justify-center mt-32">
        <img
          src={evaImg}
          alt="Ева"
          className="object-contain h-[60vh] max-w-5xl w-full"
        />
      </div>
      <div className="w-full flex justify-center mt-32">
        <p className="text-5xl font-medium mb-4 whitespace-nowrap">Как работает Ева?</p>
      </div>
    </div>
  );
};

export default EvaPage;
