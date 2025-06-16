import React from 'react';
import Document from '../../widgets/document';

const TermsPage: React.FC = () => {
  const documents = [
    {
      number: "01",
      title: "Общие положения",
      description: "Настоящее Пользовательское соглашение регулирует отношения между пользователями Платформы и ООО «Ударник»"
    },
    {
      number: "02",
      title: "Предмет соглашения",
      description: "Предоставление доступа к Платформе и услугам, оказываемым через неё"
    },
    {
      number: "03",
      title: "Права и обязанности",
      description: "Права и обязанности Пользователя и ООО «Ударник» при использовании Платформы"
    },
    {
      number: "04",
      title: "Конфиденциальность",
      description: "Политика в отношении обработки персональных данных и конфиденциальной информации"
    },
    {
      number: "05",
      title: "Ответственность сторон",
      description: "Условия ответственности за нарушение условий Соглашения"
    },
    {
      number: "06",
      title: "Заключительные положения",
      description: "Порядок изменения Соглашения, разрешения споров и вступления в силу"
    }
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Пользовательское соглашение
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Настоящее Пользовательское соглашение (далее — Соглашение) регулирует отношения между пользователями Платформы и Обществом с ограниченной ответственностью «Ударник» по использованию Платформы http://app.udarnikai.ru/
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

export default TermsPage;
