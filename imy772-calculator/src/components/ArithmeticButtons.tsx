import React, { useState } from 'react';
export default function ArithmeticButtons({ setOperator }: { setOperator: React.Dispatch<React.SetStateAction<string>> }) {
    
    return (
        <div className={`operation-buttons text-white grid grid-cols-4 gap-1 mt-1 text-2xl`}>
            <button data-cy={`button-arithmetic-add`} className={`p-3 bg-amber-600 rounded-md`} onClick={() => setOperator("+")}>+</button>
            <button data-cy={`button-arithmetic-subtract`} className={`p-3 bg-amber-600 rounded-md flex-grow`} onClick={() => setOperator("-")}>-</button>
            <button data-cy={`button-arithmetic-multiply`} className={`p-3 bg-amber-600 rounded-md flex-grow`} onClick={() => setOperator("*")}>*</button>
            <button data-cy={`button-arithmetic-divide`} className={`p-3 bg-amber-600 rounded-md flex-grow`} onClick={() => setOperator("/")}>/</button>
        </div>
    )
}