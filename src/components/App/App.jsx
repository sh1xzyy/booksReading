import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Loader from '../common/Loader/Loader.jsx'
const WelcomePage = lazy(() =>
	import('../../pages/WelcomePage/WelcomePage.jsx')
)
const LibraryPage = lazy(() =>
	import('../../pages/LibraryPage/LibraryPage.jsx')
)
const StatisticsPage = lazy(() =>
	import('../../pages/StatisticsPage/StatisticsPage.jsx')
)
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage.jsx'))
const RegisterPage = lazy(() =>
	import('../../pages/RegisterPage/RegisterPage.jsx')
)
const NotFoundPage = lazy(() =>
	import('../../pages/NotFoundPage/NotFoundPage.jsx')
)

function App() {
	return (
		<>
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path='/' element={<WelcomePage />} />
					<Route path='/library' element={<LibraryPage />} />
					<Route path='/statistics' element={<StatisticsPage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<RegisterPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</Suspense>
		</>
	)
}

export default App
