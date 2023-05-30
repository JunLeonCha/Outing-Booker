import React from "react";
import { NavLink } from 'react-router-dom';

const ERROR_404 = () => {
  return (
    <div> 
      <h1>La page que vous demandez n'existe pas</h1>
      <NavLink to="/">
        Accueil
      </NavLink >
    </div >
  );
};

export default ERROR_404;
