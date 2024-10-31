// src/App.js
import React, { useState } from 'react';
import ListaDeDesejos from './components/TaskList';
import Convite from './components/convite';
import './index.css';

function App() {
    const [showListaDeDesejos, setShowListaDeDesejos] = useState(true);

    const togglePage = () => {
        setShowListaDeDesejos(!showListaDeDesejos);
    };

    return (
        <div className="container">
            <nav>
                <button onClick={togglePage}>
                    {showListaDeDesejos ? 'Ir para Convite' : 'Voltar para Lista de Desejos'}
                </button>
            </nav>
            {showListaDeDesejos ? <ListaDeDesejos /> : <Convite />}
        </div>
    );
}

export default App;
