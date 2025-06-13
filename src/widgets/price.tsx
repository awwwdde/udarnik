import React from 'react';
import { Button } from './button';

interface PriceProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonHref?: string;
  className?: string;
}

const Price: React.FC<PriceProps> = ({
  title,
  description,
  price,
  features,
  buttonText,
  buttonHref,
  className = ''
}) => {
  return (
    <div className={`w-[380px] h-[520px] bg-[#F5F5F0] rounded-lg p-8 flex flex-col ${className}`}>
      <div className="mb-6">
        <h3 className="text-sm font-medium text-black mb-2">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>

      <div className="mb-8">
        <span className="text-4xl font-medium">{price}</span>
      </div>

      <ul className="flex-1 space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3"></span>
            <span className="text-sm text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      <div>
        {buttonHref ? (
          <a href={buttonHref}>
            <Button>{buttonText}</Button>
          </a>
        ) : (
          <Button>{buttonText}</Button>
        )}
      </div>
    </div>
  );
};

export default Price;
