import { createSelector } from '@reduxjs/toolkit'

const selectGoingToReadBooks = state => state.book.goingToRead
const selectCurrentlyReadingBooks = state => state.book.currentlyReading
const selectFinishedReadingBooks = state => state.book.finishedReading

const reversedBooks = books => [...books].reverse()
const sortedSelector = selector => createSelector(selector, reversedBooks)

const selectGoingToReadBooksSorted = sortedSelector(selectGoingToReadBooks)
const selectCurrentlyReadingBooksSorted = sortedSelector(
	selectCurrentlyReadingBooks
)
const selectFinishedReadingBooksSorted = sortedSelector(
	selectFinishedReadingBooks
)

export const selectIsListEmpty = createSelector(
	[
		selectGoingToReadBooks,
		selectCurrentlyReadingBooks,
		selectFinishedReadingBooks,
	],
	(...rest) => {
		return [...rest].flat(1).length === 0
	}
)

export const selectBooks = createSelector(
	[
		selectGoingToReadBooksSorted,
		selectCurrentlyReadingBooksSorted,
		selectFinishedReadingBooksSorted,
	],
	(goingToRead, currentlyReading, finishedReading) => {
		return { goingToRead, currentlyReading, finishedReading }
	}
)
