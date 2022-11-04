import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useState } from "react";
import tw from "tailwind-styled-components";

const HeroTextContainer = tw.div<any>`flex flex-col gap-4 items-start justify-center w-1/2 h-[70%] pl-4 snap-mandatory snap-y
`;

const HeroImageContainer = tw.div<any>`flex flex-col items-center justify-center w-1/2 aspect-square 
`;

const Heading = tw.h1<any>`font-bold text-white
`;

const Content = () => {
	const [projectsLength, setProjectsLength] = useState(6);

	return (
		<Parallax pages={2 + projectsLength} style={{ top: "0", left: "0" }} className="bg-slate-400">
			<ParallaxLayer
				factor={1}
				offset={0}
				speed={1.5}
				className="flex bg-gradient-to-b from-gray-800 to bg-slate-400 snap-start flex-row items-center justify-start"
			></ParallaxLayer>

			<ParallaxLayer offset={0} speed={-1} className="flex flex-row items-center justify-start">
				<HeroTextContainer>
					<Heading className="text-6xl pb-4">Hey! I am Puneet</Heading>
					<Heading className="text-4xl">Tech Enthusiast</Heading>
					<Heading className="text-4xl">Love building things</Heading>
				</HeroTextContainer>
			</ParallaxLayer>

			<ParallaxLayer offset={0} speed={0.4} className="flex flex-row items-center justify-end snap-start">
				<HeroImageContainer>
					<div
						className="w-[90%] flex items-center justify-center aspect-square 
					rounded-full border-2 border-white bg-black"
					>
						image
					</div>
				</HeroImageContainer>
			</ParallaxLayer>

			<ParallaxLayer
				offset={1}
				sticky={{
					start: 1,
					end: projectsLength,
				}}
				className="flex flex-col md:flex-row items-center justify-start w-full"
			>
				<div className="flex md:h-full h-[80%] w-full md:w-2/4">taglines</div>
			</ParallaxLayer>

			{[...Array(projectsLength)].map((_, i) => (
				<ParallaxLayer
					key={i}
					offset={3}
					sticky={{
						start: 1 + i,
						end: projectsLength,
					}}
					className="flex relative z-30 flex-row items-center justify-end w-full"
				>
					<div className="h-[80%] w-1/2 flex items-center justify-center text-center bg-blue-400">Projects</div>
				</ParallaxLayer>
			))}
			<ParallaxLayer offset={1 + projectsLength} className="flex flex-col items-center justify-center">
				<p>Hero Section</p>
			</ParallaxLayer>
		</Parallax>
	);
};

export default Content;
