import s from './ScrollBar.module.css'
const ScrollBar = ({ children }) => {
	return <div className={s.scrollWrapper}>{children}</div>
}

export default ScrollBar
