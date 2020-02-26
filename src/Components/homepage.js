import React from 'react';

import LoginRegister from './LoginRegister';

export const HomePage = props => {
	return (
		<>
			<LoginRegister history={props.history}/>
		</>
	);
};
