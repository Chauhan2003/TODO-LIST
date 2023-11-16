import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
import TaskItem from '../components/Taskitem';

function Task() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/alltask')
            .then(response => setTasks(response.data))
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

    const functionModify = (task) => {
        console.log(task._id);
    };

    // Sort tasks based on status (incomplete first, complete at the end)
    const sortedTasks = tasks.slice().sort((a, b) => {
        if (a.status === 'complete' && b.status === 'incomplete') {
            return 1;
        } else if (a.status === 'incomplete' && b.status === 'complete') {
            return -1;
        } else {
            return 0;
        }
    });

    return (
        <div>
            <Nav />
            <div className="max-w-[90%] mx-auto p-6">
                <h2 className="text-2xl font-semibold mb-4 ml-2">All Tasks</h2>
                <div className='flex flex-wrap justify-center sm:justify-start'>
                    {sortedTasks.map(task => (
                        <TaskItem key={task._id} task={task} onClick={functionModify} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Task;