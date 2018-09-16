import Header from './Header'
import React from 'react';
import '../styles/index.scss';

const Layout = (props) => (
	<div className="content">
		<Header/>
		{props.children}
	</div>
);

export default Layout;