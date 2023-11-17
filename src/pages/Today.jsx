import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
import TaskItem from '../components/Taskitem';

function TodayTask() {
    const [todayTasks, setTodayTasks] = useState([]);

    useEffect(() => {
        const todayDate = new Date().toISOString().split('T')[0]; // Get today's date

        axios.get(`http://localhost:3000/alltask/date/${todayDate}`)
            .then(response => setTodayTasks(response.data))
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

    const functionModify = (task) => {
        console.log(task._id);
    };

    // Sort tasks based on status (incomplete first, complete at the end)
    const sortedTodayTasks = todayTasks.slice().sort((a, b) => {
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
                <h2 className="text-2xl font-semibold mb-4 ml-2">Today's Tasks</h2>
                <div className='flex flex-wrap justify-center sm:justify-start'>
                    {sortedTodayTasks.map(task => (
                        <TaskItem key={task._id} task={task} onClick={functionModify} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TodayTask;
