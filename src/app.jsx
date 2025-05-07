import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogsSection from './section/Blogs';
import SkillsSection from './section/Skills';
import KnowledgesSection from './section/Knowledges';
import ExperiencesSection from './section/Experiences';
import ProjectsSection from './section/Projects';
import AboutSection from './section/About';
import PopupManager from './popup/PopupManager';

function App() {
	const [popup, setPopup] = useState(null);

	const handleClosePopup = () => setPopup(null);

	const handleSwitchPopup = (type, id) => setPopup({ type, id });

	return (
		<>
			<Navbar />
			<Header />
			<main className="bg-gradient-to-r from-blue-100 to-gray-100 dark:from-gray-800 dark:to-gray-900">
				<BlogsSection onPopupOpen={handleSwitchPopup} />
				<SkillsSection onPopupOpen={handleSwitchPopup} />
				<KnowledgesSection />
				<ExperiencesSection onPopupOpen={handleSwitchPopup} />
				<ProjectsSection onPopupOpen={handleSwitchPopup} />
				<AboutSection />
			</main>
			<Footer />
			<PopupManager
				popup={popup}
				onClose={handleClosePopup}
				onSwitch={handleSwitchPopup}
			/>
		</>
	);
}

export default App;
