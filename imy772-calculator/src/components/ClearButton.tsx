import React from 'react';
export default function ClearButton({setFirstString, setOperator, setSecondString} : {setFirstString: React.Dispatch<React.SetStateAction<string>>, setOperator: React.Dispatch<React.SetStateAction<string>>, setSecondString: React.Dispatch<React.SetStateAction<string>>}) {
  const handleClear = () => {
    setFirstString("");
    setOperator("");
    setSecondString("");
  }
  
  return (
    <button data-cy={`button-clear`} className={"button col-span-1 py-3 bg-amber-700 rounded-md"} onClick={handleClear}>AC</button>
  )
}