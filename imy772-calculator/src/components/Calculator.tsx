import React, { useState } from 'react';
import DisplayField from './DisplayField';
import ClearButton from './ClearButton';
import RemoveButton from './RemoveButton';
import Equals from './Equals';
import HexKeypad from "@/components/HexKeypad";
import ArithmeticButtons from "@/components/ArithmeticButtons";
export default function Calculator() {
    
    const [firstString, setFirstString] = useState("")
    const [secondString, setSecondString] = useState("")
    const [operator, setOperator] = useState("")
    const [displayValue, setDisplayValue] = useState("0")
    
    const calculate = () => {}
    
    return (
        <div className={"calculator"}> 
            <DisplayField displayValue={displayValue} />
            <div className={"hex-buttons"}>
                <HexKeypad setFirstString={setFirstString} setSecondString={setSecondString} operator={operator} />
            </div>
            <div className={"arithmetic-buttons"}>
                <ArithmeticButtons setOperator={setOperator} />
            </div>
            <div className={"edit-buttons"}>
                <ClearButton setFirstString={setFirstString} setOperator={setOperator} setSecondString={setSecondString} />
                <RemoveButton firstString={firstString} operator={operator} secondString={secondString} setFirstString={setFirstString} setOperator={setOperator} setSecondString={setSecondString} />
                <Equals calculate={calculate} />
            </div>
        </div>
    )
}