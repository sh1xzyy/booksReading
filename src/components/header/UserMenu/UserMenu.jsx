import { PiHouseLineBold } from 'react-icons/pi'
import { MdMenuBook } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NavigationButton from '../../common/NavigationButton/NavigationButton'
import { setActiveClass } from '../../../utils/header/userMenu/setActiveClass'
import { formattedName } from '../../../utils/header/userMenu/formattedName'
import ConfirmLogoutModal from '../ConfirmLogoutModal/ConfirmLogoutModal'
import ActionButton from '../../common/ActionButton/ActionButton'
import { selectUserData } from '../../../redux/auth/selectors'
import s from './UserMenu.module.css'
import { useConfirmLogoutModalContext } from '../../../contexts/ConfirmLogoutModalContext/useConfirmLogoutModalContext'
import { useTranslation } from 'react-i18next'

const UserMenu = () => {
	const { isConfirmLogoutModalOpen, setIsConfirmLogoutModalOpen } =
		useConfirmLogoutModalContext()
	const { name } = useSelector(selectUserData)
	const { t } = useTranslation()

	return (
		<>
			{isConfirmLogoutModalOpen && <ConfirmLogoutModal />}
			<NavigationButton className='logo' to='/' title='BR' />
			<div className={s.userDesktopInfo}>
				<span className={s.shortName}>{formattedName(name)}</span>
				<span className={s.userName} title={name}>
					{formattedName(name, false)}
				</span>
			</div>
			<nav className={s.nav}>
				<ul className={s.navList}>
					<li className={s.navLinkItem}>
						<NavLink
							to='/statistics'
							className={({ isActive }) => setActiveClass(s, isActive)}
						>
							<MdMenuBook color='#A6ABB9' size={22} />
						</NavLink>
					</li>
					<li className={s.navLinkItem}>
						<NavLink
							to='/library'
							className={({ isActive }) => setActiveClass(s, isActive)}
						>
							<PiHouseLineBold color='#A6ABB9' size={20} />
						</NavLink>
					</li>
				</ul>
				<div className={s.userInfo}>
					<span className={s.shortName}>{formattedName(name)}</span>
				</div>
				<ActionButton
					className='logout'
					type='button'
					title={t('logoutButton')}
					onClick={() => setIsConfirmLogoutModalOpen(true)}
				/>
			</nav>
		</>
	)
}

export default UserMenu
