import React from "react";
import { Link } from "react-router-dom";
import "../asset/scss/components/_navBar.scss";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M18 21H6C4.343 21 3 19.657 3 18V8.76499C3 7.67499 3.591 6.67199 4.543 6.14299L10.543 2.80999C11.449 2.30699 12.551 2.30699 13.457 2.80999L19.457 6.14299C20.409 6.67199 21 7.67599 21 8.76499V18C21 19.657 19.657 21 18 21H18Z"
            fill="#98A2B3"
          />
          <path
            d="M15 21H9V15C9 13.895 9.895 13 11 13H13C14.105 13 15 13.895 15 15L15 21Z"
            fill="#98A2B3"
          />
        </svg>
        Accueil
      </Link>
      <Link to="/Login">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.4"
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            fill="#98A2B3"
          />
          <path
            d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V7H3V5Z"
            fill="#98A2B3"
          />
          <rect x="9" y="9" width="2" height="2" rx="1" fill="#98A2B3" />
          <rect x="13" y="9" width="2" height="2" rx="1" fill="#98A2B3" />
          <rect x="17" y="9" width="2" height="2" rx="1" fill="#98A2B3" />
          <rect x="17" y="13" width="2" height="2" rx="1" fill="#98A2B3" />
          <rect x="13" y="13" width="2" height="2" rx="1" fill="#98A2B3" />
          <rect x="9" y="13" width="2" height="2" rx="1" fill="#98A2B3" />
          <rect x="5" y="13" width="2" height="2" rx="1" fill="#98A2B3" />
          <rect x="5" y="17" width="2" height="2" rx="1" fill="#98A2B3" />
          <rect x="9" y="17" width="2" height="2" rx="1" fill="#98A2B3" />
          <rect x="13" y="17" width="2" height="2" rx="1" fill="#98A2B3" />
        </svg>
        Favoris
      </Link>
      <Link to="/Register">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M20 4H4V20.27C4 21.555 5.352 22.39 6.501 21.816L12 19.066L17.499 21.816C18.648 22.39 20 21.554 20 20.27V4Z"
            fill="#98A2B3"
          />
          <path
            d="M19.5 3C19.114 3 4.886 3 4.5 3C3.672 3 3 3.672 3 4.5C3 5.328 3.672 6 4.5 6C4.886 6 19.114 6 19.5 6C20.328 6 21 5.328 21 4.5C21 3.672 20.328 3 19.5 3Z"
            fill="#98A2B3"
          />
        </svg>
        Voyages
      </Link>
      <Link to="/Account">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle opacity="0.4" cx="12" cy="7" r="5" fill="#98A2B3" />
          <rect x="3" y="15" width="18" height="6" rx="3" fill="#98A2B3" />
        </svg>
        Comptes
      </Link>
    </nav>
  );
};

export default NavBar;
