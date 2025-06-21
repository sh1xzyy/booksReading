import { DEFAULT_PROGRESS } from './constants'

export const checkboxToggle = (checkedItemList, isChecked, _id) => {
	const prev =
		JSON.parse(localStorage.getItem('userProgress')) || DEFAULT_PROGRESS

	let updatedList

	if (isChecked) {
		updatedList = checkedItemList.includes(_id)
			? checkedItemList
			: [...checkedItemList, _id]
	} else {
		updatedList = checkedItemList.filter(id => id !== _id)
	}

	const updated = { ...prev, checkedItemList: updatedList }

	localStorage.setItem('userProgress', JSON.stringify(updated))

	return { updated }
}
