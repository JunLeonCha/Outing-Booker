import DynamicForm from "../../components/forms/DynamicForm";
import "../../assets/scss/pages/_authentication.scss";
import axios from "axios";
import React, {useState} from 'react';

const Signup = () => {
	const [errorSignUp, setErrorSignUp] = useState<string>();

	interface signUpFormValues {
		firstname: string,
		lastname: string,
		email: string,
		password: string
		confirm_password: string
	}

	function handleFormSubmit(values: signUpFormValues) {
		console.log(values);
		if (values.password === values.confirm_password) {
			axios.post("/user/signup", values).then((res) => {
				if (res.status === 200) {
					window.location.assign("/")
				} else {
					setErrorSignUp(res.data.message)
				}
			})
		} else {
			setErrorSignUp("Les mot de passe ne correspondent pas");
		}
	}

	const registerFields = [
		{name: "firstname", type: "text", placeholder: "John"},
		{name: "lastname", type: "text", placeholder: "Doe"},
		{name: "email", type: "email", placeholder: "toto@gmail.com"},
		{name: "password", type: "password", placeholder: "xxxxxxxxxxx"},
		{name: "confirm_password", type: "password", placeholder: "xxxxxxxxxxx"},
	];

	return (
		<div className="auth-register">
			<img className="logo" src="images/logo.png" alt="Logo d'Outing Booker"/>
			{errorSignUp && <p className="auth-register__error">{errorSignUp}</p>}
			<div className="auth-register__form">
				<h1>S'inscrire</h1>
				<DynamicForm
					onSubmit={handleFormSubmit}
					fields={registerFields}
					textButton={"S'inscrire"}
				/>
			</div>
			<a href="/">Retour</a>
		</div>
	);
};

export default Signup;
