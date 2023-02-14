import { Box } from '@mui/material'

import { Header } from '../components/Header'
import { PieChart as PieChartComponent } from '../components/PieChart'

export const PieChart = () => {
  return (
    <Box m='10px'>
      <Header title='Pie Chart' subtitle='Simple Pie Chart' />
      <Box height='75vh'>
        <PieChartComponent />
      </Box>
    </Box>
  )
}
