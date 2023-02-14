import { Box } from '@mui/material'

import { Header } from '../components/Header'
import { LineChart as LineChartComponent } from '../components/LineChart'

export const LineChart = () => {
  return (
    <Box m='10px'>
      <Header title='Line Chart' subtitle='Simple Line Chart' />
      <Box height='75vh'>
        <LineChartComponent />
      </Box>
    </Box>
  )
}
