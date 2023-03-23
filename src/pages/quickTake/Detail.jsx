/* eslint-disable react-hooks/rules-of-hooks */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { BsYoutube } from "react-icons/bs";
import { BsClipboard2 } from "react-icons/bs";
const index = () => {
	const [show, setShow] = useState();
	const [data, setData] = useState("Video");
	const [go, setGo] = useState(false);
	const [input, setInput] = useState("");
	const [inputVal, setInputVal] = useState("");
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
			{/* Navbar */}
			<div className="w-full border-b-[1px] border-black border-opacity-5 pb-2">
				<Navbar />
			</div>
			<div className="w-full">
				<div className="wrapper">
					<div className="contain my-24 flex-col items-center justify-center">
						<div className="w-full ">
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
											onClick={() => router.push("/quickTake")}
											className=" flex h-[55px] w-full items-center justify-center rounded-lg bg-red text-[13px] text-white sm:h-[57px] sm:text-base">
											Quick Take
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="contain flex-col">
						<div>
							<BsYoutube size={30} color="#E7132E" />
						</div>
						<div className="mt-2">
							<h1 className="text-lg font-extrabold md:text-xl">
								How I make Youtube Videos (and grew from 0 to 100k subscribers)
							</h1>
							<p className="des mt-3 text-black opacity-50">Joshua Mayo</p>
						</div>
						<div className="my-8">
							<p className="des text-black">
								At vero eos et accusamus et iusto odio dignissimos ducimus qui
								blanditiis praesentium voluptatum deleniti atque corrupti quos
								dolores et quas molestias excepturi sint occaecati cupiditate
								non provident, similique sunt in culpa qui officia deserunt
								mollitia animi, id est laborum et dolorum fuga. Et harum quidem
								rerum facilis est et expedita distinctio. Nam libero tempore,
								cum soluta nobis est eligendi optio cumque nihil impedit quo
								minus id quod maxime placeat facere possimus, omnis voluptas
								assumenda est, omnis dolor repellendus.
							</p>
							<p className="des mt-3 text-black">
								Temporibus autem quibusdam et aut officiis debitis aut rerum
								necessitatibus saepe eveniet ut et voluptates repudiandae sint
								et molestiae non recusandae.{" "}
								<span className="bg-black bg-opacity-20">
									{" "}
									Itaque earum rerum hic tenetur a sapiente delectus, ut aut
									reiciendis voluptatibus maiores alias consequatur aut
									perferendis doloribus asperiores repellat.
								</span>
							</p>
						</div>
						<div className="w-full">
							<button className="flex h-[50px] w-[256px] items-center justify-center gap-2 rounded-lg bg-[#416088]">
								<div>
									<BsClipboard2 color="white" size={20} />
								</div>
								<div className="text-sm font-medium text-white">
									Copy link to this summary
								</div>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-[7rem] w-full  border-t-[1px] border-black border-opacity-5 pt-2  ">
				<Footer />
			</div>
		</>
	);
};

export default index;
