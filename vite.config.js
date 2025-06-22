import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
	plugins: [react()],
	build: {
		chunkSizeWarningLimit: 1000, // увеличим лимит с 500 до 1000 кб

		rollupOptions: {
			output: {
				manualChunks(id) {
					// Разделяем зависимости из node_modules
					if (id.includes('node_modules')) {
						if (id.includes('react')) return 'vendor-react'
						if (id.includes('lodash')) return 'vendor-lodash'
						return 'vendor' // все остальные библиотеки
					}
				},
			},
		},
	},
})
