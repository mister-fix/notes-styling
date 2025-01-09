import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = (props) => {
	const navigate = useNavigate();
	const onSubmit = (event) => {
		event.preventDefault();

		props.onLogin("mluukkai");
		navigate("/");
	};

	return (
		<div>
			<h2>Login</h2>

			<Form onSubmit={onSubmit}>
				<Form.Group>
					<Form.Label>username:</Form.Label>
					<Form.Control
						type="text"
						name="username"
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>password:</Form.Label>
					<Form.Control type="password" />
				</Form.Group>
				<Button
					variant="primary"
					type="submit"
				>
					login
				</Button>
			</Form>
		</div>
	);
};

export default Login;
