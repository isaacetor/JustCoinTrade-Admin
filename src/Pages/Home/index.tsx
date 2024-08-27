import React from 'react';
import { FaUserGroup, FaClockRotateLeft } from "react-icons/fa6";
import { FcSalesPerformance } from "react-icons/fc";
import { RiBox3Fill } from "react-icons/ri";

const HomePage: React.FC = () => {

	return (
		<>
		
			<div className='w-full h-full text-white bg-[#F5F6FA] px-5 py-5 overflow-y-auto '>
				<h1 className='text-black font-bold text-2xl'>Dashboard</h1>
				<div className='w-full flex mt-6 flex-wrap justify-between'>
					<div className='bg-white rounded-lg px-6 py-8 flex flex-col justify-between gap-4'>
						<div className='w-full flex justify-between gap-14'>
							<div className='flex flex-col gap-2'>
								<p className='text-[grey] text-sm font-semibold'>Total User</p>
								<h3 className='text-xl font-bold text-black'>40,689</h3>
							</div>
							<div className='w-[50px] h-[50px] text-xl rounded-full bg-blue-100 text-blue-500 flex justify-center items-center'>
								<FaUserGroup/>
							</div>
						</div>
					</div>
					<div className='bg-white rounded-lg px-6 py-8 flex flex-col justify-between gap-4'>
						<div className='w-full flex justify-between gap-14'>
							<div className='flex flex-col gap-2'>
								<p className='text-[grey] text-sm font-semibold'>Total Withdraw</p>
								<h3 className='text-xl font-bold text-black'>10293</h3>
							</div>
							<div className='w-[50px] h-[50px] text-xl rounded-full bg-orange-100 text-orange-500 flex justify-center items-center'>
								<RiBox3Fill/>
							</div>
						</div>
					</div>
					<div className='bg-white rounded-lg px-6 py-8 flex flex-col justify-between gap-4'>
						<div className='w-full flex justify-between gap-14'>
							<div className='flex flex-col gap-2'>
								<p className='text-[grey] text-sm font-semibold'>Total Sales</p>
								<h3 className='text-xl font-bold text-black'>$89,000</h3>
							</div>
							<div className='w-[50px] h-[50px] text-xl rounded-full bg-yellow-100 flex justify-center items-center'>
								<FcSalesPerformance/>
							</div>
						</div>
					</div>
					<div className='bg-white rounded-lg px-6 py-8 flex flex-col justify-between gap-4'>
						<div className='w-full flex justify-between gap-14'>
							<div className='flex flex-col gap-2'>
								<p className='text-[grey] text-sm font-semibold'>Total Pending</p>
								<h3 className='text-xl font-bold text-black'>2040</h3>
							</div>
							<div className='w-[50px] h-[50px] text-xl rounded-full bg-red-100 text-red-500 flex justify-center items-center'>
								<FaClockRotateLeft/>
							</div>
						</div>
					</div>
				</div>
				<div className='w-full h-[266px] mt-8 bg-[#fff] rounded-lg px-6 py-4'>
					<p className='text-[#000] text-lg font-medium'>All Users</p>
					<div className='w-full h-[90%] overflow-auto'>
						<table className='mt-4 w-full border-collapse border-none table-fixed text-[#000] '>
							<thead>
								<tr>
									<th className='w-[100px] text-[14px] font-[500] border-t-none border-b-[1px] border-b-#000 border-r-none border-l-none text-left p-[20px] '>ID</th>
									<th className='w-[300px] text-[14px] font-[500] border-t-none border-b-[1px] border-b-#000 border-r-none border-l-none text-left p-[20px] '>Name</th>
									<th className='w-[300px] text-[14px] font-[500] border-t-none border-b-[1px] border-b-#000 border-r-none border-l-none text-left p-[20px] '>User Name</th>
									<th className='w-[300px] text-[14px] font-[500] border-t-none border-b-[1px] border-b-#000 border-r-none border-l-none text-left p-[20px] '>Email</th>
									<th className='w-[300px] text-[14px] font-[500] border-t-none border-b-[1px] border-b-#000 border-r-none border-l-none text-left p-[20px] '>Phone</th>
									<th className='w-[300px] text-[14px] font-[500] border-t-none border-b-[1px] border-b-#000 border-r-none border-l-none text-left p-[20px] '>Deativate</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className='w-[100px] text-[14px] font-[400] border-t-none border-b-[1px] border-b-#000 border-r-none border-l-none text-left p-[20px] '>1</td>
									<td className='w-[300px] text-[14px] font-[400] border-t-none border-b-[1px] border-b-#000 border-r-none border-l-none text-left p-[20px] '>shelby shore</td>
									<td className='w-[300px] text-[14px] font-[400] border-t-none border-b-[1px] border-b-#000 border-r-none border-l-none text-left p-[20px] '>shelbore</td>
									<td className='w-[300px] text-[14px] font-[400] border-t-none border-b-[1px] border-b-#000 border-r-none border-l-none text-left p-[20px] '>shelby234@gmail.com</td>
									<td className='w-[300px] text-[14px] font-[400] border-t-none border-b-[1px] border-b-#000 border-r-none border-l-none text-left p-[20px] '>09134546354</td>
									<td className='w-[300px] text-[14px] font-[400] border-t-none border-b-[1px] border-b-#000 border-r-none border-l-none text-left p-[20px] '>
										<button className='px-[20px] py-[10px] text-[#fff] border-none rounded-3xl bg-[red]'>deactivate</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		
		</>
	)
};

export default HomePage;
