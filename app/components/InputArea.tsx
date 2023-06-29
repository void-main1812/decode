'use client'

import React from 'react';
import clsx from "clsx";

interface inputProps {
    placeholder?: string;
    onChange?: () => void;
    className?: string;
}

const Input: React.FC<inputProps> = ({placeholder, onChange, className}) => {
    return (
        <>
            <textarea placeholder={placeholder} onChange={onChange} rows={5} cols={50}
                   className={clsx(`p-4 text-lg text-gray-200 placeholder:text-gray-500 w-full`, className)}/>
        </>
    );
};

export default Input;