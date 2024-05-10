import React, {useEffect, useState} from 'react';
export default function HistoryField({ history, setHistory }: { history: Array<string>, setHistory: React.Dispatch<React.SetStateAction<Array<string>>> }) {
    const fetchHistory = async () => {
        try {
            const response = await fetch('/api/routes', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            return { history: [] }
        }
    }
    
    useEffect(() => {
        fetchHistory().then((data) => {
            if(data.history === undefined) return console.error('Error: history is undefined');
            const newHistory = data.history.map((problem: { problem: string, answer: string }) => `${problem.problem} = ${problem.answer}`);
            setHistory(newHistory);
        });
    }, []);
    
    return (
        <div data-cy={"history-field"} className={"history-field"}>
            {history}
        </div>
    )
}