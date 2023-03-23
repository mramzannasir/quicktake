/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const index = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const router = useRouter();
	// const onSubmit = (values) => router.push("/nextreg");
	const onSubmit = (values) => router.push("/");
	return (
		<div className="flex h-screen w-full items-center justify-center px-2 md:px-0">
			<div className="w-full max-w-[456px]">
				<img src="mainLogo.png" className="mx-auto" alt="" />
				<div className="my-6 text-center text-[28px] font-extrabold md:text-[32px] ">
					Login to your account
				</div>

				<form
					action=""
					onSubmit={handleSubmit(onSubmit)}
					className="mt-8 flex w-full flex-col gap-4">
					{/* Email Field */}
					<div>
						<div className=" d h-[50px] w-full text-lightBlue">
							<input
								{...register("email", {
									required: true,
									pattern:
										/[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g,
								})}
								type="email"
								id=""
								className="h-full w-full border-none bg-inherit pl-3 text-base outline-none placeholder:text-sm placeholder:text-lightBlue"
								placeholder="Email  Address"
							/>
						</div>
						{errors?.email?.type === "required" && (
							<h6 className="pl-2 text-sm font-bold text-rose-600">
								Enter Email
							</h6>
						)}
						{errors?.email?.type === "pattern" && (
							<h6 className="pl-2 text-sm  font-bold text-rose-600">
								Enter Valid Email Address
							</h6>
						)}
						{errors?.email?.watch === "pattern" && (
							<h6 className="pl-2  text-sm font-bold text-rose-600">Ohh</h6>
						)}
					</div>
					{/* PhoneNumber */}

					{/* Password */}
					<div>
						<div className="d h-[50px] w-full text-lightBlue">
							<input
								{...register("password", {
									required: true,
									minLength: 6,
								})}
								type="password"
								id=""
								className="h-full w-full border-none bg-inherit pl-3 text-base outline-none placeholder:text-sm placeholder:text-lightBlue"
								placeholder="Password"
							/>
						</div>
						{errors?.password?.type === "required" && (
							<h6 className="pl-2 text-sm font-bold text-rose-600">
								Please Enter Your Password
							</h6>
						)}
						{errors?.password?.type === "minLength" && (
							<h6 className="pl-2 text-sm  font-bold text-rose-600">
								Please Password Strong
							</h6>
						)}
					</div>
					<p className=" text-sm font-semibold text-blue ">Forgot Password?</p>
					<button
						className="w-full rounded bg-red py-3 text-center text-sm   text-white "
						type="submit">
						Continue
					</button>
				</form>
				<p className="mt-4 text-sm text-black">
					Don’t have an account? {""}
					<span
						onClick={() => router.push("/signup")}
						className="cursor-pointer font-medium text-blue">
						Sign Up
					</span>
				</p>
			</div>
		</div>
	);
};

export default index;
