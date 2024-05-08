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
            const newHistory = data.history.map((item: {problem: string, answer: string}) => {
                return `${item.problem} = ${item.answer}`
            });
            setHistory(newHistory);
        });
    }, []);
    
    return (
        <div className={`history-field`}>
            {history}
        </div>
    )
}