import React from "react";

const Footer = () => {
	return (
		<>
			<div className="wrapper">
				<div className="contain bg-red flex-col md:flex-row">
					<div>
						<p className="text-sm font-normal text-black opacity-75">
							© Copyright 2023 QuickTake. All Rights Reserved
						</p>
					</div>
					<div className="flex  items-center gap-2">
						<div className="text-sm font-medium text-black">Privacy Policy</div>
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
