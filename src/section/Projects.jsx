import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import projectsData from '../data/projects';

const ProjectsSection = ({ onPopupOpen }) => {
	const [isOpen, setIsOpen] = useState(true);
	const projects = projectsData.projects;

	return (
		<section
			id="section-projects"
			className="py-16 px-4 md:px-8 relative bg-gradient-to-r from-blue-50 to-gray-50 dark:from-gray-800 dark:to-gray-900"
		>
			<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-gray-300 dark:from-blue-400 dark:to-gray-600" />

			<div className="flex justify-between items-center mb-12 animate-slideIn">
				<h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
					Projets
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
						key="projects-content"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8"
					>
						{projects.map((project, index) => (
							<article
								id={`project-${project.id}`}
								key={index}
								className="project-card bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transform hover:scale-105 transition-all duration-300 animate-fadeIn"
							>
								<div className="relative">
									<img
										src={project.screenshots[0]}
										alt={`${project.title} Logo`}
										className="w-full h-40 object-contain bg-gray-100 dark:bg-gray-900 p-4"
									/>
									<span className="absolute top-2 right-2 px-2 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full capitalize">
										{projectsData.stateTitle.find(
											st => st.value === project.state
										)?.title || project.state}
									</span>
									<span className="absolute top-2 left-2 px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full capitalize">
										{projectsData.experiencesTitle.find(
											e => e.value === project.experiences
										)?.title || project.experiences}
									</span>
								</div>

								<div className="p-4 flex flex-col justify-between h-[320px]">
									<div>
										<div className="flex justify-between items-center mb-2">
											<h3 className="text-lg font-semibold text-gray-800 dark:text-white">
												{project.title}
											</h3>
											<span className="text-sm text-gray-500 dark:text-gray-400">
												{project.date}
											</span>
										</div>

										<div className="mb-2">
											<span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
												{project.skills.map(skill => skill.title).join(', ')}
											</span>
										</div>

										<p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
											{project.description}
										</p>
									</div>

									<div className="flex justify-between items-center mt-auto">
										<a
											href={project.github}
											target="_blank"
											rel="noreferrer"
											className="flex items-center gap-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
										>
											<img
												src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
												alt="GitHub"
												className="w-6 h-6"
											/>
											<span className="text-sm font-semibold">GitHub</span>
										</a>

										<button
											onClick={() => onPopupOpen('project', project.id)}
											className="px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 hover:scale-105 transition-all duration-200"
										>
											En savoir +
										</button>
									</div>
								</div>
							</article>
						))}
					</motion.div>
				)}
			</AnimatePresence>

			<div className="relative bottom-0 left-0 mt-6 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-200 dark:from-gray-600 dark:to-gray-400" />
		</section>
	);
};

export default ProjectsSection;
