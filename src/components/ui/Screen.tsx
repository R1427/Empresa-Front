import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/libs/utils';

const screenFormVariants = cva('border rounded-md transition-colors p-6', {
  variants: {
    background: {
      white: 'bg-white',
      gray: 'bg-gray-100',
      yellow: 'bg-yellow-400',
    },
    border: {
      default: 'border-gray-400',
      black: 'border-black',
    },
    size: {
      default: 'w-full max-w-md h-auto',
      small: 'w-full max-w-sm h-auto',
      large: 'w-full max-w-lg h-auto',
    },
  },
  defaultVariants: {
    background: 'white',
    border: 'default',
    size: 'default',
  },
});

export interface ScreenFormProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof screenFormVariants> {
  width?: string;
  height?: string;
}

const ScreenForm = React.forwardRef<HTMLDivElement, ScreenFormProps>(
  (
    {
      className,
      background,
      border,
      size,
      width = '584px',
      height = 'max-content',
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={cn(
          screenFormVariants({ background, border, size, className }),
        )}
        style={{
          width,
          height,
          boxShadow: '0px 4px 4px 0px #00000040',
          borderRadius: '29px',
        }}
        ref={ref}
        {...props}
      >
        {props.children}
      </div>
    );
  },
);

ScreenForm.displayName = 'ScreenForm';

export { ScreenForm, screenFormVariants };
