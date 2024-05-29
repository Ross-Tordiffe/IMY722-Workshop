import React, { useState } from 'react';
export default function Equals({calculate} : {calculate: () => void}) {
    const handleEquals = () => {
        calculate()
    }
    
    return (
        <button data-cy={`button-equals`} className={"button col-span-2 py-3 bg-emerald-600 rounded-md"} onClick={handleEquals}>=</button>
    )
}