import React from 'react';
import Auth from './Auth';

import { MainPage } from './main_page/Main_Page';

import '../style/header_app.css';

import img from '../assets/logoblueB.png';

export const AppLayout = props => {
	return (
		<div className="mainPage">
			<div className="top_header">
				<img src={img} alt="bugsminers logo" />
				<button className="logout"
					onClick={() => {
						Auth.logout(() => {
							props.history.push('/');
						});
					}}
				>
					Logout
				</button>
			</div>
			<MainPage />
		</div>
	);
};
