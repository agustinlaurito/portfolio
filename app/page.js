'use client';

import { motion, transform } from "framer-motion";
import Image from "next/image";
import { Typewriter, useTypewriter } from "react-simple-typewriter";
import { PiSuitcaseSimpleThin } from 'react-icons/pi';
import { Canvas } from "@react-three/fiber";
import Blob from "./components/Blob/Blob";
import { GiAirplane } from 'react-icons/gi';
import Square from "./components/Square/Square";

function Page() {

	const descriptions = [
		{
			business: 'Sweeppea',
			dates: 'Nov. 2022 - Present',
			title: 'Software Engineer',
			description: 'Development of multiple applications for company management using Node.js and MongoDB.',
			image: '/images/sweeppea-white.png',
			size: 50
		},
		{
			business: 'Finket',
			dates: 'Jan 2022 - March 2023',
			title: 'Software Engineer',
			description: 'Development of financial solutions using ReactJS, Express and AWS as core technologies.',
			image: '/images/finket.png',
			size: 50
		},
		{
			business: 'Acquatron',
			dates: 'Nov 2021 - Jan 2022',
			title: 'Software Engineer',
			description: 'My main task was the development of customized software solutions for the management of the company. Using C++ and MySQL I designed a comprehensive software for stock management and equipment production. This software not only eliminated the need to keep inventory manually, but also maximized efficiency in defining daily production and order fulfillment.',
			image: '/images/acquatron.png',
			size: 130
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
						<Typewriter words={['Software Engineer', 'Helping Startups to Grow']} loop />
					</div>
				</div>
				<div className="w-1/2 h-3/4">
					<Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
						<Blob scale={1.1} />
					</Canvas>
				</div>
			</div>

			<div className="w-full bg-black flex flex-row items-center py-28">
				<div className="flex w-1/2 flex-col items-center">
					<span className="text-white text-6xl">
						Turning Ideas into <Typewriter words={['Reality', 'Code', 'Profit']} delaySpeed={2500} loop />
					</span>
				</div>
				<div className="flex w-1/2 flex-col items-center px-12">
					<span className="text-white text-2xl font-mono text-justify">
						With three years of hands-on experience in the dynamic startup landscape, I have honed my skills in transforming innovative ideas into functional software solutions. My journey has been defined by collaborating closely with startups, understanding their unique needs, and delivering results-driven digital products. I thrive on the challenge of turning visionary concepts into tangible, market-ready assets, contributing to the growth and success of emerging ventures
					</span>
				</div>
			</div>


			<div className="w-full min-h-screen flex flex-col items-center bg-accent pb-12">

				<span className="text-6xl text-light mt-16 mb-8">
					Experience
				</span>

				{
					descriptions.map((e, i) =>
						<div key={i} className="w-3/4 bg-accentLight rounded-full py-4 pl-5 pr-16 flex flex-row gap-5 mt-12 items-center">

							<div className="bg-white shadow-xl rounded-full p-8 mr-6">
								<Image src={e.image} alt="Sweeppea" height={e.size || 100} width={e.size || 100} />
							</div>

							<div className="flex flex-col">
								<span className="text-2xl text-white font-mono">{e.business}</span>
								<span className="text-md text-slate-400 font-mono">{ e.dates }</span>
								<span className="text-xl text-white my-2">{e.title}</span>
								<span className="text-md text-white font-mono">{e.description}</span>
							</div>
						</div>
					)
				}

				{/* <div className="w-full h-1/4 py-12" >
					<Canvas camera={{ position: [0.0, 0.0, 50.0] }}>
						<Square />
					</Canvas>
				</div> */}

				<span className="text-6xl text-light mt-16 mb-8">
					Own Apps
				</span>

				<div className="flex flex-row justify-evenly w-full">

					<div className="flex flex-col w-fit">
						<Image src="/images/mockup1.png" alt="Logbook" width={450} height={450} className="rounded-[15%] grayscale-[45%]" />
						<span className="text-6xl my-8 text-lightGray ">
							A Volar App
						</span>
						<span className="max-w-[450px] text-justify text-lg font-bold text-white font-mono">A Volar App is a specialized application tailored for pilots, offering real-time weather updates for all airports across Argentina, along with essential details including runway information, communication frequencies, and regulatory norms.						</span>
					</div>

					<div className="flex flex-col w-fit">
						<Image src="/images/avolarapp.png" alt="Logbook" width={450} height={450} className="rounded-[15%]" />
						<span className="text-6xl my-8 text-lightGray ">
							A Volar: Logbook
						</span>
						<span className="max-w-[450px] text-justify text-lg font-bold text-white font-mono">A Volar App is a specialized application tailored for pilots, offering real-time weather updates for all airports across Argentina, along with essential details including runway information, communication frequencies, and regulatory norms.						</span>
					</div>


				</div>

			</div>


		</div>


	)
};

export default Page;
