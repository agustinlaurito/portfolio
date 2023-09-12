'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { Typewriter, useTypewriter } from "react-simple-typewriter";
import { PiSuitcaseSimpleThin } from 'react-icons/pi';


function Page() {

	const descriptions = [
		{
			business: 'Sweeppea',
			dates: 'Nov. 2022 - Present',
			title: 'Software Engineer',
			description: 'Development of multiple applications for company management using Node.js and MongoDB.'
		},
		{
			business: 'Finket',
			dates: 'Jan 2022 - March 2023',
			title: 'Software Engineer',
			description: 'Development of financial solutions using ReactJS, Express and AWS as core technologies.'
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
						<Typewriter words={['Backend Developer', 'Frontend Developer', 'Pilot', 'Software Engineer']} loop />
					</div>
				</div>
				<div className="flex w-1/2">
					<Image src="/images/abstract.jpg" width={700} height={700} alt="Profile" />
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
						Welcome to the portfolio of Agustin Laurito, a software developer who’s been dazzling the tech world with his skills. He's made significant contributions at Acquatron, Finket, and now Sweeppea.
					</span>
				</div>
			</div>



			<div className="w-full min-h-screen flex flex-col items-center bg-accent pb-12">

				<span className="text-6xl text-light mt-16 mb-8">
					Experience
				</span>

				{
					descriptions.map((e, i) =>
						<div key={i} className="w-3/4 bg-accentLight rounded-full py-5 pl-5 pr-16 flex flex-row gap-5 mt-12 items-center">

							<div className="bg-slate-300 rounded-full p-5">
								<PiSuitcaseSimpleThin color="#0D0D0D" size={80} />
							</div>

							<div className="bg-white rounded-full flex justify-center items-center w-1" />

							<div className="flex flex-col">
								<span className="text-4xl text-white font-mono">{e.business}</span>
								<span className="text-lg text-slate-400 font-mono">{ e.dates }</span>
								<span className="text-xl text-white my-5">{e.title}</span>
								<span className="text-sm text-white font-mono">{e.description}</span>
							</div>
						</div>
					)
				}
			</div>


		</div>


	)
};

export default Page;
