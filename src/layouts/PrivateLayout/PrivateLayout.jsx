import React from 'react';
import { Outlet } from 'react-router-dom';

import s from './PrivateLayout.module.css';

import { Navbar, Footer } from '../../components';

const PrivateLayout = ({ children }) => {
	return (
		<div className={s.privatelayout}>
 			<Navbar />
			<main className={s.main}>
				<Outlet />
			</main>
			<Footer />
 		</div>
	);
};

export default PrivateLayout;