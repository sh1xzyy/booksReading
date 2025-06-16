import { WindowWidthProvider } from './WindowWidthContext'

const AppProviders = ({ children }) => {
	return <WindowWidthProvider>{children}</WindowWidthProvider>
}

export default AppProviders
