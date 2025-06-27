export const getBooksLeft = (plannedBooks, checkedItemList) =>
	plannedBooks?.length - checkedItemList?.length
