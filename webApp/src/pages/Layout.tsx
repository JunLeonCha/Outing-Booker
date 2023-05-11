import React, {ReactNode} from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

interface LayoutProps {
	content: ReactNode;
	title?: string;
	arrowBack?: ReactNode;
	className?: string;
}

const Layout: React.FC<LayoutProps> = ({content, title, arrowBack, className}) => {
	return (
		<div id='content'>
			<Header title={title} arrowBack={arrowBack}/>
			<div className={`${className} layout`}>
				{content}
			</div>
			<NavBar/>
		</div>
	);
};

export default Layout;