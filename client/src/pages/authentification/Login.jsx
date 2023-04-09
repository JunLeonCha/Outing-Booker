import React from "react";
import DynamicForm from "../../components/forms/DynamicForm";
import "../../asset/scss/pages/_authentication.scss";

const Login = () => {
  function handleFormSubmit(values) {
    console.log(values);
  }
  const connexionFields = [
    { name: "email", type: "email", placeholder: "toto@gmail.com" },
    { name: "password", type: "password", placeholder: "xxxxxxxxxxx" },
  ];

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
