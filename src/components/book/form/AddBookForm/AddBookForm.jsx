import { HiArrowLongLeft } from 'react-icons/hi2'
import { Form, Formik } from 'formik'
import { useBookFormModalContext } from '../../../../contexts/BookFormModalContext/useBookFormModalContext'
import { useAddBookForm } from '../../../../features/books/addBookForm/useAddBookForm'
import ActionButton from '../../../common/ActionButton/ActionButton'
import FormField from '../../../common/form/FormField/FormField'
import s from './AddBookForm.module.css'
import { useTranslation } from 'react-i18next'

const AddBookForm = () => {
	const { initialValues, validationSchema, handleSubmit } = useAddBookForm()
	const { setIsBookFormOpen } = useBookFormModalContext()
	const { t } = useTranslation()

	return (
		<>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={validationSchema(t)}
			>
				<Form className={s.form}>
					<ActionButton
						className='goBackButton'
						type='button'
						onClick={() => {
							setIsBookFormOpen(false)
						}}
					>
						<HiArrowLongLeft color='#ff6b08' size={24} />
					</ActionButton>
					<div className={s.fields}>
						<FormField
							customFieldWrapper='libraryFieldWrapper'
							classField='libraryField'
							classLabel='libraryLabel'
							name='title'
							type='text'
							labelTitle={t('bookFormNameLabel')}
							placeholder='...'
						/>
						<FormField
							classField='libraryField'
							classLabel='libraryLabel'
							name='author'
							type='text'
							labelTitle={t('bookFormAuthorLabel')}
							placeholder='...'
						/>
						<FormField
							classField='libraryField'
							classLabel='libraryLabel'
							name='publishYear'
							type='number'
							labelTitle={t('bookFormPublishYearLabel')}
							placeholder='...'
						/>
						<FormField
							classField='libraryField'
							classLabel='libraryLabel'
							name='pagesTotal'
							type='number'
							labelTitle={t('bookFormPagesTotalLabel')}
							placeholder='...'
						/>
					</div>
					<ActionButton
						className='addBookButton'
						type='submit'
						title={t('addFormButton')}
					/>
				</Form>
			</Formik>
		</>
	)
}

export default AddBookForm
