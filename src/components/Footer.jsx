import React from "react";

const Footer = () => {
	return (
		<>
			<div className="wrapper mt-[1rem]">
				<div className="contain py-4 flex-col justify-between items-center md:items-start gap-3 md:flex-row">
					<div>
						<p className="text-sm font-normal text-black opacity-75 text-center md:text-left">
							© Copyright 2023 QuickTake. All Rights Reserved
						</p>
					</div>
					<div className="flex  items-center gap-2">
						<div className="text-sm font-medium text-black text-center md:text-left">Privacy Policy</div>
						<div className="text-sm font-medium text-black">
							Terms and Conditions
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
