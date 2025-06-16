import React from 'react';
import Document from '../../widgets/document';

const PolicyPage: React.FC = () => {
  const documents = [
    {
      number: "01",
      title: "Общие положения",
      description: "Настоящая Политика определяет порядок обработки персональных данных в ООО «Ударник»"
    },
    {
      number: "02",
      title: "Основные понятия",
      description: "Определения терминов, используемых в настоящей Политике конфиденциальности"
    },
    {
      number: "03",
      title: "Цели обработки данных",
      description: "Перечень целей, для достижения которых осуществляется обработка персональных данных"
    },
    {
      number: "04",
      title: "Правовые основания",
      description: "Правовые основания для обработки персональных данных в соответствии с законодательством"
    },
    {
      number: "05",
      title: "Объем обрабатываемых данных",
      description: "Категории персональных данных, которые обрабатываются в рамках деятельности"
    },
    {
      number: "06",
      title: "Сроки обработки",
      description: "Сроки хранения и обработки персональных данных пользователей"
    },
    {
      number: "07",
      title: "Права субъектов данных",
      description: "Права пользователей в отношении их персональных данных"
    },
    {
      number: "08",
      title: "Меры защиты",
      description: "Технические и организационные меры по защите персональных данных"
    },
    {
      number: "09",
      title: "Передача данных",
      description: "Условия передачи персональных данных третьим лицам"
    },
    {
      number: "10",
      title: "Международная передача",
      description: "Порядок передачи персональных данных за пределы Российской Федерации"
    },
    {
      number: "11",
      title: "Изменения политики",
      description: "Порядок внесения изменений в настоящую Политику конфиденциальности"
    }
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Политика в отношении обработки персональных данных
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Настоящая Политика определяет порядок обработки персональных данных в Обществе с ограниченной ответственностью «Ударник» и разработана в соответствии с требованиями законодательства РФ
          </p>
        </div>

        <div className="flex justify-center gap-8 flex-wrap">
          {documents.map((doc, index) => (
            <Document
              key={index}
              number={doc.number}
              title={doc.title}
              description={doc.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PolicyPage;
