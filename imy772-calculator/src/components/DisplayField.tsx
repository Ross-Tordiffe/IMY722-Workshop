import React, { useState } from 'react';
export default function DisplayField( {displayValue} : {displayValue: string}) {
    
    return (
        <input data-cy={`input-display`} className={"display"} type="text" value={displayValue} readOnly={true}></input>
    )
}