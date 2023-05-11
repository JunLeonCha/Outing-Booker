import React from "react";
import DynamicForm from "../../components/forms/DynamicForm";
import "../../assets/scss/pages/_authentication.scss";
import axios from "axios";

const Signup = () => {

	interface signUpFormValues {
		firstname: string,
		lastname: string,
		email: string,
		password: string
	}

	function handleFormSubmit(values: signUpFormValues) {
		console.log(values);
		axios.post("/user/signup", values);
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
			<h1>LOGO</h1>
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
