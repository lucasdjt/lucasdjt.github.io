import React, { useEffect, useState } from 'react';
import DarkModeToggle from './DarkModeToggle';
import informations from '../data/informations';

const Navbar = () => {
	const [activeSection, setActiveSection] = useState('');
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleObserver = entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id);
				}
			});
		};

		const observer = new IntersectionObserver(handleObserver, {
			root: null,
			rootMargin: '0px',
			threshold: 0.15,
		});

		informations.nav.forEach(section => {
			const el = document.getElementById(section.id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<nav className="fixed w-full bg-white dark:bg-black flex rounded-b-xl z-20 justify-between px-4 py-2 items-center shadow-sm">
			<ul className="hidden lg:flex flex-wrap justify-center space-x-1 w-full relative shadow-sm overflow-hidden">
				{informations.nav.map((item, index) => {
					const isActive = activeSection === item.id;

					return (
						<li
							key={index}
							className="nav-item group relative p-2 font-semibold transition"
						>
							<a
								href={`#${item.id}`}
								className="px-2 py-1 flex flex-col items-center"
							>
								<span
									className={`transition-all duration-300 ${
										isActive
											? 'bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'
											: 'text-gray-800 dark:text-white'
									}`}
								>
									{item.name}
								</span>

								<span
									className={`h-[3px] mt-1 w-full max-w-[80%] rounded-full transition-all duration-300 origin-center scale-x-0 group-hover:scale-x-100 ${
										isActive
											? 'bg-gradient-to-r from-blue-500 to-cyan-400 scale-x-100'
											: 'bg-blue-400 dark:bg-blue-300'
									}`}
								/>
							</a>
						</li>
					);
				})}
			</ul>

			<div className="hidden lg:block">
				<DarkModeToggle />
			</div>

			<button
				className="lg:hidden text-gray-800 dark:text-white z-30"
				onClick={() => setIsOpen(!isOpen)}
			>
				<svg
					className="w-8 h-8"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
					/>
				</svg>
			</button>

			{isOpen && (
				<div className="fixed inset-0 bg-white dark:bg-gray-900 flex flex-col items-center justify-center gap-6 z-20 transition-all duration-300">
					{informations.nav.map((item, index) => (
						<a
							key={index}
							href={`#${item.id}`}
							onClick={() => setIsOpen(false)}
							className={`text-xl font-semibold transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${
								activeSection === item.id
									? 'text-blue-600 dark:text-blue-400'
									: 'text-gray-800 dark:text-white'
							}`}
						>
							{item.name}
						</a>
					))}

					<DarkModeToggle />

					<button
						onClick={() => setIsOpen(false)}
						className="mt-6 text-sm text-gray-500 dark:text-gray-300 hover:underline"
					>
						Fermer
					</button>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
