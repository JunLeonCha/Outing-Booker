import React, { useContext, useEffect, useState } from "react";
import DynamicForm from "../../components/forms/DynamicForm";
import "../../assets/scss/pages/_authentication.scss";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {

	const [errorMessage, setErrorMessage] = useState(String);
	const { handleLogin, session } = useContext(AuthContext)

	type signUpFormValues = {
		email: string,
		password: string
	}

	const handleFormSubmit = async (values: signUpFormValues) => {
		try {
			await handleLogin(values)
		} catch (error) {
			setErrorMessage("Utilisateur ou mot de passe incorrect")
		}
	}
	const connexionFields = [
		{ name: "email", type: "email", placeholder: "toto@gmail.com" },
		{ name: "password", type: "password", placeholder: "xxxxxxxxxxx" },
	];

	if (session) {
		window.location.assign("/")
	}

	return (
		<div className="auth-login">
			<h1>LOGO</h1>
			<div className="auth-login__form">
				<h1>Se connecter</h1>
				<DynamicForm
					onSubmit={handleFormSubmit}
					fields={connexionFields}
					textButton={"Se connecter"}
				/>
			</div>
			{errorMessage && (
				<div>{errorMessage}</div>
			)}
			<a href="/">Retour</a>
		</div>
	);
};

export default Login;
