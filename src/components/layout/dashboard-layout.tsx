import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../shared/sidebar';
import AppScrollToTop from '../../reusables/functions/scroll-to-top';

const DashboardLayout: React.FC = () => {
	return (
		<div className='flex gap-3'>
			<Sidebar />
			<AppScrollToTop />
			<Outlet />
		</div>
	);
};

export default DashboardLayout;
