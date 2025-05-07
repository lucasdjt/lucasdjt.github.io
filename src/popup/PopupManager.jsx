import React from 'react';
import SkillPopup from './Skills_PP';
import ProjectPopup from './Projects_PP';
import ExperiencesPopup from './Experiences_PP';
import skillsData from '../data/skills';
import projectsData from '../data/projects';
import experiences from '../data/experiences';

const PopupManager = ({ popup, onClose, onSwitch }) => {
	if (!popup?.type || !popup?.id) return null;

	let content = null;

	switch (popup.type) {
		case 'skill': {
			const skill = skillsData.techStack.find(s => s.id === popup.id);
			if (skill) {
				content = (
					<SkillPopup skill={skill} onClose={onClose} onSwitch={onSwitch} />
				);
			}
			break;
		}
		case 'project': {
			const project = projectsData.projects.find(p => p.id === popup.id);
			if (project) {
				content = (
					<ProjectPopup
						project={project}
						onClose={onClose}
						onSwitch={onSwitch}
					/>
				);
			}
			break;
		}
		case 'experience': {
			const exp = experiences.find(e => e.id === popup.id);
			if (exp) {
				content = (
					<ExperiencesPopup
						experience={exp}
						onClose={onClose}
						onSwitch={onSwitch}
					/>
				);
			}
			break;
		}
		default:
			return null;
	}

	return content;
};

export default PopupManager;
