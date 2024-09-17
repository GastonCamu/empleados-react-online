import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../../components';

import s from './PublicLayout.module.css';

const PublicLayout = () => {
	return (
		<>
			<div className={s.publiclayout}>
				<Outlet />
 			</div>
			 <Footer />
		</>
	);
};

export default PublicLayout;