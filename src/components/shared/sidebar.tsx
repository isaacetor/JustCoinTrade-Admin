import React from 'react';
import { RxDashboard } from "react-icons/rx";
import { HiUsers } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';
import { IoMdChatboxes } from "react-icons/io";

const Sidebar: React.FC = () => {

	return (

		<>
		
			<div className='w-full h-[100%] flex flex-col gap-5 items-center py-2 '>
				<div className='w-[50%] h-[20%] '></div>
				<div className='w-full h-[60%] p-5 flex flex-col gap-5 '>
					<NavLink
    					to={"/"}
						className={({isActive}) =>
							!isActive
								? "transition-all hover:text-[0.90rem] hover:bg-[#023e8a] w-[95%] rounded-lg hover:text-[#FDFDF7] text-[#717171] "
								: "transition-all bg-[#023e8a] w-[95%] text-white rounded-lg hover:text-[white] "
						}
					>
							<div className="w-full h-11 flex items-center   transition-all duration-400 gap-4 px-6 rounded-full cursor-pointer">
								<RxDashboard  className="w-6 h-6" />
								<p className="font-semibold text-base">
									Dashboard
								</p>
							</div>
					</NavLink>
					<NavLink
    					to={"/users"}
						className={({isActive}) =>
							!isActive
								? "transition-all hover:text-[0.90rem] hover:bg-[#023e8a] w-[95%] rounded-lg hover:text-[#FDFDF7] text-[#717171] "
								: "transition-all bg-[#023e8a] w-[95%] text-white rounded-lg hover:text-[white] "
						}
					>
							<div className="w-full h-11 flex items-center   transition-all duration-400 gap-4 px-6 rounded-full cursor-pointer">
								<HiUsers  className="w-6 h-6" />
								<p className="font-semibold text-base">
									Users
								</p>
							</div>
					</NavLink>
					<NavLink
    					to={"/chat"}
						className={({isActive}) =>
							!isActive
								? "transition-all hover:text-[0.90rem] hover:bg-[#023e8a] w-[95%] rounded-lg hover:text-[#FDFDF7] text-[#717171] "
								: "transition-all bg-[#023e8a] w-[95%] text-white rounded-lg hover:text-[white] "
						}
					>
							<div className="w-full h-11 flex items-center   transition-all duration-400 gap-4 px-6 rounded-full cursor-pointer">
								<IoMdChatboxes  className="w-6 h-6" />
								<p className="font-semibold text-base">
									Chat
								</p>
							</div>
					</NavLink>
					
				</div>
			</div>
		
		</>

	);
};

export default Sidebar;
