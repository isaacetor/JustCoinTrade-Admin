import React from 'react';

const AllUsers: React.FC = () => {

	return (
		<>
		
			<div className='w-full h-[100%] pl-12 pt-5 pb-2 pr-5 flex flex-col gap-12 '>
				<h3 className='text-white font-bold text-2xl'>Users</h3>
				<div className='w-full h-[80vh] scroll scrollbar scrollbar-track-grey-500 overflow-y-scroll relative'>
					<table className='border border-collapse text-white'>
						<thead className='border sticky top-[-1px] bg-[#023e8a] z-1'>
							<tr>
								<th className='p-5 border'>S/N</th>
								<th className='w-full p-5 border text-left'>Name</th>
							</tr>
						</thead>
						<tbody className='border'>
							<tr className='cursor-pointer hover:bg-[#023e8a]'>
								<td className='p-5 border text-center'>1</td>
								<td className='p-5 border text-left'>Michael</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		
		</>
	)
};

export default AllUsers;
