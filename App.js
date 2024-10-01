import React, { useState } from 'react';
import './App.css';  // Inclua o CSS aqui

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="container">
      <img src="/logoaelin.png" alt="Logo" className="logo"/>
      <h1 className="title">Entre já na sua conta!</h1>
      
      <div className="input-container">
        <label htmlFor="email" className="label">Email</label>
        <input
          type="email"
          id="email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder=" "
        />
      </div>
      
      <div className="input-container">
        <label htmlFor="password" className="label">Senha</label>
        <input
          type="password"
          id="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder=" "
        />
        <a href="#" className="forgot-password">Esqueci minha senha</a>
      </div>

      <button className="button">Entrar</button>

      <p className="or-text">ou</p>

      <center><a href="#"><button className="google-button">
       <img src="/icongoogle.png"  alt="Google Icon" width="30"/>
      Use sua conta do Google
      </button></a> </center>

      <p className="sign-up-text">
        Novo por aqui? <a href="./CadastroUm.js" className="sign-up-link">Cadastre-se</a> em nosso site
      </p>
    </div>
  );
}

export default App;
