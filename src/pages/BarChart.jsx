import { Box } from '@mui/material'

import { Header } from '../components/Header'
import { BarChart as BarChartComponent } from '../components/BarChart'

export const BarChart = () => {
  return (
    <Box m='10px'>
      <Header title='Bar Chart' subtitle='Simple bar Chart' />
      <Box height='75vh'>
        <BarChartComponent />
      </Box>
    </Box>
  )
}
