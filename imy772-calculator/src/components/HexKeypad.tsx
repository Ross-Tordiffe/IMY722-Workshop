﻿import React, { useState } from 'react';
export default function HexKeypad({ firstString, operator, secondString, setFirstString, setSecondString}: { 
    firstString: string, 
    operator: string, 
    secondString: string, 
    setFirstString: React.Dispatch<React.SetStateAction<string>>,
    setSecondString: React.Dispatch<React.SetStateAction<string>> 
}){
    const hexCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    const handleClick = async (hexCharacter: string) => {
        if (operator === '' && firstString.length < 3) {
            setFirstString(firstString + hexCharacter);
        } else if(operator !== '' && secondString.length < 3) {
            setSecondString(secondString + hexCharacter);
        } else {
            return
        }
    }
    
    return (
        <div className={`hex-keypad grid grid-cols-4 gap-1`}>
            {hexCharacters.map((hexCharacter, index) => {
                return <button key={index} data-cy={`button-hex-${hexCharacter}`} className={`p-3 bg-gray-700 rounded-md text-white`} onClick={() => handleClick(hexCharacter)}>{hexCharacter}</button>
            })}
        </div>
    )
}