import { useWindowWidth } from '../../../../../contexts/WindowWidthContext/useWindowWidth'
import s from './FinishedHeaderList.module.css'

const FinishedHeaderList = () => {
	const { windowWidth } = useWindowWidth()
	return (
		<>
			<li className={s.finishedHeaderItem}>Назва книги</li>
			<li className={s.finishedHeaderItem}>Автор</li>
			<li className={s.finishedHeaderItem}>Рік</li>
			<li className={s.finishedHeaderItem}>Стор</li>
			<li className={s.finishedHeaderItem}>
				{windowWidth < 1268 ? 'Рейтинг' : 'Рейтинг книги'}
			</li>
		</>
	)
}

export default FinishedHeaderList
