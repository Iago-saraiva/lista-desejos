// src/components/Convite.js
import React, { useState } from 'react';

function Convite() {
    const [email, setEmail] = useState('');

    const enviarConvite = () => {
        if (!email) {
            alert('Por favor, insira um endereço de e-mail.');
            return;
        }

        const assunto = 'Convite para o Amigo Secreto!';
        const corpo = `Olá! Você está convidado para participar do nosso Amigo Secreto. Vamos nos divertir juntos!`;
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

        window.location.href = mailtoLink;
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>Enviar Convite para o Amigo Secreto</h2>
            <input
                className="enviaremail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite o e-mail do convidado"
                style={{ padding: '8px', width: '300px', marginBottom: '10px' }}
                required
            />
            <br />
            <button
                onClick={enviarConvite}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                }}
            >
                Enviar Convite
            </button>
        </div>
    );
}

export default Convite;
