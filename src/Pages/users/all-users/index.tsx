import React from 'react';

const AllUsers: React.FC = () => {

	return (
		<>
		
			<div className='w-full h-[100%] bg-[#F5F6FA]	 pl-12 pt-5 pb-2 pr-5 flex flex-col gap-6 '>
				<p className='text-black font-medium text-2xl'>JustCoinTrade Users list</p>
				<div className='w-full h-[90%] overflow-auto bg-[#fff]'>
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
		
		</>
	)
};

export default AllUsers;
