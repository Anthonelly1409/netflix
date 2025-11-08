import React from "react";
import "./EditarPerfil.css";

export default function EditarPerfil() {
  return (
    <div className="editar-container">
      <h1>Editar Perfil</h1>

      <form className="editar-form">
        <label>Nome:</label>
        <input type="text" placeholder="Digite seu nome" />

        <label>Email:</label>
        <input type="email" placeholder="Digite seu email" />

        <label>Sobre você:</label>
        <textarea placeholder="Fale um pouco sobre você..."></textarea>

        <div className="editar-botoes">
          <button type="submit" className="btn-salvar">Salvar</button>
          <button type="button" className="btn-cancelar">Cancelar</button>
        </div>
      </form>
    </div>
  );
}
