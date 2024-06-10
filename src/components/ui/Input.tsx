import React from 'react';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { cn } from '@/libs/utils';

interface InputProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  error?: string;
  helperText?: string;
  register?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  type = 'text',
  placeholder = '',
  required = false,
  className,
  error,
  helperText,
  register,
  onChange,
  ...rest
}) => {
  return (
    <div className={cn(className, 'flex flex-col')}>
      <label htmlFor={name} className="mb-1 text-start font-bold">
        {label}
        {required && <span className="ml-1">*</span>}
      </label>
      <input
        {...register}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="bg-clip-padding-box block w-full rounded-lg border border-gray-300 bg-gray-200 p-1.5 px-4 text-base font-normal leading-6 text-gray-700 transition duration-150 ease-in-out"
        onChange={onChange}
        {...rest}
      />
      {(error || helperText) && (
        <div className="mt-1 flex flex-row">
          {error && (
            <div className="flex items-center text-red-500">
              <AiOutlineExclamationCircle className="mr-1" />
              {error}
            </div>
          )}
          {!error && helperText && (
            <div className="text-gray-500">{helperText}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
