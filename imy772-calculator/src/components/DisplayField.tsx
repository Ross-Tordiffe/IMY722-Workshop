import React, { useState } from 'react';
export default function DisplayField( {displayValue} : {displayValue: string}) {
    
    return (
        <input className={"display"} type="text" value="0" readOnly />
    )
}