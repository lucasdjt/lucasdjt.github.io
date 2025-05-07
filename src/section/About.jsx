import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import hobbies from '../data/hobbies';
import informations from '../data/informations';

const AboutMeSection = () => {
	const [activeIndex, setActiveIndex] = useState(null);
	const [isOpen, setIsOpen] = useState(true);

	const toggleDescription = index => {
		setActiveIndex(prev => (prev === index ? null : index));
	};

	return (
		<section
			id="section-aboutme"
			className="py-16 px-4 md:px-8 relative bg-gradient-to-r from-blue-100 to-gray-100 dark:from-gray-800 dark:to-gray-900"
		>
			<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-gray-300 dark:from-blue-400 dark:to-gray-600" />

			<div className="flex justify-between items-center mb-12 animate-slideIn">
				<h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
					Plus d’informations à propos de moi
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
						key="aboutme-content"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
					>
						<div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
							{hobbies.map((hob, index) => (
								<article
									key={index}
									onClick={() => toggleDescription(index)}
									className="text-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
								>
									<img
										src={hob.image}
										alt={hob.title}
										className="w-32 h-32 object-cover rounded-md mx-auto mb-4"
									/>
									<h3 className="text-xl font-semibold text-gray-800 dark:text-white">
										{hob.title}
									</h3>
									{activeIndex === index && (
										<p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
											{hob.description}
										</p>
									)}
								</article>
							))}
						</div>

						<div className="flex flex-col md:flex-row justify-between items-start gap-12">
							<aside className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md w-full md:w-1/2">
								<h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
									Infos personnelles
								</h3>
								<ul className="text-gray-700 dark:text-gray-300 space-y-2">
									<li>
										<strong>Date de naissance :</strong> {informations.birth}
									</li>
									<li>
										<strong>Permis :</strong> Permis{' '}
										{informations.driverLicense}
									</li>
									<li>
										<strong>Localisation :</strong> {informations.location}
									</li>
									<li>
										<strong>Mail universitaire :</strong>{' '}
										{informations.links.universityEmail}
									</li>
								</ul>
							</aside>

							<div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md w-full md:w-1/2">
								<h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
									Me contacter
								</h3>
								<ul className="space-y-4">
									{['linkedIn', 'github', 'email'].map(type => (
										<li key={type} className="flex items-center gap-4">
											<img
												src={informations.links[`${type}Icon`]}
												alt={type}
												className="w-6 h-6"
											/>
											<a
												href={
													type === 'email'
														? `mailto:${informations.links.email}`
														: informations.links[type]
												}
												className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
											>
												{type === 'email'
													? 'Email Professionnel'
													: type.charAt(0).toUpperCase() + type.slice(1)}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			<div className="relative bottom-0 left-0 mt-6 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-200 dark:from-gray-600 dark:to-gray-400" />
		</section>
	);
};

export default AboutMeSection;
