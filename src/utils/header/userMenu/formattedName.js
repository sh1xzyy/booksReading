export const formattedName = (name, isShort = true) => {
	if (!name) return ''

	if (isShort) return name[0].toUpperCase()

	const formatted = name[0].toUpperCase() + name.slice(1)

	return formatted.length >= 30
		? formatted.slice(0, 27).padEnd(30, '...')
		: formatted
}
