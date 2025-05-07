import React from 'react';
import projectsData from '../data/projects';

const ProjectPopup = ({ project, onClose, onSwitch }) => {
	if (!project) return null;

	const stateLabel = projectsData.stateTitle.find(
		st => st.value === project.state
	)?.title;

	const experience = projectsData.experiencesTitle.find(
		ex => ex.value === project.experiences
	);

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
			<div className="bg-white dark:bg-gray-900 p-6 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-lg border border-gray-300 dark:border-gray-700 animate-fadeIn">
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-xl font-bold text-gray-600 dark:text-gray-300 hover:text-red-500"
				>
					×
				</button>

				<h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
					{project.title}
				</h2>
				<p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
					{project.date}
				</p>

				<div className="flex flex-wrap gap-2 mb-4">
					{stateLabel && (
						<span className="px-2 py-1 text-xs bg-blue-500 text-white rounded-full">
							{stateLabel}
						</span>
					)}
					{experience && (
						<span
							onClick={() =>
								onSwitch && onSwitch('experience', experience.value)
							}
							className="px-2 py-1 text-xs bg-green-500 text-white rounded-full cursor-pointer hover:underline"
						>
							{experience.title}
						</span>
					)}
				</div>

				<p className="text-gray-700 dark:text-gray-300 mb-4 whitespace-pre-line">
					{project.description}
				</p>

				{project.skills.length > 0 && (
					<div className="mb-4">
						<h3 className="font-semibold mb-2 text-gray-800 dark:text-white">
							Compétences utilisées :
						</h3>
						<div className="flex flex-wrap gap-2">
							{project.skills.map(skill => (
								<span
									key={skill.anchor}
									onClick={() => onSwitch && onSwitch('skill', skill.anchor)}
									className="text-sm bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full hover:underline cursor-pointer"
								>
									{skill.title}
								</span>
							))}
						</div>
					</div>
				)}

				{project.screenshots.length > 0 && (
					<div className="mb-4">
						<h3 className="font-semibold mb-2 text-gray-800 dark:text-white">
							Captures d’écran :
						</h3>
						<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
							{project.screenshots.map((src, i) => (
								<img
									key={i}
									src={src}
									alt={`Screenshot ${i + 1}`}
									className="rounded-lg object-cover h-32 w-full"
								/>
							))}
						</div>
					</div>
				)}

				{project.oldVersions.length > 0 && (
					<div className="mb-4">
						<h3 className="font-semibold mb-2 text-gray-800 dark:text-white">
							Versions précédentes :
						</h3>
						<ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
							{project.oldVersions.map((version, i) => (
								<li key={i}>
									<strong>{version.title}</strong> – {version.date}
									<br />
									<span>{version.description}</span>
								</li>
							))}
						</ul>
					</div>
				)}

				<a
					href={project.github}
					target="_blank"
					rel="noreferrer"
					className="inline-flex items-center bg-gray-900 dark:bg-white text-white dark:text-black font-semibold py-2 px-4 rounded-lg hover:scale-105 transition"
				>
					<img
						src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
						alt="GitHub"
						className="w-6 h-6 mr-2"
					/>
					Voir sur GitHub
				</a>
			</div>
		</div>
	);
};

export default ProjectPopup;
