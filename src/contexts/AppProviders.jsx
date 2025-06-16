import { WindowWidthProvider } from './WindowWidthContext/WindowWidthContext'

const AppProviders = ({ children }) => {
	return <WindowWidthProvider>{children}</WindowWidthProvider>
}

export default AppProviders
