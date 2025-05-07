import React from 'react';
import informations from '../data/informations';

const Header = () => {
	const { title, presentation, links } = informations;

	return (
		<header
			id="accueil"
			className="relative pt-32 p-6 m-3 md:pt-30 md:m-5 mt-0 md:mt-0 flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-100 to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-md rounded-b-lg animate-fadeIn"
		>
			<div className="w-full md:w-1/3 flex flex-col items-center animate-fadeIn">
				<img
					src={links.pp}
					alt="Photo de profil"
					className="w-3/4 md:w-2/3 h-3/4 md:h-2/3 rounded-xl border-2 border-gray-200 dark:border-gray-700 shadow-md hover:scale-105 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 cursor-pointer"
					onClick={() => window.open(links.pp, '_blank')}
				/>
				<a
					href={links.cv}
					target="_blank"
					rel="noopener noreferrer"
					className="w-3/4 md:w-2/3 mt-2 bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
						/>
					</svg>
					Télécharger CV
				</a>
			</div>

			<div className="header-text w-full md:w-2/3 text-center md:text-left mt-6 md:mt-0 px-4 md:px-8 animate-fadeIn">
				<h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
					{title}
				</h1>
				<p className="text-gray-600 dark:text-gray-200 mt-4 md:mt-8 text-sm md:text-lg leading-relaxed whitespace-pre-line">
					{presentation}
				</p>
				<p className="font-bold mt-4 md:mt-8 text-sm md:text-lg leading-relaxed text-blue-600 dark:text-blue-400">
					Pour en savoir plus, je vous invite à découvrir ce Portfolio ! ;)
				</p>
			</div>
		</header>
	);
};

export default Header;
