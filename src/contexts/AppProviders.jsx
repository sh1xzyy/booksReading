import { BookFormModalProvider } from './BookFormModalContext/BookFormModalContext'
import { BookReviewModalProvider } from './BookReviewModalContext/BookReviewModalProvider'
import { ConfirmLogoutModalProvider } from './ConfirmLogoutModalContext/ConfirmLogoutModalProvider'
import { WelcomeGuideModalProvider } from './WelcomeGuideModalContext/WelcomeGuideModalProvider'
import { WindowWidthProvider } from './WindowWidthContext/WindowWidthProvider'

const AppProviders = ({ children }) => {
	return (
		<WelcomeGuideModalProvider>
			<BookReviewModalProvider>
				<BookFormModalProvider>
					<ConfirmLogoutModalProvider>
						<WindowWidthProvider>{children}</WindowWidthProvider>
					</ConfirmLogoutModalProvider>
				</BookFormModalProvider>
			</BookReviewModalProvider>
		</WelcomeGuideModalProvider>
	)
}

export default AppProviders
