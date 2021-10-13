/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { LayoutProps } from './Layout.props';
import styles from './Layout.module.scss';
import React, { FunctionComponent } from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Sidebar } from './Sidebar/Sidebar';
import { AppContextProvider, IAppContext } from '../context/app.context';


const Layout = ({ children}: LayoutProps):JSX.Element => {
	return (
		<div className={styles.wrapper}>
		<Header className={styles.header}/>
			<Sidebar className={styles.sidebar}/>
			<div className={styles.body}>
				{children}
			</div>
		<Footer className={styles.footer}/>
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown> & IAppContext> (Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props:T) {
		return (
			<AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
			<Layout>
				<Component {...props} />
			</Layout>
			</AppContextProvider>
		);
	};
};