import React, { useState } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';

function Addtask() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        status: 'incomplete',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send a POST request to the backend with the task data
            const response = await axios.post('http://localhost:3000/addtask', formData);
            console.log('Task added successfully');
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Nav />
            <div className='max-w-2xl mx-[20px] p-6 bg-white rounded-md shadow-md mt-16 sm:mx-auto'>
                <h2 className='text-2xl font-semibold mb-4'>Add Task</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label className='block text-gray-600'>Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className='w-full border-2 border-gray-300 p-2 rounded-md'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-600'>Description:</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className='w-full border-2 border-gray-300 p-2 rounded-md'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-600'>Status:</label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className='w-full border-2 border-gray-300 p-2 rounded-md'
                        >
                            <option value="incomplete">Incomplete</option>
                            <option value="complete">Complete</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className='bg-blue-500 text-white py-2 px-5 rounded-md hover:bg-blue-600'
                    >
                        Add Task
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Addtask;