import {
	LineChart,
	Line,
	Tooltip,
	ResponsiveContainer,
	CartesianGrid,
	ReferenceLine,
} from 'recharts'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { selectPlannedData } from '../../../../redux/planning/selectors'
import { CustomDot } from '../CustomDot/CustomDot'
import s from './CustomRechart.module.css'
import './CustomRechart.css'

const CustomRechart = () => {
	const { pagesPerDay, stats } = useSelector(selectPlannedData)
	const { t } = useTranslation()

	const fallbackData = [
		{
			plan: 0,
			fact: 0,
		},
	]

	const transformedData =
		Array.isArray(stats) && stats.length > 0
			? stats.map(item => ({
					time: item.time,
					plan: pagesPerDay,
					fact: item.pagesCount,
			  }))
			: fallbackData

	return (
		<div className={s.chartWrapper}>
			<div className={s.chartDescription}>
				<span className={s.chartTitle}>{t('chartTitle')}</span>
				<span className={s.pagesCount}>{pagesPerDay || 0}</span>
			</div>

			<ResponsiveContainer>
				<LineChart data={transformedData}>
					<CartesianGrid stroke='#b1b5c2' horizontal={false} vertical={true} />
					<ReferenceLine y={0} stroke='#b1b5c2' strokeWidth={1} />
					<Tooltip />
					{transformedData && (
						<>
							<Line
								type='monotone'
								dataKey='plan'
								strokeWidth={3}
								dot={<CustomDot stroke='#001F54' />}
								className={s.planLine}
								style={{
									stroke: '#091e3f',
									boxShadow: '0 4px 4px 0 rgba(0,0,0, .25)',
								}}
							/>
							<Line
								type='monotone'
								dataKey='fact'
								strokeWidth={3}
								dot={<CustomDot stroke='#FA7A47' />}
								style={{
									stroke: '#ff6b08',
									boxShadow: '0 4px 4px 0 rgba(0,0,0, .25)',
								}}
							/>
						</>
					)}
				</LineChart>
			</ResponsiveContainer>

			<div className={s.hour}>{t('chartHour')}</div>
		</div>
	)
}

export default CustomRechart
