/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { AiOutlineCaretDown } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [show, setShow] = useState(false);
	const onclick = () => {
		setOpen(!open);
	};
	const router = useRouter();
	return (
		<>
			<div className="wrapper">
				<div className="contain">
					<div className=" flex  h-[50px] pt-2 w-[100%] items-center justify-center">
						{open ? (
							<div className="absolute top-0 left-0 h-full w-full bg-[#00000067] lg:hidden"></div>
						) : (
							""
						)}
						<nav className="flex w-[100%]  items-center justify-between">
							<div className="logo">
								<Link href={"/"}>
									<img className="" src="/logo.png" />
								</Link>
							</div>
							{/* Close btn */}
							<div
								onClick={onclick}
								className="absolute right-3 top-[16px] z-[99] cursor-pointer text-2xl transition-all duration-500 lg:hidden">
								{open ? (
									<div className="sm:hidden">
										{" "}
										<IoMdClose color="#ffffff" />
									</div>
								) : (
									<FiMenu size={28} color="black" />
								)}
							</div>
							{/* Navbar */}
							<div
								className={`absolute top-0 z-[100] flex h-screen w-full  flex-col items-center  justify-center bg-black pt-8 text-[14px] font-normal leading-[180%] lg:static lg:h-auto lg:flex-row lg:items-center lg:pt-0 
						${
							open ? "left-0" : "left-[-1080px]"
						}  ease left-0 z-[99] h-full w-full gap-8 font-normal transition-all duration-[800ms] sm:w-[60%] lg:w-auto  lg:gap-6 lg:bg-inherit xl:gap-6`}>
								<div
									onClick={onclick}
									className="absolute right-1 top-5 z-[99] cursor-pointer text-2xl transition-all duration-500 lg:hidden">
									{open ? <IoMdClose size={28} color="white" /> : ""}
								</div>
								<Link
									className={`rounded-r-xl  px-4 py-2 lg:text-[14px] ${
										open ? "text-white" : "text-[#242424]"
									} text-xl font-medium transition-all duration-1000  lg:p-0   lg:w-auto lg:bg-inherit lg:text-sm lg:font-medium`}
									href={"/signup"}>
									Sign Up
								</Link>
								<Link
									className={`rounded-r-xl  px-4 py-2 lg:text-[14px] ${
										open ? "text-white" : "text-[#242424]"
									} text-xl font-medium transition-all duration-1000   lg:p-0  lg:w-auto lg:bg-inherit lg:text-sm lg:font-medium`}
									href={"/"}>
									Chrome Plugin
								</Link>
								<Link
									className={`rounded-r-xl  px-4 py-2 lg:text-[14px] ${
										open ? "text-white" : "text-[#242424]"
									} text-xl font-medium transition-all duration-1000  lg:p-0   lg:w-auto lg:bg-inherit lg:text-sm lg:font-medium`}
									href={"/"}>
									Go Pro
								</Link>
								<Link
									className={`rounded-r-xl  px-4 py-2 lg:text-[14px] ${
										open ? "text-white" : "text-[#242424]"
									} text-xl font-medium transition-all duration-1000  lg:p-0 lg:w-auto lg:bg-inherit lg:text-sm lg:font-medium`}
									href={"/"}>
									Quicktake for Business
								</Link>
								<Link
									className={`rounded-r-xl  px-4 py-2 lg:text-[14px] ${
										open ? "text-white" : "text-red"
									} text-xl font-medium transition-all duration-1000 lg:pl-6  lg:w-auto lg:bg-inherit lg:text-sm lg:font-medium`}
									href={"/login"}>
									Login
								</Link>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
};
export default Navbar;
