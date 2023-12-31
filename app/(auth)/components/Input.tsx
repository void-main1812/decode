"use client";

import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import React from "react";

interface InputProps {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    disabled?: boolean;
    placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
                                                label,
                                                id,
                                                type,
                                                required,
                                                register,
                                                errors,
                                                disabled,
                                                placeholder,
                                            }) => {
    return (
        <div>
            <label
                htmlFor={id}
                className="block text-sm tracking-wide font-medium leading-6 text-gray-400"
            >
                {label}
            </label>
            <div>
                <input
                    placeholder={placeholder}
                    type={type}
                    id={id}
                    autoComplete={id}
                    disabled={disabled}
                    {...register(id, { required })}
                    className={clsx(
                        `
          from-input
          block
          w-full
          rounded-md
          py-2
          text-gray-100
          bg-transparent
          sm:bg-transparent
          border-[1px]
          border-gray-100/30
          focus:outline-none
          text-sm
          placeholder:text-gray-600
          focus:ring-2
          focus:ring-inset
          focus:ring-gray-500
          sm:text-sm
          sm:leading-6
          px-2
          `,
                        errors[id] && "focus:ring-rose-500",
                        disabled && "opacity-50 cursor-default"
                    )}
                />
            </div>
        </div>
    );
};