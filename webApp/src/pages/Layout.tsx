import React, { ReactNode, useEffect, useState } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

interface LayoutProps {
	content: ReactNode;
	title?: string;
	arrowBack?: ReactNode;
	className?: string;
}

const Layout: React.FC<LayoutProps> = ({ content, title, arrowBack, className }) => {

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 700);
		};
		window.addEventListener('resize', handleResize);
		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [])

	return (
		<div id='content'>
			{!isMobile ? (
				<>
					<Header title={title} arrowBack={arrowBack} />
					<div className={`${className} layout`}>
						{content}
					</div>
				</>
			) : (
				<>
					<Header title={title} arrowBack={arrowBack} />
					<div className={`${className} layout`}>
						{content}
					</div>
					<NavBar />
				</>
			)}

		</div>
	);
};

export default Layout;