import { Formik } from 'formik'
import { Box, Button, TextField, useMediaQuery } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import * as yup from 'yup'

import { Header } from '../components/Header'
import { addMember } from '../store/teamSlice'

export const TeamForm = () => {
  const isNonMobile = useMediaQuery('(min-width: 600px)')
  const { teamSlice } = useSelector((state) => state)
  const dispatch = useDispatch()

  const handleFormSubmit = (values, { resetForm }) => {
    dispatch(
      addMember({
        id: teamSlice.length + 1,
        name: values.name,
        email: values.email,
        age: values.age,
        phone: values.phoneNumber,
        access: values.accessLevel,
      }),
    )
    resetForm({
      name: '',
      age: '',
      email: '',
      phoneNumber: '',
      accessLevel: '',
    })
  }
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/

  return (
    <Box m='20px'>
      <Header title='TEAM FORM' subtitle='Add new member to team.' />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={{
          name: '',
          age: '',
          email: '',
          phoneNumber: '',
          accessLevel: '',
        }}
        validationSchema={yup.object().shape({
          name: yup.string().required('Required first Name'),
          age: yup.string().required('Required last Name'),
          email: yup.string().email('Invalid email').required('required'),
          phoneNumber: yup
            .string()
            .matches(phoneRegExp, 'Phone number is not valid')
            .required('required'),
          // phoneNumber: yup.string().required('Required phone number one'),
          accessLevel: yup.string().required('Required access level two'),
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
                value={values.firstName}
                name='name'
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Age'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.age}
                name='age'
                error={!!touched.age && !!errors.age}
                helperText={touched.age && errors.age}
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
                sx={{ gridColumn: 'span 4' }}
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
                label='Access level'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.accessLevel}
                name='accessLevel'
                error={!!touched.accessLevel && !!errors.accessLevel}
                helperText={touched.accessLevel && errors.accessLevel}
                sx={{ gridColumn: 'span 4' }}
              />
            </Box>
            <Box display='flex' justifyContent='end' mt='20px'>
              <Button type='submit' color='secondary' variant='contained'>
                Add member
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  )
}
