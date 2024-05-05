import React, { useState } from 'react';
export default function HexKeypad({ setFirstString, setSecondString, operator }: { setFirstString: React.Dispatch<React.SetStateAction<string>>, setSecondString: React.Dispatch<React.SetStateAction<string>>, operator: string }) {
    const hexCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    const handleClick = (hexCharacter: string) => {
        if (operator === '') {
            setFirstString(hexCharacter)
        } else {
            setSecondString(hexCharacter)
        }
    }
    return (
        <div className={`hex-keypad`}>
            {hexCharacters.map((hexCharacter, index) => {
                return <button key={index} data-cy={`button-hex-${hexCharacter}`} className={``} onClick={() => handleClick(hexCharacter)}>{hexCharacter}</button>
            })}
        </div>
    )
}