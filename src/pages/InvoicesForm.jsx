import { Formik } from 'formik'
import { Box, Button, TextField, useMediaQuery } from '@mui/material'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import * as yup from 'yup'

import { Header } from '../components/Header'
import { addInvoice } from '../store/invoicesSlice'
import { phoneRegExp } from '../services/helpers'

export const InvoicesForm = () => {
  const isNonMobile = useMediaQuery('(min-width: 600px)')
  const dispatch = useDispatch()

  const handleFormSubmit = (values, { resetForm }) => {
    dispatch(
      addInvoice({
        id: nanoid(),
        name: values.name,
        email: values.email,
        age: values.age,
        phone: values.phoneNumber,
        cost: values.cost,
        date: values.date,
      }),
    )
    resetForm({
      name: '',
      age: '',
      email: '',
      phoneNumber: '',
      cost: '',
      date: '',
    })
  }

  return (
    <Box m='20px'>
      <Header title='Invoices form' subtitle='Create invoice balance.' />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={{
          name: '',
          phoneNumber: '',
          email: '',
          cost: '',
          date: '',
        }}
        validationSchema={yup.object().shape({
          name: yup.string().required('Required first Name'),
          cost: yup.string().required('Required last Name'),
          email: yup.string().email('Invalid email').required('required'),
          phoneNumber: yup
            .string()
            .matches(phoneRegExp, 'Phone number is not valid')
            .required('required'),
          date: yup.string().required('Required address one'),
        })}
      >
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display='grid'
              gap='30px'
              gridTemplateColumns='repeat(4, minmax(0, 1fr))'
              sx={{
                '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
              }}
            >
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Name'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name='name'
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Phone number'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phoneNumber}
                name='phoneNumber'
                error={!!touched.phoneNumber && !!errors.phoneNumber}
                helperText={touched.phoneNumber && errors.phoneNumber}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Email'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name='email'
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Cost'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cost}
                name='cost'
                error={!!touched.cost && !!errors.cost}
                helperText={touched.cost && errors.cost}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Date'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.date}
                name='date'
                error={!!touched.date && !!errors.date}
                helperText={touched.date && errors.date}
                sx={{ gridColumn: 'span 4' }}
              />
            </Box>
            <Box display='flex' justifyContent='end' mt='20px'>
              <Button type='submit' color='secondary' variant='contained'>
                Add invoice
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  )
}
