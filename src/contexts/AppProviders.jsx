import { BookFormModalProvider } from './BookFormModalContext/BookFormModalContext'
import { BookReviewModalProvider } from './BookReviewModalContext/BookReviewModalProvider'
import { ConfirmLogoutModalProvider } from './ConfirmLogoutModalContext/ConfirmLogoutModalProvider'
import { WindowWidthProvider } from './WindowWidthContext/WindowWidthProvider'

const AppProviders = ({ children }) => {
	return (
		<BookReviewModalProvider>
			<BookFormModalProvider>
				<ConfirmLogoutModalProvider>
					<WindowWidthProvider>{children}</WindowWidthProvider>
				</ConfirmLogoutModalProvider>
			</BookFormModalProvider>
		</BookReviewModalProvider>
	)
}

export default AppProviders
