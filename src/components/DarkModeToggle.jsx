import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const darkPref = localStorage.getItem('theme');
		if (
			darkPref === 'dark' ||
			(!darkPref && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			setIsDark(true);
		}
	}, []);

	const toggleDarkMode = () => {
		const html = document.documentElement;
		const newMode = !isDark;
		setIsDark(newMode);
		html.classList.toggle('dark', newMode);
		localStorage.setItem('theme', newMode ? 'dark' : 'light');
	};

	return (
		<button
			onClick={toggleDarkMode}
			className="ml-4 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
			aria-label="Toggle dark mode"
		>
			{isDark ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5 animate-spin-slow"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
					></path>
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5 animate-spin-slow"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
					></path>
				</svg>
			)}
		</button>
	);
};

export default DarkModeToggle;
