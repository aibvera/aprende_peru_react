import { useEffect, useState } from 'react';
import './Menu.css';

function Menu({ isOpen, onClose, user }) {
  const [sessionUser, setSessionUser] = useState(null);

  useEffect(() => {
    setSessionUser(user ? user : null);
  }, [user]);

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    setSessionUser(null);
    onClose(); // cierra el menú
  };

  return (
    <div
      className={`poppins-regular overlay ${isOpen ? 'open' : ''}`}
      id="overlay"
      onClick={onClose}
    >
      <div
        className="side-menu"
        id="side-menu"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>

        {sessionUser ? (
          <>
            <p id="welcome-user">Bienvenido, {sessionUser}.</p>
            <a href="index.html">Cursos</a>
            <a href="contacto.html">Contacto</a>
            <a href="#" id="logout-link" onClick={handleLogout}>
              Cerrar sesión
            </a>
          </>
        ) : (
          <>
            <a href="index.html">Cursos</a>
            <a href="login.html">Inicia sesión</a>
            <a href="registro.html">Regístrate</a>
            <a href="contacto.html">Contacto</a>
          </>
        )}
      </div>
    </div>
  );
}

export default Menu;
