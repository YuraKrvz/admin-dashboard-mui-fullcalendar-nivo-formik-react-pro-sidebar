import { Typography, Box } from '@mui/material'

import { useAppContext } from './App/AppContext/AppContext'

export const Header = ({ title, subtitle, ...props }) => {
  const { colors } = useAppContext()

  return (
    <Box mb='20px'>
      <Typography
        variant='h2'
        color={colors.grey[100]}
        fontWeight='bold'
        sx={{ m: '0 0 5px 30px' }}
        {...props}
      >
        {title}
      </Typography>
      <Typography variant='h5' color={colors.greenAccent[400]} ml='20px'>
        {subtitle}
      </Typography>
    </Box>
  )
}
