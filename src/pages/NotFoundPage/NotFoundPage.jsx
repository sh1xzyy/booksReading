import NotFound from '../../components/NotFound/NotFound'
import s from './NotFoundPage.module.css'

const NotFoundPage = () => {
	return (
		<div className={s.notFoundWrapper}>
			<NotFound />
		</div>
	)
}

export default NotFoundPage
