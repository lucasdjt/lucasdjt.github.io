import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import experiences from '../data/experiences';

const ExperiencesSection = ({ onPopupOpen }) => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<section
			id="section-experiences"
			className="py-16 px-4 md:px-8 relative bg-gradient-to-r from-blue-50 to-gray-50 dark:from-gray-800 dark:to-gray-900"
		>
			<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-gray-300 dark:from-blue-400 dark:to-gray-600" />

			<div className="flex justify-between items-center mb-12 animate-slideIn">
				<h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
					Expériences
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
						key="experiences-content"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className="space-y-6"
					>
						{experiences.map((exp, index) => (
							<article
								key={index}
								className="article-experiences flex items-center justify-between gap-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700 animate-fadeIn"
							>
								<img
									src={exp.logo || '/images/pp.jpg'}
									alt={`Logo de ${exp.title}`}
									className="w-12 h-12 rounded-full object-contain"
								/>

								<div className="flex-1">
									<h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
										{exp.title}
									</h3>
									{exp.subtitle && (
										<p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
											{exp.subtitle}
										</p>
									)}
									<p className="text-gray-500 dark:text-gray-400 text-sm">
										{exp.date}
									</p>
								</div>

								<button
									onClick={() => onPopupOpen('experience', exp.id)}
									className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 hover:scale-105 transition-all duration-200"
								>
									En savoir +
								</button>
							</article>
						))}
					</motion.div>
				)}
			</AnimatePresence>

			<div className="relative bottom-0 left-0 mt-6 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-200 dark:from-gray-600 dark:to-gray-400" />
		</section>
	);
};

export default ExperiencesSection;
