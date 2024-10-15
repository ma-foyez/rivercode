import React from 'react';

interface IInput {
  label?: string;
  name: string;
  placeholder: string;
  type?: string;
  value: string;
  customClass?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isRequired?: boolean;
}

const Input: React.FC<IInput> = ({
  label = '',
  name,
  placeholder,
  type = 'text',
  value,
  onChange,
  customClass = '',
  isRequired = false,
}) => {
  return (
    <div className="w-full group">
      {label && (
        <label
          htmlFor={name}
          className="text-sm lg:text-base font-semibold tracking-wide text-black font-poppins"
        >
          {label}
          {isRequired && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          cols={30}
          rows={5}
          value={value}
          placeholder={placeholder}
          className={`${customClass} bg-[#F0F5F7] border border-[#E0EDF2] p-2 w-full rounded-md input-transition outline-0 text-black focus:ring-0 focus:border-blue`}
          onChange={onChange}
          required={isRequired}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          className={`${customClass} bg-[#F0F5F7] border border-[#E0EDF2] p-2 w-full rounded-md input-transition outline-0 text-black focus:ring-0 focus:border-blue`}
          onChange={onChange}
          required={isRequired}
        />
      )}
    </div>
  );
};

export default Input;
