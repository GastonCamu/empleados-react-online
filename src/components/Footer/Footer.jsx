import React from 'react';
import s from './Footer.module.css';

const currentYear = new Date().getFullYear();

const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className={s.left}>
				<p><span>&copy; {currentYear} Gastón Camú</span> Todos los derechos reservados.</p>
			</div>

			<div className={s.right}>
				<a href="https://github.com/GastonCamu" target='_blank' rel="noopener noreferrer">
					<img className={s.logoGitHub} src="/assets/img/logo-github.png" alt="logo github" />
				</a>
				<a href="https://www.linkedin.com/in/gaston-camu/" target='_blank' rel="noopener noreferrer">
					<img className={s.logoLinkedin} src="/assets/img/logo-linkedin.png" alt="logo linkedin" />
				</a>
			</div>
 		</footer>
	);
};

export default Footer;
