import { Navigate, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { lazy, Suspense } from 'react'
import {
	selectIsLoggedIn,
	selectIsRefreshing,
} from '../../redux/auth/selectors.js'
import GoogleAuthRedirect from '../../features/auth/GoogleAuthRedirect/GoogleAuthRedirect.jsx'
import { useWindowWidth } from '../../contexts/WindowWidthContext/useWindowWidth.jsx'
import { useGlobalLoader } from '../../hooks/useGlobalLoader/useGlobalLoader.jsx'
import { useRefresh } from '../../features/auth/Refresh/useRefresh.js'
import RestrictedRoutes from '../closedRoutes/RestrictedRoutes.jsx'
import PrivateRoutes from '../closedRoutes/PrivateRoutes.jsx'
import Loader from '../common/Loader/Loader.jsx'
import AppBar from '../header/AppBar/AppBar.jsx'
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
	const isRefreshing = useSelector(selectIsRefreshing)
	const isLoggedIn = useSelector(selectIsLoggedIn)
	const { windowWidth } = useWindowWidth()
	const isLoading = useGlobalLoader()
	useRefresh(isLoggedIn)

	return (
		<>
			{isRefreshing ? null : (
				<>
					{isLoading && <Loader />}
					<AppBar />
					<Suspense fallback={<Loader />}>
						<Routes>
							<Route path='/google-auth' element={<GoogleAuthRedirect />} />
							<Route
								path='/'
								element={
									!isLoggedIn && windowWidth < 768 ? (
										<WelcomePage />
									) : (
										<Navigate to='/register' />
									)
								}
							/>
							<Route
								path='/library'
								element={
									<PrivateRoutes redirectTo='/login'>
										<LibraryPage />
									</PrivateRoutes>
								}
							/>
							<Route
								path='/statistics'
								element={
									<PrivateRoutes redirectTo='/login'>
										<StatisticsPage />
									</PrivateRoutes>
								}
							/>
							<Route
								path='/login'
								element={
									<RestrictedRoutes redirectTo='/library'>
										<LoginPage />
									</RestrictedRoutes>
								}
							/>
							<Route
								path='/register'
								element={
									<RestrictedRoutes redirectTo='/library'>
										<RegisterPage />
									</RestrictedRoutes>
								}
							/>
							<Route path='*' element={<NotFoundPage />} />
						</Routes>
					</Suspense>
				</>
			)}
		</>
	)
}

export default App
