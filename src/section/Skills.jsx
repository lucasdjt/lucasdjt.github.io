import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import skillsData from '../data/skills';

const SkillsSection = ({ onPopupOpen }) => {
	const [search, setSearch] = useState('');
	const [category, setCategory] = useState('');
	const [isGrid, setIsGrid] = useState(true);
	const [isOpen, setIsOpen] = useState(true);
	const [isScrollable, setIsScrollable] = useState(false);
	const [hasScrolled, setHasScrolled] = useState(false);

	const carouselRef = useRef(null);
	const skills = skillsData.techStack;

	const filteredSkills = skills.filter(skill => {
		const matchesName = skill.title
			.toLowerCase()
			.includes(search.toLowerCase());
		const matchesCategory = category ? skill.categories === category : true;
		return matchesName && matchesCategory;
	});

	useEffect(() => {
		const container = carouselRef.current;
		if (!container) return;

		const onWheel = e => {
			if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
				e.preventDefault();
				container.scrollLeft += e.deltaY;
			}
		};

		container.addEventListener('wheel', onWheel, { passive: false });
		return () => container.removeEventListener('wheel', onWheel);
	}, [isGrid]);

	useEffect(() => {
		const slider = carouselRef.current;
		if (!slider) return;

		let isDown = false;
		let startX, scrollLeft;

		const start = e => {
			isDown = true;
			slider.classList.add('cursor-grabbing');
			startX = e.pageX - slider.offsetLeft;
			scrollLeft = slider.scrollLeft;
		};

		const end = () => {
			isDown = false;
			slider.classList.remove('cursor-grabbing');
		};

		const move = e => {
			if (!isDown) return;
			e.preventDefault();
			const x = e.pageX - slider.offsetLeft;
			const walk = (x - startX) * 2;
			slider.scrollLeft = scrollLeft - walk;
		};

		slider.addEventListener('mousedown', start);
		slider.addEventListener('mouseleave', end);
		slider.addEventListener('mouseup', end);
		slider.addEventListener('mousemove', move);

		return () => {
			slider.removeEventListener('mousedown', start);
			slider.removeEventListener('mouseleave', end);
			slider.removeEventListener('mouseup', end);
			slider.removeEventListener('mousemove', move);
		};
	}, [isGrid]);

	useEffect(() => {
		const el = carouselRef.current;
		if (!el) return;

		const checkScroll = () => {
			setIsScrollable(el.scrollWidth > el.clientWidth);
		};

		checkScroll();
		window.addEventListener('resize', checkScroll);
		return () => window.removeEventListener('resize', checkScroll);
	}, [filteredSkills]);

	useEffect(() => {
		const el = carouselRef.current;
		if (!el) return;

		const onScroll = () => {
			setHasScrolled(el.scrollLeft > 20);
		};

		el.addEventListener('scroll', onScroll);
		return () => el.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<section
			id="section-skills"
			className="py-16 px-4 md:px-8 relative bg-gradient-to-r from-blue-50 to-gray-50 dark:from-gray-800 dark:to-gray-900"
		>
			<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-gray-300 dark:from-blue-400 dark:to-gray-600" />

			<div className="flex justify-between items-center mb-12 animate-slideIn">
				<h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
					Compétences
					<div className="w-24 h-1 bg-blue-500 mt-2 rounded-full" />
				</h2>

				<button
					onClick={() => setIsOpen(prev => !prev)}
					className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline"
				>
					{isOpen ? 'Masquer' : 'Afficher'}
				</button>
			</div>

			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						key="skills-content"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
					>
						<form className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
							<input
								type="text"
								placeholder="Rechercher une compétence"
								value={search}
								onChange={e => setSearch(e.target.value)}
								className="w-full md:w-1/3 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
							/>
							{['dev', 'env'].map(cat => (
								<button
									key={cat}
									type="button"
									onClick={() => setCategory(cat)}
									className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
										category === cat
											? 'bg-blue-600 text-white'
											: 'bg-blue-500 text-white hover:bg-blue-600 hover:scale-105'
									}`}
								>
									{cat === 'dev' ? 'Développement' : 'Environnement'}
								</button>
							))}
							<button
								type="button"
								onClick={() => setCategory('')}
								className="px-4 py-2 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition-all"
							>
								Reset
							</button>
						</form>

						<div className="text-center mb-6">
							<button
								onClick={() => setIsGrid(!isGrid)}
								className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
							>
								{isGrid ? 'Mode Carrousel' : 'Mode Grille'}
							</button>
						</div>

						<div className="mb-6 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-200 dark:from-gray-600 dark:to-gray-400" />

						{isGrid ? (
							<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
								{filteredSkills.map(skill => (
									<article
										onClick={() => {
											onPopupOpen('skill', skill.id);
										}}
										key={skill.id}
										className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all duration-300 cursor-pointer"
									>
										<img
											src={`/images/skills/${skill.id}.png`}
											alt={skill.title}
											className="w-16 h-16 mb-2 object-contain"
										/>
										<h3 className="text-sm md:text-base font-semibold text-gray-800 dark:text-white text-center truncate w-full whitespace-nowrap">
											{skill.title}
										</h3>
									</article>
								))}
							</div>
						) : (
							<div className="relative">
								<div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10">
									<button
										onClick={() =>
											carouselRef.current?.scrollBy({
												left: -300,
												behavior: 'smooth',
											})
										}
										className="bg-white dark:bg-gray-800 text-gray-700 dark:text-white rounded-full p-2 shadow-md hover:text-blue-500 hover:scale-110 transition-all duration-200"
									>
										<svg
											className="w-6 h-6"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M15 19l-7-7 7-7"
											/>
										</svg>
									</button>
								</div>

								<div
									ref={carouselRef}
									className="carousel-container overflow-x-auto scroll-smooth whitespace-nowrap scrollbar-hidden"
								>
									<div className="flex gap-4 w-max">
										{filteredSkills.map((skill, i) => (
											<article
												onClick={() => onPopupOpen('skill', skill.id)}
												key={`${skill.id}-${i}`}
												className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 flex flex-col items-center justify-center w-fit min-w-[12rem] max-w-[16rem] border border-gray-200 dark:border-gray-700 animate-fadeIn hover:scale-105 transition-all duration-300 cursor-pointer"
											>
												<img
													src={`/images/skills/${skill.id}.png`}
													alt={skill.title}
													className="w-16 h-16 mb-2 object-contain object-center"
												/>
												<h3 className="text-sm md:text-base font-semibold text-gray-800 dark:text-white text-center truncate w-full whitespace-nowrap">
													{skill.title}
												</h3>
											</article>
										))}
									</div>
								</div>

								<div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10">
									<button
										onClick={() =>
											carouselRef.current?.scrollBy({
												left: 300,
												behavior: 'smooth',
											})
										}
										className="bg-white dark:bg-gray-800 text-gray-700 dark:text-white rounded-full p-2 shadow-md hover:text-blue-500 hover:scale-110 transition-all duration-200"
									>
										<svg
											className="w-6 h-6"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 5l7 7-7 7"
											/>
										</svg>
									</button>
								</div>

								{isScrollable && hasScrolled && (
									<div className="text-center mt-6">
										<button
											onClick={() =>
												carouselRef.current?.scrollTo({
													left: 0,
													behavior: 'smooth',
												})
											}
											className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
										>
											Revenir au début
										</button>
									</div>
								)}
							</div>
						)}
					</motion.div>
				)}
			</AnimatePresence>

			<div className="relative bottom-0 left-0 mt-6 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-200 dark:from-gray-600 dark:to-gray-400" />
		</section>
	);
};

export default SkillsSection;
