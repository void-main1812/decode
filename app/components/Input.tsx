'use client'

import React from 'react';
import clsx from "clsx";

interface inputProps {
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const Input: React.FC<inputProps> = ({placeholder, onChange, className}) => {
    return (
        <>
            <input placeholder={placeholder} onChange={onChange}
                   className={clsx(`p-4 text-lg text-gray-200 placeholder:text-gray-500 w-full`, className)}/>
        </>
    );
};

export default Input;