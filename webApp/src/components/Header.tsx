import { NavLink, useNavigate } from "react-router-dom";
import "../assets/scss/components/_header.scss";
import { useAuth } from '../context/AuthContext';

const Header = ({ title, arrowBack }: { title?: string, arrowBack?: any }) => {
  let navigate = useNavigate();
  const { handleLogout, session } = useAuth()
  return (
    <header>
      <div className="title">
        <h1>{title}</h1>
        <div className="title__back" onClick={() => navigate(-1)}>
          {arrowBack}
        </div>
      </div>
      <div className="links">
        <NavLink to="/Lieu">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="10" r="3" fill="#98A2B3" />
            <path
              opacity="0.4"
              d="M4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10H4Z"
              fill="#98A2B3"
            />
            <path
              opacity="0.4"
              d="M10.3274 21.4119C6.95619 18.7254 3.9999 13.4388 4 10H20C20 13.4388 17.0434 18.7254 13.6723 21.4118C12.6877 22.1965 11.312 22.1965 10.3274 21.4119Z"
              fill="#98A2B3"
            />
          </svg>
          Lieu
        </NavLink>
        <NavLink to="/Panier">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M3 9C3 7.89543 3.89543 7 5 7H19C20.1046 7 21 7.89543 21 9V19C21 21.2091 19.2091 23 17 23H7C4.79086 23 3 21.2091 3 19V9Z"
              fill="#98A2B3"
            />
            <path
              d="M7 6C7 5.34339 7.12933 4.69321 7.3806 4.08658C7.63188 3.47995 8.00017 2.92876 8.46447 2.46447C8.92876 2.00017 9.47996 1.63188 10.0866 1.3806C10.6932 1.12933 11.3434 1 12 1C12.6566 1 13.3068 1.12933 13.9134 1.3806C14.52 1.63188 15.0712 2.00017 15.5355 2.46447C15.9998 2.92876 16.3681 3.47996 16.6194 4.08658C16.8707 4.69321 17 5.34339 17 6L13.9979 6C13.9979 5.73763 13.9462 5.47783 13.8458 5.23543C13.7454 4.99303 13.5983 4.77279 13.4127 4.58726C13.2272 4.40174 13.007 4.25457 12.7646 4.15417C12.5222 4.05377 12.2624 4.00209 12 4.00209C11.7376 4.00209 11.4778 4.05377 11.2354 4.15417C10.993 4.25457 10.7728 4.40174 10.5873 4.58726C10.4017 4.77279 10.2546 4.99303 10.1542 5.23543C10.0538 5.47783 10.0021 5.73763 10.0021 6L7 6Z"
              fill="#98A2B3"
            />
            <path d="M14 6L17 6V7H14V6Z" fill="#98A2B3" />
            <path d="M7 6L10 6V7H7V6Z" fill="#98A2B3" />
          </svg>
          Panier
        </NavLink>
        {session != null &&
          <div onClick={handleLogout}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="lucide lucide-log-out">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" x2="9" y1="12" y2="12"></line>
            </svg>
            Déconnexion
          </div>
        }
      </div>
    </header>
  );
};

export default Header;
