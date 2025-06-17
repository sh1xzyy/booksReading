import { BookFormModalProvider } from './BookFormModalContext/BookFormModalContext'
import { ConfirmLogoutModalProvider } from './ConfirmLogoutModalContext/ConfirmLogoutModalProvider'
import { WindowWidthProvider } from './WindowWidthContext/WindowWidthProvider'

const AppProviders = ({ children }) => {
	return (
		<BookFormModalProvider>
			<ConfirmLogoutModalProvider>
				<WindowWidthProvider>{children}</WindowWidthProvider>
			</ConfirmLogoutModalProvider>
		</BookFormModalProvider>
	)
}

export default AppProviders
