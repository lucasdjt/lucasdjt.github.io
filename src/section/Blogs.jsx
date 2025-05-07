import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import blogs from '../data/blogs';

const BlogsSection = ({ onPopupOpen }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);
	const [isOpen, setIsOpen] = useState(true);

	const handlePrev = () => {
		setDirection(-1);
		setCurrentIndex(prev => (prev === 0 ? blogs.length - 1 : prev - 1));
	};

	const handleNext = () => {
		setDirection(1);
		setCurrentIndex(prev => (prev === blogs.length - 1 ? 0 : prev + 1));
	};

	const currentBlog = blogs[currentIndex];

	const slideVariants = {
		initial: direction => ({
			x: direction > 0 ? 300 : -300,
			opacity: 0,
		}),
		animate: {
			x: 0,
			opacity: 1,
			transition: { duration: 0.5 },
		},
		exit: direction => ({
			x: direction > 0 ? -300 : 300,
			opacity: 0,
			transition: { duration: 0.3 },
		}),
	};

	return (
		<section id="section-blogs" className="py-16 px-4 md:px-8 relative">
			<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-gray-300 dark:from-blue-400 dark:to-gray-600" />

			<div className="flex justify-between items-center mb-12 animate-slideIn">
				<h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
					Actualités
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
						key="blogs-content"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
					>
						<div className="relative flex items-center justify-center min-h-[380px]">
							<button
								onClick={handlePrev}
								className="text-blue-500 dark:text-white hover:scale-125 transition p-2"
								aria-label="Précédent"
							>
								<svg
									className="h-8 w-8"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M15 19l-7-7 7-7"
									/>
								</svg>
							</button>

							<div className="mx-4 flex-1 max-w-[calc(100%-5rem)] min-h-[380px]">
								<AnimatePresence custom={direction} mode="wait">
									<motion.article
										key={currentBlog.id}
										variants={slideVariants}
										initial="initial"
										animate="animate"
										exit="exit"
										custom={direction}
										className="w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 dark:border-gray-700 flex flex-col justify-between min-h-[350px]"
									>
										<div>
											<span className="text-sm text-gray-500 dark:text-gray-400">
												Post du {currentBlog.date}
											</span>
											<h3 className="text-xl md:text-2xl font-semibold mt-2 text-gray-900 dark:text-gray-100">
												{currentBlog.title}
											</h3>

											{currentBlog.img && (
												<img
													src={currentBlog.img}
													alt={currentBlog.title}
													className="w-full h-40 object-contain bg-white dark:bg-gray-900 my-4 rounded-md border border-gray-200 dark:border-gray-700"
												/>
											)}

											<p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
												{currentBlog.description}
											</p>
										</div>

										<div className="mt-4 flex justify-end">
											{currentBlog.href?.startsWith('/') ? (
												<a
													href={currentBlog.href}
													target="_blank"
													rel="noreferrer"
													className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-2 px-4 rounded-md shadow hover:shadow-lg hover:scale-105 transition-all duration-200"
												>
													<span>{currentBlog.button}</span>
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
															d="M9 5l7 7-7 7"
														/>
													</svg>
												</a>
											) : (
												<button
													onClick={() =>
														onPopupOpen('project', currentBlog.href)
													}
													className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-2 px-4 rounded-md shadow hover:shadow-lg hover:scale-105 transition-all duration-200"
												>
													<span>{currentBlog.button}</span>
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
															d="M9 5l7 7-7 7"
														/>
													</svg>
												</button>
											)}
										</div>
									</motion.article>
								</AnimatePresence>
							</div>

							<button
								onClick={handleNext}
								className="text-blue-500 dark:text-white hover:scale-125 transition p-2"
								aria-label="Suivant"
							>
								<svg
									className="h-8 w-8"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			<div className="relative bottom-0 left-0 mt-5 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-200 dark:from-gray-600 dark:to-gray-400" />
		</section>
	);
};

export default BlogsSection;
