import { Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useSelector, useDispatch } from 'react-redux'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined'

import { Header } from '../components/Header'
import { useAppContext } from '../components/App/AppContext/AppContext'
import { removeMember } from '../store/teamSlice'

export const Team = () => {
  const { colors } = useAppContext()
  const { teamSlice } = useSelector((state) => state)
  const dispatch = useDispatch()

  const handlerRemove = (member) => {
    if (window.confirm(`are you shore to remove this ${member.row.name} member?`)) {
      dispatch(removeMember(member.id))
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
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
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
      field: 'accessLevel',
      headerName: 'Access Level',
      flex: 1,
      renderCell: ({ row: { access } }) => (
        <Box
          width='60%'
          m='0 auto'
          p='5px'
          display='flex'
          justifyContent='space-between'
          backgroundColor={
            access === 'admin'
              ? colors.greenAccent[600]
              : access === 'manager'
              ? colors.greenAccent[700]
              : colors.greenAccent[700]
          }
          borderRadius='4px'
        >
          {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
          {access === 'manager' && <SecurityOutlinedIcon />}
          {access === 'user' && <LockOpenOutlinedIcon />}
          <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
            {access}
          </Typography>
        </Box>
      ),
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
            '& .MuiBox-root': {
              margin: 0,
            },
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
        <DataGrid checkboxSelection rows={teamSlice} columns={columns} />
      </Box>
    </Box>
  )
}
