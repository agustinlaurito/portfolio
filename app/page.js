'use client';

import { motion, transform } from "framer-motion";
import Image from "next/image";
import { Typewriter, useTypewriter } from "react-simple-typewriter";
import { PiSuitcaseSimpleThin } from 'react-icons/pi';
import { Canvas } from "@react-three/fiber";
import Blob from "./components/Three/Blob";


function Page() {

	const descriptions = [
		{
			business: 'Sweeppea',
			dates: 'Nov. 2022 - Present',
			title: 'Software Engineer',
			description: 'Development of multiple applications for company management using Node.js and MongoDB.',
			image: '/images/sweeppea-white.png'
		},
		{
			business: 'Finket',
			dates: 'Jan 2022 - March 2023',
			title: 'Software Engineer',
			description: 'Development of financial solutions using ReactJS, Express and AWS as core technologies.',
			image: '/images/finket.png'
		},
		{
			business: 'Acquatron',
			dates: 'Nov 2021 - Jan 2022',
			title: 'Software Engineer',
			description: 'My main task was the development of customized software solutions for the management of the company. Using C++ and MySQL I designed a comprehensive software for stock management and equipment production. This software not only eliminated the need to keep inventory manually, but also maximized efficiency in defining daily production and order fulfillment.',
			image: '/images/acquatron.png',
			size: 375
		},
	];

	return(
		<div>
			<div className="w-full h-screen flex flex-row items-center">
				<div className="flex w-1/2 flex-col items-center">
					<div className="text-background text-8xl">
						Agustin Laurito
					</div>
					<div className="text-6xl font-mono min-h-[3.75rem]">
						<Typewriter words={['Software Engineer', 'Pilot']} loop />
					</div>
				</div>
				<div className="w-1/2 h-3/4">
					<Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
						<Blob />
					</Canvas>
				</div>
			</div>

			<div className="w-full bg-black flex flex-row items-center py-28">
				<div className="flex w-1/2 flex-col items-center">
					<span className="text-white text-6xl">
						Turning Ideas into Reality
					</span>
				</div>
				<div className="flex w-1/2 flex-col items-center px-12">
					<span className="text-white text-2xl font-mono text-justify">
						Welcome to the portfolio of Agustin Laurito, a software developer whos been dazzling the tech world with his skills. Hes made significant contributions at Acquatron, Finket, and now Sweeppea.
					</span>
				</div>
			</div>



			<div className="w-full min-h-screen flex flex-col items-center bg-accent pb-12">

				<span className="text-6xl text-light mt-16 mb-8">
					Experience
				</span>

				{
					descriptions.map((e, i) =>
						<motion.div whileHover={{ scale: 1.01 }} key={i} className="w-3/4 bg-accentLight rounded-full py-5 pl-5 pr-16 flex flex-row gap-5 mt-12 items-center">

							<div className="bg-white shadow-xl rounded-full p-12 mr-12">
								<Image src={e.image} alt="Sweeppea" height={e.size || 100} width={e.size || 100} />
							</div>

							<div className="flex flex-col">
								<span className="text-4xl text-white font-mono">{e.business}</span>
								<span className="text-lg text-slate-400 font-mono">{ e.dates }</span>
								<span className="text-2xl text-white my-5">{e.title}</span>
								<span className="text-lg text-white font-mono">{e.description}</span>
							</div>
						</motion.div>
					)
				}
			</div>


		</div>


	)
};

export default Page;
