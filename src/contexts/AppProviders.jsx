import { ConfirmLogoutModalProvider } from './ConfirmLogoutModalContext/ConfirmLogoutModalProvider'
import { WindowWidthProvider } from './WindowWidthContext/WindowWidthProvider'

const AppProviders = ({ children }) => {
	return (
		<ConfirmLogoutModalProvider>
			<WindowWidthProvider>{children}</WindowWidthProvider>
		</ConfirmLogoutModalProvider>
	)
}

export default AppProviders
