import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center max-w-3xl px-4">
        <h1 className="text-5xl font-bold mb-4 whitespace-nowrap">
            Создаём новую индустриальную революцию
        </h1>
        <p className="text-gray-500 text-xl">
            Работа изменилась навсегда. Мы первыми в России выводим AI сотрудников на массовый рынок, начиная с Евы.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
