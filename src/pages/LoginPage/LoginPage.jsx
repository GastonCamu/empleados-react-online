import React from 'react';
import { useNavigate } from 'react-router-dom';

import s from './LoginPage.module.css';

import { useAuth } from '../../context';
import { useForm } from '../../hooks';

const LoginPage = ({}) => {

	const { login } = useAuth();
	const navigate = useNavigate();

	const validate = (values) => {
		const errors = {};
		if (!values.username) errors.username = 'El usuario es requerido';
		if (!values.password) errors.password = 'La contraseña es requerida';
		return errors;
	};

	const { values, errors, handleChange, handleSubmit } = useForm(
		{username: '', password: ''},
		validate
	);

	const onSubmit = () => {
		login(values.username);
		navigate('/home');
		
	};

	return (
		<div className={s.loginpage}>
 			<form className={s.form} onSubmit={(e) => handleSubmit(e, onSubmit)}>
				<div className={s.formDivs}>
					<label>Usuario:</label>
					<input 
						className={s.input}
						type="text" 
						name='username'
						placeholder='Gaston'
						value={values.username}
						onChange={handleChange}
					/>
					{errors.username && <p className={s.error}>* {errors.username}</p>}
				</div>
				<div className={s.formDivs}>
					<label>Contraseña:</label>
					<input
					className={s.input} 
					type="password"
					name='password'
					placeholder='1234'
					value={values.password}
					onChange={handleChange} 
					/>
					{errors.password && <p className={s.error}>* {errors.password}</p>}
				</div>
				<button className={s.btnSubmit} type='submit'>Iniciar Sesión</button>
			</form>
 		</div>
	);
};

export default LoginPage;