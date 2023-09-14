'use client';

import { motion, transform } from "framer-motion";
import Image from "next/image";
import { Typewriter, useTypewriter } from "react-simple-typewriter";
import { PiSuitcaseSimpleThin } from 'react-icons/pi';
import { Canvas } from "@react-three/fiber";
import Blob from "./components/Blob/Blob";
import { GiAirplane } from 'react-icons/gi';
import Square from "./components/Square/Square";
import { useEffect, useState } from "react";

function Page() {

	const [isLarge, setLarge] = useState(false);

	useEffect(() => {

		if (typeof window !== "undefined") {
			const isLargeDevice = window.matchMedia("only screen and (min-width : 1024px)").matches;
			setLarge(isLargeDevice);
		}
	}, []);

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

			{/* First Screen */}
			<div className="w-full h-screen flex flex-col justify-evenly lg:flex-row items-center">
				<div className="flex w-full lg:w-1/2 flex-col items-center">
					<div className="w-full text-background text-6xl lg:text-8xl text-center">
						Agustin Laurito
					</div>
					<div className="text-2xl lg:text-6xl font-mono lg:min-h-[3.75rem]">
						<Typewriter words={['Software Engineer', 'Helping Startups to Grow']} loop />
					</div>
				</div>
				{/* LG Blob */}
				<div className="w-full lg:w-1/2 h-1/2 lg:h-3/4">
					<Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
						<Blob scale={1} />
					</Canvas>
				</div>
			</div>

			{/* Black Screen */}
			<div className="w-full bg-black flex flex-col lg:flex-row items-center py-12 lg:py-28">
				<div className="flex lg:w-1/2 flex-col text-center  items-center">
					<span className="text-white text-4xl lg:text-6xl">
						Turning Ideas into <Typewriter words={['Reality', 'Code', 'Profit']} delaySpeed={2500} loop />
					</span>
				</div>
				<div className="flex w-full lg:w-1/2 flex-col items-center px-5">
					<span className="text-white text-md font-mono text-justify mt-6 lg:mt-0 lg:text-2xl ">
						With three years of hands-on experience in the dynamic startup landscape, I have honed my skills in transforming innovative ideas into functional software solutions. My journey has been defined by collaborating closely with startups, understanding their unique needs, and delivering results-driven digital products. I thrive on the challenge of turning visionary concepts into tangible, market-ready assets, contributing to the growth and success of emerging ventures
					</span>
				</div>
			</div>


			<div className="w-full h-screen flex flex-col items-center bg-accent pb-12">

				<span className="text-6xl text-lightGray mt-8 lg:mt-16 mb-8">
					Experience
				</span>

				<div className="flex flex-col h-full justify-evenly items-center px-6">
					{
						descriptions.map((e, i) =>
							<div key={i} className="w-full px-4 lg:w-3/4 bg-accentLight rounded-3xl lg:rounded-full py-2 lg:py-4 lg:pl-5 lg:pr-16 flex flex-row gap-2 lg:gap-5 mt-2 lg:mt-12 items-center">

								<div className="lg:bg-white lg:shadow-xl rounded-full p-2 mr-1 lg:p-8 lg:mr-6">
									<Image src={e.image} alt="Sweeppea" height={e.size || 100} width={e.size || 100} />
								</div>

								<div className="flex flex-col">
									<span className="text-md lg:text-4xl text-white font-mono">{e.business}</span>
									<span className="text-xs lg:text-lg text-slate-400 font-mono">{e.dates}</span>
									<span className="text-sm lg:text-2xl text-white my-1 lg:my-2">{e.title}</span>
									<span className="text-xs text-justify lg:text-lg text-white font-mono">{e.description}</span>
								</div>
							</div>
						)
					}
				</div>

			</div>

			<div className="w-full min-h-screen lg:h-screen flex flex-col items-center bg-accent pb-12">
				<span className="text-6xl text-lightGray my-8">
					Own Apps
				</span>

				<div className="flex flex-col lg:flex-row lg:justify-evenly w-full">

					<div className="flex flex-col w-fit items-center lg:items-start my-5 lg:my-0">
						<Image src="/images/mockup1.png" alt="Logbook" width={isLarge ? 450 : 200} height={isLarge ? 450 : 200} className="rounded-[15%]" />
						<span className="ml-3 text-4xl lg:text-6xl my-4 lg:my-8 text-lightGray ">
							A Volar: App
						</span>
						<span className="ml-3 w-full px-16 lg:px-0 lg:max-w-[450px] text-justify text-md lg:text-lg font-bold text-lightGray font-mono">A Volar App is a specialized application tailored for pilots, offering real-time weather updates for all airports across Argentina, along with essential details including runway information, communication frequencies, and regulatory norms.						</span>
					</div>

					<div className="flex flex-col w-fit items-center lg:items-start my-5 lg:my-0">
						<Image src="/images/avolarapp.png" alt="Logbook" width={isLarge ? 450 : 200} height={isLarge ? 450 : 200} className="rounded-[15%]" />
						<span className="ml-3 text-4xl lg:text-6xl my-4 lg:my-8 text-lightGray ">
							A Volar: Logbook
						</span>
						<span className="ml-3 w-full px-16 lg:px-0 lg:max-w-[450px] text-justify text-md lg:text-lg font-bold text-lightGray font-mono">A Volar App is a specialized application tailored for pilots, offering real-time weather updates for all airports across Argentina, along with essential details including runway information, communication frequencies, and regulatory norms.						</span>
					</div>

				</div>

			</div>

			<div className="w-full min-h-screen lg:h-screen flex flex-col items-center bg-accent pb-12 justify-evenly">

				<span className="text-6xl text-lightGray ">
					About Me
				</span>

				<div className="flex flex-col lg:flex-row justify-center lg:items-end items-center">
					<Image src="/images/aboutme.png" alt="About Me" width={isLarge ? 300 : 200} height={isLarge ? 300 : 100} />
					<span className="mx-16 mt-5 lg:mt-0 lg:px-0 lg:max-w-[50%] text-justify text-md lg:text-lg font-bold text-lightGray font-mono">
						I started my career as an electronic technician in an SME in the productive sector at the end of 2020. A few months later I was promoted to purchasing manager, where in parallel to my tasks I developed a screen system in C++ which served to reduce delivery times from two weeks to two days. In March 2022, I started working as a Full Stack developer, specialising in the Back End. In April I launched a pilot oriented application called A Volar App, which has an active user base of 1000 users. I have a deep passion for aviation, which is not only reflected in my role as a pilot but also extends to my career as a software engineer.
					</span>

				</div>

				<span className="text-6xl text-lightGray lg:my-0 my-5 lg:mb-2">
					Gallery
				</span>

				<div className="flex flex-col lg:flex-row justify-evenly items-center gap-5 w-full h-[45%]">
					<Image src="/images/air/2.jpg" alt="About Me" width="0" height="0" sizes="100%" className="rounded-3xl w-3/4 h-auto lg:w-auto lg:h-full" />
					<Image src="/images/air/3.jpg" alt="About Me" width="0" height="0" sizes="100%" className="rounded-3xl w-3/4 h-auto lg:w-auto lg:h-full" />
					<Image src="/images/air/4.jpg" alt="About Me" width="0" height="0" sizes="100%" className="rounded-3xl w-3/4 h-auto lg:w-auto lg:h-full" />
					<Image src="/images/air/5.jpg" alt="About Me" width="0" height="0" sizes="100%" className="rounded-3xl w-3/4 h-auto lg:w-auto lg:h-full" />
				</div>
			</div>


			<div className="w-full h-screen flex flex-col items-center bg-accent lg:pb-12">

				<div className="lg:h-1/2 h-3/4 flex flex-col items-center justify-evenly items-center justify-evenly">

					<span className="text-6xl lg:text-8xl text-lightGray font-bowlby text-center">
						Get in Touch!
					</span>

					<span className="lg:max-w-[55%] lg:px-0 px-4 justify-text text-center text-xl lg:text-4xl text-lightGray">Don&apos;t miss the opportunity to discover what the future holds! Reach out, and let&apos;s work together to bring your ideas to life.</span>

					<motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-accentLight py-4 px-8 lg:py-6 lg:px-12 rounded-xl text-4xl text-white">Contact Me</motion.button>
				</div>

				<div className="h-1/4 lg:h-1/2 w-full flex flex-col justify-evenly items-center overflow-hidden">

					<div className="flex w-full ml-8">
						<spline-viewer loading-anim url="https://prod.spline.design/GPFmPtjGqd2pBiux/scene.splinecode"></spline-viewer>
					</div>
				</div>

				<span className="text-lightGray font-bowlby mb-12 lg:mb-0">© 2023 Agustin Laurito</span>

			</div>



		</div>


	)
};

export default Page;
