const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const dbConnect = require('./db/dbConnect');
const alltaskModel = require('./model/alltaskModel');

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const serverStart = async () => {

    await dbConnect();

    // Get all tasks
    app.get('/alltask', async (req, res) => {
        try {
            const tasks = await alltaskModel.find();
            res.json(tasks);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });

    app.post('/addtask', async (req, res) => {
        try {
            // Create a new task using the alltaskModel
            const newTask = await alltaskModel.create(req.body);

            // Send a response back to the client with the created task
            res.status(201).json({ message: 'Task created successfully', task: newTask });
        } catch (error) {
            console.error('Error adding task:', error);
            // Send an error response back to the client
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });

    app.put('/alltask/:id', async (req, res) => {
        try {
            const taskId = req.params.id;
            const { status } = req.body;
    
            // Validate the request
            if (!taskId || !status) {
                return res.status(400).json({ error: 'Invalid request parameters' });
            }

            await alltaskModel.findByIdAndUpdate(taskId, { status });
    
            res.status(200).json({ message: 'Task status updated successfully' });
        } catch (error) {
            console.error('Error updating task status:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });

    app.listen(process.env.PORT || 8080, () => {
        console.log("Server is Started");
    })

};

serverStart();