import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import s from './Navbar.module.css';

import iconMenu from '../../assets/img/icon-menu-50.png';

import { useAuth } from '../../context';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isMenuUserOpen, setIsMenuUserOpen] = useState(false);
  const [isMenuPrincipalOpen, setIsMenuPrincipalOpen] = useState(false);
  const menuRef = useRef(null);

  const handleUserClick = () => {
    setIsMenuUserOpen((prev) => !prev);
  };

  const handleMenuPrincipalClick = () => {
    setIsMenuPrincipalOpen((prev) => !prev);
  };

  const handleLogout = () => {
    logout();
    setIsMenuUserOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuPrincipalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={s.navbar}>
      <nav className={s.nav}>
        <ul className={s.elementos}>
          <div className={s.left}>
            <span
              className={`${s.buttonMenuPrincipal} ${isMenuPrincipalOpen ? s.buttonMenuPrincipalOpen : ''}`}
              onClick={handleMenuPrincipalClick}
            >
              <img
                className={s.iconMenuPrincipal}
                src={iconMenu}
                alt="Menu"
                draggable="false"
              />
            </span>
            {isMenuPrincipalOpen && (
              <div ref={menuRef} className={s.menuPrincipal}>
                <div className={s.containerMenuPrincipal}>
                  <h2 className={s.menuTitle}>Navegación</h2>
                  <NavLink
                    draggable="false"
                    to="/home"
                    className={({ isActive }) => isActive ? `${s.Link} ${s.active}` : s.Link}
                  >
                    Inicio
                  </NavLink>
                  <NavLink
                    draggable="false"
                    to="/empleados"
                    className={({ isActive }) => isActive ? `${s.Link} ${s.active}` : s.Link}
                  >
                    Empleados
                  </NavLink>
                </div>
              </div>
            )}
          </div>
          <div className={s.right}>
            <li className={s.userMenu}>
              <span
                onClick={handleUserClick}
                className={`${s.username} ${isMenuUserOpen ? s.menuOpen : ''}`}
              >
                {user.username} {isMenuUserOpen ? '▲' : '▼'}
              </span>
              {isMenuUserOpen && (
                <div className={s.dropDownMenu}>
                  <button onClick={handleLogout}>Cerrar sesión</button>
                </div>
              )}
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
