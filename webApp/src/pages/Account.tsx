import React from "react";
import Header from "../components/Header";
import "../assets/scss/pages/_account.scss";

const Account = () => {
  return (
    <>
      <div className="account">
        <div className="onglet">
          <p>logo</p>
          <p>Mes informations</p>
        </div>
        <div className="onglet">
          <p>logo</p>
          <p>Apparence</p>
        </div>
        <div className="onglet">
          <p>logo</p>
          <p>Langues</p>
        </div>
        <div className="onglet">
          <p>logo</p>
          <p>Aide</p>
        </div>
      </div>
    </>
  );
};

export default Account;
