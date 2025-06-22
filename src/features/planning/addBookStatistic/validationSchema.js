import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
	date: Yup.string().required('Оберіть дату'),
	pages: Yup.number().max(5000, 'Максимум 5000').required(`Обов'язково`),
})
