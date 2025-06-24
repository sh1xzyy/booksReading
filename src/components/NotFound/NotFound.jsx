import NavigationButton from '../common/NavigationButton/NavigationButton'
import s from './NotFound.module.css'
const NotFound = () => {
	return (
		<>
			<img
				className={s.notFoundImage}
				src='/notFound/404@1x.jpg'
				srcSet='/notFound/404@1x.jpg 1x, /notFound/404@2x.jpg 2x'
				alt='Not found image'
				loading='lazy'
			/>

			<h2 className={s.notFoundTitle}>Opps! Page Not Found</h2>
			<NavigationButton
				className='backToHome'
				to='/library'
				title='BACK TO HOME'
			/>
		</>
	)
}

export default NotFound
