import React, { useState, useEffect } from "react";
import { BsYoutube } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { MdPodcasts } from "react-icons/md";
import { useRouter } from "next/router";

const Layout = () => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	}, []);
	const router = useRouter();
	return (
		<>
			<div className="w-full">
				{loading ? (
					<div className="absolute  top-0 left-0 flex h-full w-full items-center justify-center">
						<img src="/loader.gif" className="h-[5rem] lg:h-auto" alt="" />{" "}
					</div>
				) : (
					<div className="w-full">
						<h1 className="heading my-9 text-center font-black">
							My QuickTakes
						</h1>
						<div className="wrapper">
							<div className="contain items-center justify-center">
								<div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
									<div
										onClick={() => router.push("/quickTake/Detail")}
										className="c relative h-[250px] w-full cursor-pointer rounded-lg p-4 md:p-6">
										<div className="mainTitle font-extrabold text-black">
											How I make Youtube Videos (and grew from 0 to 100k
											subscribers)
										</div>
										<p className="des mt-4 text-black opacity-60">
											Joshua Mayo
										</p>
										<div className="absolute bottom-2 left-0 flex w-full cursor-pointer items-center  justify-between p-4">
											<div>
												<BsYoutube size={25} color="#E7132E" />
											</div>
											<div className="flex items-center gap-1 ">
												<div className="text-sm font-semibold text-red">
													View QuickTake
												</div>
												<div>
													<BsChevronRight size={20} color="#E7132E" />
												</div>
											</div>
										</div>
									</div>
									<div
										onClick={() => router.push("/quickTake/Detail")}
										className="c relative h-[250px] w-full cursor-pointer rounded-lg p-4 md:p-6">
										<div className="mainTitle font-extrabold text-black">
											The Greatest Moment
										</div>
										<p className="des mt-4 text-black opacity-60">
											Joshua Mayo
										</p>
										<div className="absolute bottom-2 left-0 flex w-full cursor-pointer items-center  justify-between p-4">
											<div>
												<BsYoutube size={25} color="#E7132E" />
											</div>
											<div className="flex items-center gap-1 ">
												<div className="text-sm font-semibold text-red">
													View QuickTake
												</div>
												<div>
													<BsChevronRight size={20} color="#E7132E" />
												</div>
											</div>
										</div>
									</div>
									<div
										onClick={() => router.push("/quickTake/Detail")}
										className="c relative h-[250px] w-full cursor-pointer rounded-lg p-4 md:p-6">
										<div className="mainTitle font-extrabold text-black">
											How I Built a 7-figure marketing agency
										</div>
										<p className="des mt-4 text-black opacity-60">
											Sebastian Ghiorghiu
										</p>
										<div className="absolute bottom-2 left-0 flex w-full cursor-pointer items-center  justify-between p-4">
											<div>
												<MdPodcasts size={25} color="#D56DFB" />
											</div>
											<div className="flex items-center gap-1 ">
												<div className="text-sm font-semibold text-red">
													View QuickTake
												</div>
												<div>
													<BsChevronRight size={20} color="#E7132E" />
												</div>
											</div>
										</div>
									</div>
									<div
										onClick={() => router.push("/quickTake/Detail")}
										className="c relative h-[250px] w-full cursor-pointer rounded-lg p-4 md:p-6">
										<div className="mainTitle font-extrabold text-black">
											How I stay productive 98% of every day.
										</div>
										<p className="des mt-4 text-black opacity-60">John Doe</p>
										<div className="absolute bottom-2 left-0 flex w-full cursor-pointer items-center  justify-between p-4">
											<div>
												<MdPodcasts size={25} color="#D56DFB" />
											</div>
											<div className="flex items-center gap-1 ">
												<div className="text-sm font-semibold text-red">
													View QuickTake
												</div>
												<div>
													<BsChevronRight size={20} color="#E7132E" />
												</div>
											</div>
										</div>
									</div>
									<div
										onClick={() => router.push("/quickTake/Detail")}
										className="c relative h-[250px] w-full cursor-pointer rounded-lg p-4 md:p-6">
										<div className="mainTitle font-extrabold text-black">
											I tried doing Shopify Dropshipping during pademic.
										</div>
										<p className="des mt-4 text-black opacity-60">John Doe</p>
										<div className="absolute bottom-2 left-0 flex w-full cursor-pointer items-center  justify-between p-4">
											<div>
												<MdPodcasts size={25} color="#D56DFB" />
											</div>
											<div className="flex items-center gap-1 ">
												<div className="text-sm font-semibold text-red">
													View QuickTake
												</div>
												<div>
													<BsChevronRight size={20} color="#E7132E" />
												</div>
											</div>
										</div>
									</div>
									<div
										onClick={() => router.push("/quickTake/Detail")}
										className="c relative h-[250px] w-full cursor-pointer rounded-lg p-4 md:p-6">
										<div className="mainTitle font-extrabold text-black">
											Failure is the greatest teacher
										</div>
										<p className="des mt-4 text-black opacity-60">John Doe</p>
										<div className="absolute bottom-2 left-0 flex w-full cursor-pointer items-center  justify-between p-4">
											<div>
												<BsYoutube size={25} color="#E7132E" />
											</div>
											<div className="flex items-center gap-1 ">
												<div className="text-sm font-semibold text-red">
													View QuickTake
												</div>
												<div>
													<BsChevronRight size={20} color="#E7132E" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default Layout;
