import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/** @type {import('vite').UserConfig} */
export default {
	// active le plugin react
	plugins: [tailwindcss(), react()],
};
