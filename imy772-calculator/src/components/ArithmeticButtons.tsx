import React, { useState } from 'react';
export default function ArithmeticButtons({ setOperator }: { setOperator: React.Dispatch<React.SetStateAction<string>> }) {
    
    return (
        <div className={`operation-buttons`}>
            <button data-cy={`button-arithmetic-add`} className={``} onClick={() => setOperator("+")}>+</button>
            <button data-cy={`button-arithmetic-subtract`} className={``} onClick={() => setOperator("-")}>-</button>
            <button data-cy={`button-arithmetic-multiply`} className={``} onClick={() => setOperator("*")}>*</button>
            <button data-cy={`button-arithmetic-divide`} className={``} onClick={() => setOperator("/")}>/</button>
        </div>
    )
}