import React, { useState } from 'react';
export default function RemoveButton({firstString, operator, secondString, setFirstString, setOperator, setSecondString} : {firstString: string, operator: string, secondString: string, setFirstString: React.Dispatch<React.SetStateAction<string>>, setOperator: React.Dispatch<React.SetStateAction<string>>, setSecondString: React.Dispatch<React.SetStateAction<string>>}) {
    
    const handleRemove = () => {
        if (secondString !== "") {
            setSecondString(secondString.slice(0, -1))
        } else if (operator !== "") {
            setOperator("")
        } else if (firstString !== "") {
            setFirstString(firstString.slice(0, -1))
        }
    }
    
    return (
        <button data-cy={`button-remove`} className={"button col-span-1 py-3 bg-amber-700 rounded-md"} onClick={handleRemove}>&lt;</button>
    )
}