import React from 'react';

const Footer = () => {
	return (
		<footer className="w-full bg-white dark:bg-black rounded-b-xl z-10 text-center py-6 mt-10 text-gray-800 dark:text-gray-300">
			<p>
				&copy; 2025 Lucas - Tous droits réservés. (
				<a href="/LICENSE.md" className="text-blue-400 hover:underline">
					Voir la licence
				</a>
				)
			</p>
			<p>
				Besoin d'un projet ?{' '}
				<a
					href="mailto:lucasdjtpro@gmail.com"
					className="text-blue-400 hover:underline"
				>
					Contactez-moi !
				</a>
			</p>
			<p>
				Code source :{' '}
				<a
					href="https://github.com/lucasdjt/lucasdjt.github.io"
					className="text-blue-400 hover:underline"
				>
					GitHub
				</a>
			</p>
		</footer>
	);
};

export default Footer;
