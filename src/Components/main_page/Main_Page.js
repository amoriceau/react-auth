import React from 'react';
import Auth from '../Auth';

import '../../style/main_page.css';

export const MainPage = props => {
	const user = JSON.parse(localStorage.getItem('user'));
	return (
		<div className="main_page">
			<h2>Welcome {user.name}.</h2>
			<h3>How are you today ?</h3>
		</div>
	);
};
