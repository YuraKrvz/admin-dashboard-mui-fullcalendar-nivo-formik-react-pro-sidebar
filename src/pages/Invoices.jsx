import { DataGrid } from '@mui/x-data-grid'
import { Box, Typography } from '@mui/material'

import { Header } from '../components/Header'
import { mockDataInvoices } from '../data/mockData'
// import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
// import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
// import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'
import { useAppContext } from '../components/App/AppContext/AppContext'

export const Invoices = () => {
  const { colors } = useAppContext()

  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>${params.row.cost}</Typography>
      ),
    },
    {
      field: 'date',
      headerName: 'Date',
      flex: 1,
    },
  ]

  return (
    <Box m='5px'>
      <Header title='TEAM' subtitle='Managing the Team Members' />
      <Box
        m='10px 0 0 5px'
        height='75vh'
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  )
}
