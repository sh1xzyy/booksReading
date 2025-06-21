export const getBooksLeft = (plannedBooks, checkedItemList) =>
	plannedBooks?.length || 0 - checkedItemList?.length || 0
