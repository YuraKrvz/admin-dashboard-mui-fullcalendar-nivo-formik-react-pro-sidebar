import { Box } from '@mui/material'

import { Header } from '../components/Header'
import { GeographyChart as GeographyChartComponent } from '../components/GeographyChart'

export const GeographyChart = () => {
  return (
    <Box m='10px'>
      <Header title='Bar Chart' subtitle='Simple bar Chart' />
      <Box height='75vh'>
        <GeographyChartComponent />
      </Box>
    </Box>
  )
}
