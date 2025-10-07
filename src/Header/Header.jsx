import { useEffect, useState } from 'react';
import './Header.css'
import Menu from './Menu/Menu.jsx'

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => setMenuVisible(!menuVisible);
  const closeMenu = () => setMenuVisible(false);

  const [sessionUser, setSessionUser] = useState(null);
  useEffect(() => {
    // Recupera el usuario del sessionStorage cuando se monta el componente
    const storedUser = sessionStorage.getItem('user');
    setSessionUser(storedUser ? JSON.parse(storedUser) : null);
  }, []);

  return (
    <header>
      <nav>
        <div id="menu-toggle" className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </div>

        <div id="logo" className="poppins-bold">AprendePerú</div>

        <div className="auth-buttons" id="auth-buttons">
          {sessionUser ? (
            <>
              <p className='poppins-regular'>Bienvenido, {sessionUser}.</p>
            </>
          ) : (
            <>
              <a href="login.html"><div className="btn-login poppins-regular">Ingresar</div></a>
              <a href="registro.html"><div className="btn-register poppins-regular">Registrarse</div></a>
            </>
          )}
        </div>
      </nav>

      <Menu isOpen={menuVisible} onClose={closeMenu} user={sessionUser} />

    </header>
  )
}

export default Header;
