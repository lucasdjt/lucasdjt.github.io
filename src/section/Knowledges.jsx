import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import skillsData from '../data/skills';

const KnowledgesSection = () => {
	const knowledges = skillsData.knowledges;
	const [flippedIndex, setFlippedIndex] = useState(null);
	const [isOpen, setIsOpen] = useState(true);

	const toggleFlip = index => {
		setFlippedIndex(flippedIndex === index ? null : index);
	};

	return (
		<section
			id="section-knowledges"
			className="py-16 px-4 md:px-8 relative bg-gradient-to-r from-blue-50 to-gray-50 dark:from-gray-800 dark:to-gray-900"
		>
			<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-gray-300 dark:from-blue-400 dark:to-gray-600" />

			<div className="flex justify-between items-center mb-12 animate-slideIn">
				<h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
					Savoir-être
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
						key="knowledges-content"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className="grid grid-cols-2 md:grid-cols-3 gap-6"
					>
						{knowledges.map((item, index) => (
							<div
								key={index}
								className={`flip-card ${flippedIndex === index ? 'flipped' : ''}`}
								onClick={() => toggleFlip(index)}
							>
								<div className="flip-card-inner">
									<div className="flip-card-front">
										<button className="flip-btn font-semibold text-lg">
											{item.title}
										</button>
									</div>
									<div className="flip-card-back">
										<p className="text-white text-sm leading-relaxed">
											{item.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</motion.div>
				)}
			</AnimatePresence>

			<div className="relative bottom-0 left-0 mt-6 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-200 dark:from-gray-600 dark:to-gray-400" />
		</section>
	);
};

export default KnowledgesSection;
