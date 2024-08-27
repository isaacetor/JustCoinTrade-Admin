import React from 'react';
import { RxDashboard } from "react-icons/rx";
import { HiUsers } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';
import { IoMdChatboxes } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosPower } from "react-icons/io";

const Sidebar: React.FC = () => {

	return (

		<>
		
			<div className='w-full h-[100%] flex flex-col justify-between py-2 overflow-auto '>
				<div className='w-full'>
					<div className='w-full flex items-center justify-center py-4 '>
						<p className='text-blue-500 font-bold text-2xl'>JustCoinTrade</p>
					</div>
					<div className='w-full p-5 flex flex-col gap-5 mt-4 '>
						<NavLink
							to={"/"}
							className={({isActive}) =>
								!isActive
									? "transition-all hover:text-[0.90rem] hover:bg-blue-500 w-[95%] rounded-lg hover:text-[#FDFDF7] text-[#717171] "
									: "transition-all bg-blue-500 w-[95%] text-white rounded-lg hover:text-[white] "
							}
						>
								<div className="w-full h-11 flex items-center   transition-all duration-400 gap-4 px-6 rounded-full cursor-pointer">
									<RxDashboard className='w-4 h-4' />
									<p className="font-semibold text-md">
										Dashboard
									</p>
								</div>
						</NavLink>
						<NavLink
							to={"/users"}
							className={({isActive}) =>
								!isActive
									? "transition-all hover:text-[0.90rem] hover:bg-blue-500 w-[95%] rounded-lg hover:text-[#FDFDF7] text-[#717171] "
									: "transition-all bg-blue-500 w-[95%] text-white rounded-lg hover:text-[white] "
							}
						>
								<div className="w-full h-11 flex items-center   transition-all duration-400 gap-4 px-6 rounded-full cursor-pointer">
									<HiUsers  className="w-4 h-4" />
									<p className="font-semibold text-md">
										Users
									</p>
								</div>
						</NavLink>
						<NavLink
							to={"/chat"}
							className={({isActive}) =>
								!isActive
									? "transition-all hover:text-[0.90rem] hover:bg-blue-500 w-[95%] rounded-lg hover:text-[#FDFDF7] text-[#717171] "
									: "transition-all bg-blue-500 w-[95%] text-white rounded-lg hover:text-[white] "
							}
						>
								<div className="w-full h-11 flex items-center   transition-all duration-400 gap-4 px-6 rounded-full cursor-pointer">
									<IoMdChatboxes  className="w-4 h-4" />
									<p className="font-semibold text-md">
										Chat
									</p>
								</div>
						</NavLink>
						
					</div>
				</div>
				<div className='w-full p-5 mb-10 flex flex-col gap-4'>
					<NavLink
						to={"/settings"}
						className={({isActive}) =>
							!isActive
								? "transition-all hover:text-[0.90rem] hover:bg-blue-500 w-[95%] rounded-lg hover:text-[#FDFDF7] text-[#717171] "
								: "transition-all bg-blue-500 w-[95%] text-white rounded-lg hover:text-[white] "
						}
					>
							<div className="w-full h-11 flex items-center   transition-all duration-400 gap-4 px-6 rounded-full cursor-pointer">
								<IoSettingsOutline  className="w-4 h-4" />
								<p className="font-semibold text-md">
									Settings
								</p>
							</div>
					</NavLink>
					<div className="w-full h-11 flex items-center text-[#717171] duration-400 gap-4 px-6 cursor-pointer transition-all hover:text-[0.90rem] hover:bg-blue-500 rounded-lg hover:text-[#FDFDF7]">
						<IoIosPower  className="w-4 h-4" />
						<p className="font-semibold text-md">
							Logout
						</p>
					</div>
				</div>
			</div>
		
		</>

	);
};

export default Sidebar;
