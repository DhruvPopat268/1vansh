
'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses = 'font-medium rounded-lg transition-all duration-300 transform backdrop-blur-md border whitespace-nowrap cursor-pointer active:scale-95';
  
  const variantClasses = {
    primary: 'bg-black text-white border-black hover:bg-gray-800 hover:border-gray-800 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-black border-white hover:bg-gray-100 hover:border-gray-100 shadow-lg hover:shadow-xl',
    outline: 'bg-white/10 text-black border-black/20 hover:bg-black/5 hover:border-black/30 hover:shadow-lg',
    ghost: 'bg-transparent text-black border-transparent hover:bg-black/5 hover:border-black/10'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed hover:scale-100 active:scale-100' 
    : 'hover:scale-105 active:scale-95';

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
