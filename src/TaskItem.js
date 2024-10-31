import React from 'react';

function TaskItem({ task, index, toggleTaskCompletion, deleteTask, editTask }) {
    return (
        <li className={` d-flex justify-content-between align-items-center  ${task.completed ? 'completed' : ''}`}>
            {task.text}
            <div>
                <button className="btn btn-success btn-sm me-1" onClick={() => toggleTaskCompletion(index)}>Concluir</button>
                <button className="btn btn-warning btn-sm me-1" onClick={() => editTask(index)}>Editar</button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteTask(index)}>Excluir</button>
            </div>
        </li>
    );
}

export default TaskItem;
