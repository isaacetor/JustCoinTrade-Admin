import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";


const PasswordReset = () => {

	const navigate = useNavigate()

	return	(

		<>
		
			<div className="w-full h-[100vh] bg-[rgb(0,0,0)] flex items-center justify-center ">
				<div className="w-[30%] flex flex-col items-center gap-5 ">
					<div className="w-[30%] h-[100px] bg-[blue] "></div>
					<div className="text-center flex flex-col gap-3 ">
						<h3 className="text-4xl font-bold text-white">Forgotten Password?</h3>
						<p className="text-lg font-medium text-white">Enter your email and we'll send you a link to reset your password</p>
					</div>
					<div className="w-full flex flex-col gap-2">
						<label className="text-[grey] ">Email</label>
						<input
							className="w-full h-[50px] rounded-md pl-3 border border-[grey] bg-transparent text-white "
							placeholder="enter email"
						/>
					</div>
					<button className="w-full h-[55px] rounded-md text-lg font-semibold bg-[#312567] hover:bg-[#2b2059] active:bg-[#3d2d7a] text-white ">Submit</button>
					<div className="w-full flex justify-end items-center ">
						<div className="flex justify-end items-center text-white hover:text-[#312567] cursor-pointer " onClick={()=>navigate("/auth/login")}>
							<IoIosArrowBack className="w-6 h-6 "/>
							<p className="font-medium text-lg ">Back to login</p>
						</div>
					</div>
				</div>
			</div>
		
		</>

	)
};

export default PasswordReset;
