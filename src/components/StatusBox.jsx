import { Box, Typography } from '@mui/material'

import { useAppContext } from './App/AppContext/AppContext'

export const ProgressCircle = ({ progress = '0.75', size = '40' }) => {
  const { colors } = useAppContext()
  const angle = progress * 360

  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
        conic-gradient(transparent 0deg 
        ${angle}deg, 
        ${colors.blueAccent[500]} 
        ${angle}deg 360deg),
        ${colors.greenAccent[500]}`,
        borderRadius: '50%',
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  )
}

export const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const { colors } = useAppContext()

  return (
    <Box width='100%' m='0 30px'>
      <Box display='flex' justifyContent='space-between'>
        <Box>
          {icon}
          <Typography variant='h4' fontWeight='bold' sx={{ color: colors.grey[100] }}>
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display='flex' justifyContent='space-between' mt='2px'>
        <Typography variant='h5' sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography variant='h5' fontStyle='italic' sx={{ color: colors.greenAccent[600] }}>
          {increase}
        </Typography>
      </Box>
    </Box>
  )
}
