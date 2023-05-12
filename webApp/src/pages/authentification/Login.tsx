import React, { useContext } from "react";
import DynamicForm from "../../components/forms/DynamicForm";
import "../../assets/scss/pages/_authentication.scss";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {

	// eslint-disable-next-line
	const { handleLogin, session } = useContext(AuthContext)

	type signUpFormValues = {
		email: string,
		password: string
	}

	const handleFormSubmit = async (values: signUpFormValues) => {
		try {
			await handleLogin(values)
		} catch (error) {
			console.log(error);
		}
	}
	const connexionFields = [
		{ name: "email", type: "email", placeholder: "toto@gmail.com" },
		{ name: "password", type: "password", placeholder: "xxxxxxxxxxx" },
	];

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
			<a href="/">Retour</a>
		</div>
	);
};

export default Login;
