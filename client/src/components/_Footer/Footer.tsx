import classNames from 'classnames';
import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
	return (
		<div className={classNames(s.root, 'content-wrapper')}>
			<h1 className={s.heading}>Footer</h1>
		</div>
	);
};

Footer.displayName = 'Footer';

export default Footer;
