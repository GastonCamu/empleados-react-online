import React from 'react';
import s from './LoadingModal.module.css';

const LoadingModal = ({}) => {
	return (
		<div className={s.loadingOverlay}>
 			<div className={s.loadingModal}>
				<div className={s.spinner} />
				<p>Cargando...</p>
			</div>
 		</div>
	);
};

export default LoadingModal;