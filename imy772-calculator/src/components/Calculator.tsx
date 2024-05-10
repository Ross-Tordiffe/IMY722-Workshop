import React, { useState } from 'react';
import DisplayField from './DisplayField';
import ClearButton from './ClearButton';
import RemoveButton from './RemoveButton';
import Equals from './Equals';
import HexKeypad from "../components/HexKeypad";
import ArithmeticButtons from "../components/ArithmeticButtons";
import HistoryField from "../components/HistoryField";
export default function Calculator() {
    
    const [firstString, setFirstString] = useState("")
    const [secondString, setSecondString] = useState("")
    const [operator, setOperator] = useState("")
    const [displayValue, setDisplayValue] = useState("0")
    const [history, setHistory] = useState([""])
    const [isShowingAnswer, setIsShowingAnswer] = useState(false)
        
    const calculate = async () => {
        if (isShowingAnswer || firstString === "" || secondString === "" || operator === "") return
        if (firstString === "0" && operator === "/" && secondString === "0") {
            setDisplayValue("Error - Division by zero")
            return
        }
        
        let firstValue = firstString === "" ? 0 : parseInt(firstString, 16);
        let secondValue = secondString === "" ? 0 : parseInt(secondString, 16);
        let result = 0
        switch (operator) {
            case "+":
                result = firstValue + secondValue
                break
            case "-":
                result = firstValue - secondValue
                break
            case "*":
                result = firstValue * secondValue
                break
            case "/":
                result = firstValue / secondValue
                break
            default:
                break
        }
        const resultString = result.toString(16).toUpperCase();
        // await postHistory(`${firstString} ${operator} ${secondString}`, resultString);
        setDisplayValue(resultString);
        setIsShowingAnswer(true);
        setHistory([...history, `${firstString} ${operator} ${secondString} = ${resultString}`]);
    }
    
    const postHistory = async (problem: string, answer: string) => {
        try {
            await fetch('/api/routes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ problem: problem, answer: answer }),
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    return (
        <div className={"calculator grid grid-cols-2 bg-gray-800 p-1 rounded-lg text-xl text-center align-middle"}>
            <div className={"calculator-interface text-white bg-gray-800 rounded-s-lg p-2"}>
                <DisplayField displayValue={displayValue} />
                <div className={"hex-buttons"}>
                    <HexKeypad firstString={firstString} operator={operator} secondString={secondString} setFirstString={setFirstString} setSecondString={setSecondString} />
                </div>
                <div className={"line w-full border mt-1 border-gray-500"}></div>
                <div className={"arithmetic-buttons"}>
                    <ArithmeticButtons setOperator={setOperator} />
                </div>
                <div className={"edit-buttons grid grid-cols-4 gap-1 w-full mt-1 text-2xl"}>  
                    <ClearButton setFirstString={setFirstString} setOperator={setOperator} setSecondString={setSecondString} />
                    <RemoveButton firstString={firstString} operator={operator} secondString={secondString} setFirstString={setFirstString} setOperator={setOperator} setSecondString={setSecondString} />
                    <Equals calculate={calculate} />
                </div>
            </div>
            <div className={"calculator-history bg-gray-700"}>
                <HistoryField history={history} setHistory={setHistory} />
            </div>
        </div>
    )
}