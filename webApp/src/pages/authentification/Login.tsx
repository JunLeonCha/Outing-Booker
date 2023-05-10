import React, { useContext } from "react";
import DynamicForm from "../../components/forms/DynamicForm";
import "../../assets/scss/pages/_authentication.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { handleLogin, session } = useContext(AuthContext)
  // console.log(session)

  type signUpFormValues = {
    email: string,
    password: string
  }

  const handleFormSubmit = async (values: signUpFormValues) => {
    try {
      const res = await handleLogin(values)
    } catch (error) {
      console.log(error);
    }

  }
  const connexionFields = [
    { name: "email", type: "email", placeholder: "toto@gmail.com" },
    { name: "password", type: "password", placeholder: "xxxxxxxxxxx" },
  ];

  // const handleSubmit = async () => {
  //   axios.post("/")
  // };

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
