import React from 'react';
import s from './AuthForm.module.css';

const AuthForm = () => {
	return (
		<div className={s.root}>
			<h1 className={s.heading}>Auth form</h1>
		</div>
	);
};

AuthForm.displayName = 'AuthForm';

export default AuthForm;
