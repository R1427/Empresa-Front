import React from 'react';
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type TypographyProps = {
  variant?: 'default' | 'secondary';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';
  className?: ClassValue;
  children: React.ReactNode;
};

const Typography: React.FC<TypographyProps> = ({
  variant = 'default',
  as: Component = 'p',
  className,
  children,
}) => {
  const baseClasses = 'text-base';

  const variantClasses = {
    default: 'font-open-sans',
    secondary: 'font-poppins',
  };

  const mergedClasses = twMerge(
    clsx(baseClasses, variantClasses[variant], className),
  );

  return <Component className={mergedClasses}>{children}</Component>;
};

export default Typography;
