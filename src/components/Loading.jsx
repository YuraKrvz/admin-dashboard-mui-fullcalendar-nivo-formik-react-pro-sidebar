import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

export const Loading = ({ isLoading, children }) => {
  return <Box sx={{ width: '100%' }}>{isLoading ? <LinearProgress /> : <>{children}</>}</Box>
}
