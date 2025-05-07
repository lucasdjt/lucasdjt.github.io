import React from 'react';

const ExperiencesPopup = ({ experience, onClose, onSwitch }) => {
	if (!experience) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
			<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl shadow-lg p-6 w-full max-w-3xl relative animate-fadeIn overflow-y-auto max-h-[90vh]">
				<button
					onClick={onClose}
					className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500 text-xl font-bold"
					aria-label="Fermer"
				>
					×
				</button>

				<div className="flex items-center mb-4">
					<img
						src={experience.logo || '/images/pp.jpg'}
						alt="Logo"
						className="w-12 h-12 mr-4 rounded-full object-contain"
					/>
					<div>
						<h3 className="text-xl font-bold">{experience.title}</h3>
						{experience.subtitle && (
							<p className="text-sm text-gray-600 dark:text-gray-400">
								{experience.subtitle}
							</p>
						)}
						<p className="text-sm text-gray-500 dark:text-gray-400">
							{experience.date}
						</p>
					</div>
				</div>

				<p className="mb-4 leading-relaxed whitespace-pre-line">
					{experience.description}
				</p>

				{experience.techStack?.length > 0 && (
					<div className="mb-4">
						<h4 className="text-lg font-semibold mb-2">
							Compétences associées :
						</h4>
						<ul className="flex flex-wrap gap-2">
							{experience.techStack.map(skill => (
								<li
									key={skill.anchor}
									className="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-white px-3 py-1 rounded-full text-sm cursor-pointer hover:scale-105 transition"
									onClick={() => onSwitch?.('skill', skill.anchor)}
								>
									{skill.title}
								</li>
							))}
						</ul>
					</div>
				)}

				{experience.projects?.length > 0 && (
					<div className="mb-4">
						<h4 className="text-lg font-semibold mb-2">Projets réalisés :</h4>
						<ul className="space-y-2">
							{experience.projects.map(project => (
								<li
									key={project.anchor}
									className="border border-gray-300 dark:border-gray-700 rounded-lg p-3 bg-gray-100 dark:bg-gray-800 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition"
									onClick={() =>
										onSwitch && onSwitch('project', project.anchor)
									}
								>
									<strong>{project.title}</strong>
									<p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
										{project.description}
									</p>
								</li>
							))}
						</ul>
					</div>
				)}

				{experience.link && (
					<div className="mt-6 text-right">
						<a
							href={experience.link}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 dark:text-blue-400 underline font-medium hover:text-blue-800"
						>
							Plus d’informations
						</a>
					</div>
				)}
			</div>
		</div>
	);
};

export default ExperiencesPopup;
