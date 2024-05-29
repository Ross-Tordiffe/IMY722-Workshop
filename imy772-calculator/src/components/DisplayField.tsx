import React, { useState } from 'react';
export default function DisplayField( {displayValue} : {displayValue: string}) {
    
    return (
        <input data-cy={`input-display`} className={"display bg-gray-600 text-right pr-3 py-3 mb-2 w-full rounded-md"} type="text" value={displayValue} readOnly={true}></input>
    )
}