import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";
import Layout from "./Layout";

const index = () => {
	return (
		<>
			{/* Navbar */}
			<div className="w-full border-b-[1px] border-black border-opacity-5 pb-2">
				<Navbar />
			</div>
			<div className="w-full">
				<Layout />
			</div>
			<div className="w-full mt-[7rem]  border-t-[1px] border-black border-opacity-5 pt-2  ">
				<Footer />
			</div>
		</>
	);
};

export default index;
