import Navbar from "@/components/Navbar";
import Home from "./Home";
import React from "react";
import Footer from "@/components/Footer";

const Layout = () => {
	return (
		<>
			{/* Navbar */}
			<div className="w-full border-b-[1px] border-black border-opacity-5 pb-2">
				<Navbar />
			</div>
			<div className="w-full">
				<Home />
			</div>
			<div className="w-full border-t-[1px] border-black border-opacity-5 pt-2">
				<Footer />
			</div>
		</>
	);
};

export default Layout;
