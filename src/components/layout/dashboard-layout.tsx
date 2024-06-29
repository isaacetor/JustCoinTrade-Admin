import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../shared/sidebar';

const DashboardLayout: React.FC = () => {
	return (
		<div className='w-full h-[100vh] bg-[black] flex'>
			<div className='w-[20%] h-[100%] border-r-2 border-[#023e8a] '>
				<Sidebar />
			</div>
			<div className='w-[80%] h-[100%] '>
				<div className='w-full h-[15%] flex justify-end items-center gap-3 border-b-2 border-[#023e8a] pr-5'>
					<p className='text-white text-lg font-bold'>AgboRex</p>
					<div className='w-10 h-10 rounded-full bg-[#023e8a] flex justify-center items-center'>
						<p className='text-white text-sm font-bold'>AR</p>
					</div>
				</div>
				<div className='w-full h-[85%] '>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
