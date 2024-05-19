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
    
    const handleClearHistory = async () => {
        try {
            await fetch('/api/routes', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setHistory([]);
        } catch (error) {
            console.error('Error:', error);
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
        <div data-cy={"history-field"} className={"history-field text-white pt-2 h-full flex flex-col"}>
            <div className={"history-list text-left ps-2 overflow-scroll max-h-90 min-h-90"}>
                {history.map((problem, index) => {
                    return <div key={index} className={"history"}>{problem}</div>
                })}
            </div>
            <div className={"clear-history shrink mb-1 bg-gray-500 grow flex flex-col justify-center items-center"}>
                <button data-cy={"history-clear"} className={"bg-gray-800 px-5 pt-1 pb-2 rounded-lg w-10/12"} disabled={history.length === 0} onClick={() => handleClearHistory()}>Clear History</button>
            </div>
        </div>
    )
}