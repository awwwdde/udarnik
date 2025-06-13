import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, className = '' }) => {
  const buttonStyles = `
    inline-flex items-center justify-center
    px-6 py-3
    bg-black text-white
    rounded-lg
    font-medium
    transition-colors duration-200
    hover:bg-gray-800
    focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2
    ${className}
  `;

  return (
    <button className={buttonStyles}>
      {children}
    </button>
  );
};
