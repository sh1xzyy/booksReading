import { useWelcomeGuideModalContext } from '../../../../contexts/WelcomeGuideModalContext/useWelcomeGuideModalContext'
import ActionButton from '../../../common/ActionButton/ActionButton'
import { useGuideSteps } from '../useGuideSteps/useGuideSteps'
import StepItem from '../StepItem/StepItem'
import s from './WelcomeGuide.module.css'

const WelcomeGuide = () => {
	const { setIsWelcomeGuideModalOpen } = useWelcomeGuideModalContext()
	const guideSteps = useGuideSteps()
	return (
		<div className={s.welcomeGuideWrapper}>
			<div className={s.modal}>
				<ul className={s.stepsList}>
					{guideSteps.map((step, index) => (
						<StepItem key={index} step={step} />
					))}
				</ul>
				<ActionButton
					className='acceptKnowledge'
					type='submit'
					title='Ok'
					onClick={() => setIsWelcomeGuideModalOpen(false)}
				/>
			</div>
		</div>
	)
}

export default WelcomeGuide
