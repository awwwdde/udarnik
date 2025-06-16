import React from 'react';

interface DocumentProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

const Document: React.FC<DocumentProps> = ({
  number,
  title,
  description,
  className = ''
}) => {
  return (
    <div className={`w-[280px] h-[320px] bg-[#F5F5F0] rounded-lg p-6 flex flex-col ${className}`}>
      <div className="mb-4">
        <span className="text-xs font-medium text-gray-500 block mb-2">{number}</span>
        <h3 className="text-lg font-medium text-black leading-tight">{title}</h3>
      </div>

      <div className="flex-1 flex items-center">
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default Document;
