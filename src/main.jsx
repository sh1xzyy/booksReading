import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import AppProviders from './contexts/AppProviders.jsx'
import App from './components/App/App.jsx'
import { Toaster } from 'react-hot-toast'
import { store } from './redux/store.js'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<AppProviders>
			<BrowserRouter>
				<StrictMode>
					<App />
					<Toaster />
				</StrictMode>
			</BrowserRouter>
		</AppProviders>
	</Provider>
)
