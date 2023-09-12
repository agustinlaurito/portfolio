'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { PiSuitcaseSimpleThin } from 'react-icons/pi';
function Page() {

	return(
		<div>
			<div className="w-full h-screen flex flex-row items-center">
				<div className="flex w-1/2 flex-col items-center">
					<div className="text-background text-8xl">
						Agustin Laurito
					</div>
					<div className="text-6xl font-mono">
						<Typewriter words={['Backend Developer', 'Frontend Developer', 'Pilot', 'Software Engineer']} loop />
					</div>
				</div>
				<div className="flex w-1/2">
					<Image src="/images/abstract.jpg" width={700} height={700} alt="Profile" />
				</div>
			</div>

			<div className="w-full bg-accent flex flex-row items-center py-28">
				<div className="flex w-1/2 flex-col items-center">
					<span className="text-white text-6xl">
						Turning Ideas into Reality
					</span>
				</div>
				<div className="flex w-1/2 flex-col items-center px-12">
					<span className="text-white text-2xl font-mono text-justify">
						Welcome to the portfolio of Agustin Laurito, a software developer who’s been dazzling the tech world with his skills. He's made significant contributions at Acquatron, Finket, and now Sweeppea.
					</span>
				</div>
			</div>



			<div className="w-full h-screen flex flex-col items-center bg-black">

				<span className="text-6xl text-light mt-16 mb-8">
					Experience
				</span>

				<div className="w-1/2 bg-gray rounded-3xl p-5 flex flex-row gap-5 mt-12">
					<div className="bg-white rounded-full flex justify-center items-center w-1" />

					<div className="flex flex-col">
						<span className="text-4xl text-white font-mono">
							Sweeppea
						</span>
						<span className="text-xl text-slate-400 font-mono">
							Nov. 2022 - Present
						</span>
						<span className="text-2xl text-white my-5">
							Software Engineer
						</span>
						<span className="text-md text-white font-mono">Development of multiple applications for company management using Node.js and MongoDB.</span>
					</div>
				</div>

				<div className="w-1/2 bg-gray rounded-3xl p-5 flex flex-row gap-5 mt-12">
					<div className="bg-white rounded-full flex justify-center items-center w-1" />

					<div className="flex flex-col">
						<span className="text-4xl text-white font-mono">
							Finket
						</span>
						<span className="text-xl text-slate-400 font-mono">
							Jan 2022 - March 2023
						</span>
						<span className="text-2xl text-white my-5">
							Software Engineer
						</span>
						<span className="text-md text-white font-mono">Development of financial solutions using ReactJS, Express and AWS as core technologies.</span>
					</div>
				</div>

				<div className="w-1/2 bg-gray rounded-3xl p-5 flex flex-row gap-5 mt-12">
					<div className="bg-white rounded-full flex justify-center items-center w-4" />

					<div className="flex flex-col">
						<span className="text-4xl text-white font-mono">
							Acquatron
						</span>
						<span className="text-xl text-slate-400 font-mono">
							Nov. 2020 - Jan 2022
						</span>
						<span className="text-2xl text-white my-5">
							Software Developer
						</span>
						<span className="text-md text-white font-mono">My main task was the development of customized software solutions for the management of the company. Using C++ and MySQL I designed a comprehensive software for stock management and equipment production. This software not only eliminated the need to keep inventory manually, but also maximized efficiency in defining daily production and order fulfillment.</span>
					</div>
				</div>
			</div>

			<div className="w-full h-screen flex flex-col items-center bg-black">

				<span className="text-6xl text-light mt-16 mb-8">
					Personal Work
				</span>
			</div>
		</div>


	)
};

export default Page;
