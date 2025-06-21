import { BookFormModalProvider } from './BookFormModalContext/BookFormModalContext'
import { BookReviewModalProvider } from './BookReviewModalContext/BookReviewModalProvider'
import { ConfirmLogoutModalProvider } from './ConfirmLogoutModalContext/ConfirmLogoutModalProvider'
import { TrainingFormModalProvider } from './TrainingFormModalContext/TrainingFormModalProvider'
import { UserProgressProvider } from './UserProgressContext/UserProgressProvider'
import { WelcomeGuideModalProvider } from './WelcomeGuideModalContext/WelcomeGuideModalProvider'
import { WindowWidthProvider } from './WindowWidthContext/WindowWidthProvider'

const AppProviders = ({ children }) => {
	return (
		<UserProgressProvider>
			<TrainingFormModalProvider>
				<WelcomeGuideModalProvider>
					<BookReviewModalProvider>
						<BookFormModalProvider>
							<ConfirmLogoutModalProvider>
								<WindowWidthProvider>{children}</WindowWidthProvider>
							</ConfirmLogoutModalProvider>
						</BookFormModalProvider>
					</BookReviewModalProvider>
				</WelcomeGuideModalProvider>
			</TrainingFormModalProvider>
		</UserProgressProvider>
	)
}

export default AppProviders
