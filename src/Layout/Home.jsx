import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { motion } from "framer-motion";
import  {useRouter}  from "next/router";

const Home = () => {
	const [show, setShow] = useState();
	const [data, setData] = useState("Video");
	const [go, setGo] = useState(false);
	const [input, setInput] = useState("");
	const [inputVal, setInputVal] =useState("")
	const router = useRouter();
	const handleVideo = () => { 
		setData("Video");
		setShow(!show);
	};
	const handlePodcast = () => {
		setData("Podcast");
		setShow(!show);
		setGo(true);
	};
	function handleInputChange(event) {
		setInputVal(event.target.value);
		setInput(true);
	}
	return (
		<>
			<div className="wrapper text-black">
				<div className="contain flex-col items-center justify-center">
					<h1 className="heading mt-[70px] text-center font-black sm:mt-[104px]">
						AI Summarization <br className="hidden md:block" />{" "}
						<span className="italic">with a Twist</span>
					</h1>
					<p className="mainTitle my-4 mt-2 text-center font-semibold">
						Extract valuable insights from any video or podcast.{" "}
						<br className="hidden md:block" />
						<span className="text-red underline">25,307</span> QuickTakes and
						counting!
					</p>
				</div>
				<div className="contain flex-col items-center justify-center">
					<div className="w-full max-w-[960px]">
						<div className="a flex h-[80px] w-full items-center justify-center sm:h-[100px]">
							<div className="flex w-full items-center justify-between px-1 sm:px-3">
								<div className="b flex w-[67%] items-center md:w-[80%]">
									{/* DropDown */}
									<div className="relative flex h-[45px] w-[30px] items-center justify-between border-r border-blue  border-opacity-20  px-1 sm:h-[55px] sm:w-[140px] sm:px-3">
										<div
											onClick={() => setShow(!show)}
											className="hidden cursor-pointer text-xs font-semibold text-blue sm:block sm:text-sm">
											{data}
										</div>
										<div
											onClick={() => setShow(!show)}
											className="cursor-pointer text-base">
											{show ? (
												<BsChevronUp color="#416088" />
											) : (
												<BsChevronDown color="#416088" />
											)}
										</div>
										{/* Drop Down sections */}
										{show && (
											<motion.div
												initial={{ y: 0.1, opacity: 0 }}
												animate={{ y: 20, opacity: 1 }}
												exit={{ opacity: 0 }}
												transition={{ duration: 0.4 }}
												className="absolute top-[3rem] left-0 z-[100] flex h-[100px] w-[200px] flex-col justify-center  rounded-lg bg-white shadow-xl shadow-[#428ed438]">
												<div
													onClick={handleVideo}
													className=" flex h-full cursor-pointer items-center pl-8 text-sm font-semibold text-blue duration-300 hover:bg-slate-200">
													Video
												</div>
												<div className="h-[1px] w-full bg-black opacity-20"></div>
												<div
													onClick={handlePodcast}
													className=" flex h-full cursor-pointer items-center pl-8 text-sm font-semibold text-blue  duration-300 hover:bg-slate-200">
													Podcast
												</div>
											</motion.div>
										)}
									</div>
									<input
										value={inputVal}
										onChange={handleInputChange}
										type="text"
										className="h-[45px] w-[100%] rounded-lg border-none bg-transparent  pl-2 outline-none placeholder:text-[13px] placeholder:text-[#416088] sm:h-[55px] placeholder:sm:text-base"
										placeholder="Paste any video URL here"
									/>
								</div>
								<div className="w-[30%] md:w-[18%]">
									<button
										disabled={!inputVal}
										onClick={(()=>router.push('/quickTake'))}
										className=" flex h-[45px] w-full items-center justify-center rounded-lg bg-red text-[13px] text-white sm:h-[57px] sm:text-base">
										Quick Take
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full max-w-[700px]">
						<p className="des mt-[30px] text-center text-black opacity-50">
							Get ahead of the game with the A.I. summarization + curation tool
							packed with surprising features designed to make you smarter!{" "}
						</p>
					</div>
				</div>
				<div className="contain mt-[20px] items-center justify-center">
					<div className="place-item-center grid w-full max-w-[960px] grid-cols-1 place-content-center gap-3 md:grid-cols-2 lg:grid-cols-3">
						<div className="h-[240px] w-full ">
							<img src="/clip.png" className="mx-auto mt-[5rem]" alt="" />
							<p className="des mt-5 text-center font-semibold text-black">
								1. Paste the URL of <br /> your video
							</p>
						</div>
						<div className="h-[240px] w-full ">
							<img src="/quick.png" className="mx-auto mt-[5rem]" alt="" />
							<p className="des mt-5 text-center font-semibold text-black">
								2. Get profound takeaways in
								<br /> seconds (QuickTakes)
							</p>
						</div>
						<div className="h-[240px] w-full ">
							<img src="/download.png" className="mx-auto mt-[5rem]" alt="" />
							<p className="des mt-5 text-center font-semibold text-black">
								3. Easily save and share your <br /> QuickTakes
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
