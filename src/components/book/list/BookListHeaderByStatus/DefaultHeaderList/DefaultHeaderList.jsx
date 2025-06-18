import s from './DefaultHeaderList.module.css'

const DefaultHeaderList = () => {
	return (
		<>
			<li className={s.headerItem}>Назва книги</li>
			<li className={s.headerItem}>Автор</li>
			<li className={s.headerItem}>Рік</li>
			<li className={s.headerItem}>Стор.</li>
		</>
	)
}

export default DefaultHeaderList
