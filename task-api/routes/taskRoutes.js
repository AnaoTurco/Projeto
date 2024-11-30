const express = require('express');
const Task = require('../models/Task');
const router = express.Router();
const mongoose = require('mongoose');

// Criar uma nova tarefa
router.post('/', async (req, res) => {
    const { title, description, dueDate, status, user } = req.body;

    try {
        const newTask = new Task({
            title,
            description,
            dueDate,
            status,
            user
        });

        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Listar todas as tarefas
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Atualizar uma tarefa
router.put('/:id', async (req, res) => {
    const { title, description, dueDate, status } = req.body;

    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            { title, description, dueDate, status },
            { new: true }
        );
        
        if (!updatedTask) {
            return res.status(404).json({ message: 'Tarefa não encontrada' });
        }

        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Excluir uma tarefa
router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        
        if (!task) {
            return res.status(404).json({ message: 'Tarefa não encontrada' });
        }

        res.status(200).json({ message: 'Tarefa excluída com sucesso!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
