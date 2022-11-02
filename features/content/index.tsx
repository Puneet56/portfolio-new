import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const projectsLength = 6;

const Content = () => {
	return (
		<Parallax pages={2 + projectsLength} style={{ top: "0", left: "0" }}>
			<ParallaxLayer offset={0} className="flex flex-col items-center justify-center">
				<p>Hero Section</p>
			</ParallaxLayer>

			<ParallaxLayer
				offset={1}
				sticky={{
					start: 1,
					end: projectsLength,
				}}
				className="flex flex-row items-center justify-start w-full"
			>
				<div className="flex h-full w-2/4">taglines</div>
			</ParallaxLayer>

			{[...Array(projectsLength)].map((_, i) => (
				<ParallaxLayer
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
