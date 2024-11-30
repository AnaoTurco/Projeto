const Task = require('../models/Task');

// Criar uma nova tarefa
const createTask = async (req, res) => {
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
};

// Listar todas as tarefas
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Atualizar uma tarefa
const mongoose = require('mongoose');

// Atualizar uma tarefa
router.put('/:id', async (req, res) => {
    const { title, description, dueDate, status } = req.body;

    // Verifica se o ID da tarefa é válido
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: 'ID de tarefa inválido' });
    }

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

// Excluir uma tarefa
const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Tarefa não encontrada' });
        }
        res.status(200).json({ message: 'Tarefa excluída com sucesso!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createTask,
    getAllTasks,
    updateTask,
    deleteTask
};
