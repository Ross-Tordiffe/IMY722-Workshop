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
        <button className={"button"} onClick={handleRemove}>C</button>
    )
}