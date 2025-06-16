import React from 'react';

const OfferPage: React.FC = () => {
  return (
    <div className="h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center max-w-3xl px-4">
        <h1 className="text-5xl font-bold mb-4 whitespace-nowrap">
            Оферта на заключение Лицензионного договора на предоставление ПО «Ударник»
        </h1>
        <p className="text-gray-500 text-xl">
        Настоящий документ представляет собой предложение Общества с ограниченной ответственностью «Ударник» заключить Лицензионный договор на предоставление ПО «Ударник» на изложенных ниже условиях.
        </p>
      </div>
    </div>
  );
};

export default OfferPage;
