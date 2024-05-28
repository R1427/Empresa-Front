import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/libs/utils';

const buttonVariants = cva(
  'shadow-md w-full border inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-main text-black',
        secondary: 'border-black bg-transparent text-black',
        terciary: 'border-transparent bg-black text-white',
        destructive: 'border-transparent bg-black text-white',
        outline: '',
        subtle: '',
        ghost: '',
        link: '',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 w-60 rounded-md',
        xsm: 'h-9 px-3 w-40 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, name, onClick, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={onClick}
        {...props}
      >
        {name}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
