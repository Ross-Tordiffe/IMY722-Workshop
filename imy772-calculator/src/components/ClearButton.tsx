import React from 'react';
export default function ClearButton({setFirstString, setOperator, setSecondString} : {setFirstString: React.Dispatch<React.SetStateAction<string>>, setOperator: React.Dispatch<React.SetStateAction<string>>, setSecondString: React.Dispatch<React.SetStateAction<string>>}) {
  const handleClear = () => {
    setFirstString("");
    setOperator("");
    setSecondString("");
  }
  
  return (
    <button className={"button"} onClick={handleClear}>AC</button>
  )
}