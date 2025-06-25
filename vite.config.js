import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
	plugins: [react()],
	optimizeDeps: {
		include: ['react', 'react-dom'],
	},
	build: {
		chunkSizeWarningLimit: 1000,
		commonjsOptions: {
			transformMixedEsModules: true,
		},
	},
})
