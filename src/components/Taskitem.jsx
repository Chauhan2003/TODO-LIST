import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CheckIcon from '@mui/icons-material/Check';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

function Taskitem({ task, onClick }) {
    const [value, setvalue] = useState(0);
    const truncatedDescription = task.description.slice(0, 20) + "...";

    useEffect(() => {
        if (task.status === "complete") {
            setvalue(1);
        } else {
            setvalue(0);
        }
    }, [task.status]);

    const functionConvertSuccess = async () => {
        try {
            await axios.put(`http://localhost:3000/alltask/${task._id}`, {
                status: 'complete',
            });

            setvalue(1);
        } catch (error) {
            console.error('Error updating task status:', error);
        }
    };

    return (
        <div
            key={task._id}
            className={`w-[300px] sm:w-[255px] border p-4 m-2 flex justify-between ${value === 0 ? 'bg-gray-100' : 'bg-gray-300'} rounded-md shadow-md cursor-pointer hover:bg-gray-300`}
            onClick={() => onClick(task)}
        >
            <div className='flex flex-col justify-between'>
                <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
                <p className="text-gray-700 mb-2">{truncatedDescription}</p>
                <p className={`${task.status === 'complete' ? 'text-green-700' : 'text-red-700'} font-semibold`}>
                    Status: {task.status}
                </p>
            </div>
            <div className='flex flex-col justify-between'>
                {value == 0 && (<div onClick={functionConvertSuccess}><CheckIcon /></div>)}
                <Link to="/fix"><AutoFixHighIcon /></Link>
                <Link to="/delete"><DeleteIcon /></Link>
            </div>
        </div>
    );
}

export default Taskitem;
