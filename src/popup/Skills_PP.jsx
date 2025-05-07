import React from 'react';
import skillsData from '../data/skills';
import projectsData from '../data/projects';

const SkillPopup = ({ skill, onClose, onSwitch }) => {
	if (!skill) return null;

	const experienceLabel = skillsData.categName?.[skill.experiences] || 'Autres';
	const relatedProjects = projectsData.projects.filter(p =>
		skill.projects?.includes(p.id)
	);

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
			<div className="relative bg-white dark:bg-gray-800 max-w-2xl w-full p-6 rounded-xl shadow-lg overflow-y-auto max-h-[90vh]">
				<button
					onClick={onClose}
					className="absolute top-3 right-4 text-gray-600 dark:text-gray-300 text-xl hover:text-red-500 transition"
					aria-label="Fermer"
				>
					&times;
				</button>

				<h2 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">
					{skill.title}
				</h2>

				<p className="text-gray-700 dark:text-gray-200 whitespace-pre-line mb-4">
					{skill.description}
				</p>

				{experienceLabel && (
					<div className="mb-4">
						<span className="font-semibold text-sm text-gray-600 dark:text-gray-400">
							Expérience associée :{' '}
						</span>
						<span
							className="text-sm text-blue-500 hover:underline cursor-pointer"
							onClick={() => onSwitch?.('experience', skill.experiences)}
						>
							{experienceLabel}
						</span>
					</div>
				)}

				{relatedProjects.length > 0 && (
					<div>
						<h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
							Projets liés :
						</h3>
						<ul className="space-y-2">
							{relatedProjects.map(project => (
								<li
									key={project.id}
									className="border border-gray-300 dark:border-gray-600 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition cursor-pointer"
									onClick={() => {
										if (onSwitch) onSwitch('project', project.id);
									}}
								>
									<h4 className="font-semibold text-sm">{project.title}</h4>
									<p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
										{project.description}
									</p>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default SkillPopup;
