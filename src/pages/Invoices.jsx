import { DataGrid } from '@mui/x-data-grid'
import { Box, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined'

import { Header } from '../components/Header'
import { useAppContext } from '../components/App/AppContext/AppContext'
import { selectAllInvoices, removeInvoice } from '../store/invoicesSlice'

export const Invoices = () => {
  const { colors } = useAppContext()
  const { invoicesSlice } = useSelector(selectAllInvoices)
  const dispatch = useDispatch()

  const handlerRemove = (inv) => {
    if (window.confirm(`Are you shore to remove this ${inv.row.name} invoice?`)) {
      dispatch(removeInvoice(inv.id))
    }
  }

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
    {
      field: 'remove',
      headerName: 'Remove',
      flex: 1,
      renderCell: (member) => {
        return (
          <Box
            width='60%'
            m='0 auto'
            p='5px'
            display='flex'
            justifyContent='center'
            backgroundColor={colors.redAccent[500]}
            borderRadius='4px'
            onClick={() => handlerRemove(member)}
          >
            <CancelPresentationOutlinedIcon />
            <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
              Remove
            </Typography>
          </Box>
        )
      },
    },
  ]

  return (
    <Box m='5px'>
      <Header title='Invoices dashboard' subtitle='Managing the invoices dashboard' />
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
        <DataGrid checkboxSelection rows={invoicesSlice} columns={columns} />
      </Box>
    </Box>
  )
}
