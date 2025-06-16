import React from 'react';

interface FaqProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

const Faq: React.FC<FaqProps> = ({
  number,
  title,
  description,
  className = ''
}) => {
  return (
    <div className={`w-[380px] h-[520px] bg-[#F5F5F0] rounded-lg p-8 flex flex-col ${className}`}>
      <div className="mb-6">
        <span className="text-xs font-medium text-gray-500 block mb-2">{number}</span>
        <h3 className="text-lg font-medium text-black leading-tight">{title}</h3>
      </div>

      <div className="flex-1 flex items-start">
        <p className="text-xl text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default Faq; 