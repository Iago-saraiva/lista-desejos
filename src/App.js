import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import './index.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');
    const [editIndex, setEditIndex] = useState(null);
    const [taskInput, setTaskInput] = useState('');

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(savedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        const newTask = { text: taskInput, completed: false };
        setTasks([...tasks, newTask]);
        setTaskInput('');
    };

    const toggleTaskCompletion = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const editTask = (index) => {
        setEditIndex(index);
        setTaskInput(tasks[index].text);
    };

    const saveEdit = () => {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex].text = taskInput;
        setTasks(updatedTasks);
        setEditIndex(null);
        setTaskInput('');
    };

    const clearList = () => {
        setTasks([]);
    };

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'completed') return task.completed;
        if (filter === 'incomplete') return !task.completed;
        return true;
    });

    return (
        <div className="container">
            <h1>Lista de Desejos</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (editIndex !== null) {
                        saveEdit();
                    } else {
                        addTask();
                    }
                }}
            >
                <input
                    type="text"
                    name="taskInput"
                    placeholder="Adicionar novo desejo..."
                    required
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                />
                <button className='add' type="submit">{editIndex !== null ? 'Salvar' : 'Adicionar'}</button>
            </form>

            <div className="mb-3">
                <label htmlFor="filter" className="form-label">Filtrar:</label>
                <select id="filter" className="form-select" onChange={(e) => setFilter(e.target.value)}>
                    <option className="op" value="all">Todos</option>
                    <option className='op' value="completed">Concluídos</option>
                    <option className='op' value="incomplete">Não Concluídos</option>
                </select>
            </div>

            <TaskList 
                tasks={filteredTasks}
                toggleTaskCompletion={toggleTaskCompletion}
                deleteTask={deleteTask}
                editTask={editTask}
                /> 
            <button className="btn-delete" onClick={clearList}>Limpar Lista</button>
            <div> 
        <a className='convite' href="https://iago-saraiva.github.io/Convite/" target="_blank" rel="noopener noreferrer">
        Convite Amigo secreto
        </a>
        </div>
        </div>
    );
}

export default App;
