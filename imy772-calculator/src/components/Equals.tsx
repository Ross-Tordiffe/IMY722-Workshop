import React, { useState } from 'react';
export default function Equals({calculate} : {calculate: () => void}) {
    const handleEquals = () => {
        calculate()
    }
    
    return (
        <button data-cy={`button-equals`} className={"button"} onClick={handleEquals}>=</button>
    )
}