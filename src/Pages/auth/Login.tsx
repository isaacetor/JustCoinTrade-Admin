import { useNavigate } from "react-router-dom";

const Login = () => {
	
	const navigate = useNavigate()

	return (

		<>
		
			<div className="w-full h-[100vh] bg-black flex justify-center items-center">
				<div className="p-5 flex flex-col gap-6 items-center">
					<div className="w-[150px] h-[100px] bg-[red]"></div>
					<div className="w-[400px] flex flex-col gap-5 ">
						<div className="w-full flex flex-col gap-1 ">
							<label className="text-md font-medium">Email</label>
							<input 
								className="w-full h-[50px] pl-3 rounded-md outline-none "
								placeholder="enter email address"
							/>
						</div>
						<div className="w-full flex flex-col gap-1 ">
							<label className="text-md font-medium">Password</label>
							<input 
								className="w-full h-[50px] pl-3 rounded-md outline-none "
								placeholder="enter email address"
							/>
						</div>
					</div>
					<button className="w-[400px] h-[55px] rounded-md text-lg font-semibold bg-[#312567] hover:bg-[#2b2059] active:bg-[#3d2d7a] text-white ">Login</button>
					<p className="text-lg text-white ">Don't have an Account ? <span className="text-[#312567] text-xl font-bold cursor-pointer">Register</span></p>
					<div className="w-[400px]">
						<p className="text-white text-md cursor-pointer hover:text-[#312567]" onClick={()=>navigate("/auth/password-reset")}>Forgot Password ?</p>
					</div>
				</div>
			</div>
		
		</>

	)
};

export default Login;
