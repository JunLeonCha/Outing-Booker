import React from "react";
import DynamicForm from "../../components/forms/DynamicForm";
import "../../assets/scss/pages/_authentication.scss";
import axios from "axios";

const Login = () => {
  function handleFormSubmit(values) {
    console.log(values);
  }
  const connexionFields = [
    { name: "email", type: "email", placeholder: "toto@gmail.com" },
    { name: "password", type: "password", placeholder: "xxxxxxxxxxx" },
  ];

  const handleSubmit = async () => {
    axios.post("/")
  };

  return (
    <div className="auth-render">
      <div className="auth-form">
        <h1>LOGO</h1>
        <DynamicForm
          onSubmit={handleFormSubmit}
          fields={connexionFields}
          textButton={"Se connecter"}
        />
      </div>
      <a href="/">Retour</a>
    </div>
  );
};

export default Login;
