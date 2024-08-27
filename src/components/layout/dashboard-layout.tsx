import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../shared/sidebar';

const DashboardLayout: React.FC = () => {
	return (
		<div className='w-full h-[100vh] bg-[white] flex'>
			<div className='w-[20%] h-[100%] border-r border-[#c7c7c7] '>
				<Sidebar />
			</div>
			<div className='w-[80%] h-[100%] '>
				<div className='w-full h-[14%] flex justify-end items-center gap-3 pr-5'>
					<p className='text-lg font-bold text-[grey]'>AgboRex</p>
					<div className='w-10 h-10 rounded-full bg-blue-500 flex justify-center items-center'>
						<p className='text-white text-sm font-bold'>AR</p>
					</div>
				</div>
				<div className='w-full h-[86%] '>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
