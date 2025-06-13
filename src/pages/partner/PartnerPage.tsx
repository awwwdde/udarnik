import React from 'react';

const PartnerPage: React.FC = () => {
  return (
    <div className="h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center max-w-3xl px-4">
        <h1 className="text-5xl font-bold mb-4 whitespace-nowrap">
            Партнёрская программа Ударник
        </h1>
        <p className="text-gray-500 text-xl">
            Рекомендуйте AI сотрудников и получайте вознаграждение за каждого нового пользователя.
        </p>
      </div>
    </div>
  );
};

export default PartnerPage;
