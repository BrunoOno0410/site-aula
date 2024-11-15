import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isLoggedIN, setIsLoggedIN] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);
  const node = useRef();

  const toggleProfileMenu = () => {
    setProfileOpen(!isProfileOpen);
  };

  const toggleHamburgerMenu = () => {
    setHamburgerOpen(!isHamburgerOpen);
    if (!isHamburgerOpen) {
      setProfileOpen(false); // Fechar o menu vertical quando o botão hamburguer é clicado
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (node.current && !node.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-onix" ref={node}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isHamburgerOpen ? "true" : "false"}
              onClick={() => setHamburgerOpen(!isHamburgerOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/*
                Icon when menu is closed.

                Menu open: "hidden", Menu closed: "block"
              */}
              <svg
                className={`h-6 w-6 ${isHamburgerOpen ? "hidden" : "block"}`} // Oculta o ícone quando o menu hamburguer está aberto
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/*
                  Icon when menu is open.
                  
                  Menu open: "block", Menu closed: "hidden"
                */}
              <svg
                className={`h-6 w-6 ${isHamburgerOpen ? "block" : "hidden"}`} // Exibe o ícone quando o menu hamburguer está aberto
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link to="/">
                <img
                  className="h-6 w-auto"
                  src="..\src\assets\TecnusSaturn.png"
                  alt="Tecnus Logo"
                />
              </Link>
            </div>
            <div className="flex items-center">
              <div className="sm:block sm:ml-6">
                <div className="flex">
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Cursos
                  </a>
                  <Link
                    to="/aboutUs"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Sobre nós
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <p className="text-gray-300">Olá, visitante</p>
            {/* Remover "Olá visitante" para modelo mobile*/}
            {/* Profile dropdown */}
            <div className="relative ml-3">
              <div className="flex">
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={toggleProfileMenu}
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="..\src\assets\User.png"
                    alt=""
                  />
                </button>
                {/* Login button shown if user is not logged in */}
                {!isLoggedIN && (
                  <Link
                    to="/login"
                    className="btn-login text-gray-300 rounded-lg px-4 hover:bg-gray-700 mx-4 border border-gray-700"
                  >
                    Login
                  </Link>
                )}
              </div>

              {/*
            Dropdown menu, show/hide based on menu state.
            
            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
            */}
              {isProfileOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  {/* Active: "bg-gray-100", Not Active: "" */}
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-0"
                  >
                    Seu perfil
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-1"
                  >
                    Configurações
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                  >
                    Deslogar
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state.*/}
      <div className={`${isHamburgerOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/*Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"*/}
          <a
            href="#"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Cursos
          </a>
          <Link
            to="/aboutUs"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Sobre nós
          </Link>
        </div>
      </div>
    </nav>
  );
};
