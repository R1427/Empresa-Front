import * as React from 'react';
import { cn } from '@/libs/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn('h-full w-full bg-main p-10 md:p-0', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
