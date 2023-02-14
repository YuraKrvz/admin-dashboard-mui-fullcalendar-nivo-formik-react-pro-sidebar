import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar'
import { NavLink } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined'
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined'
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined'
import FormatAlignCenterOutlinedIcon from '@mui/icons-material/FormatAlignCenterOutlined'
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined'
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined'
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined'
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined'
import { useAppContext } from '../../components/App/AppContext/AppContext'
import img from '../../assets/user.jpg'

const itemsMain = [
  { id: 'dashboard', to: '/', label: 'Dashboard', icon: <DashboardOutlinedIcon /> },
  { id: 'manage-team', to: '/team', label: 'Manage team', icon: <Diversity3OutlinedIcon /> },
  {
    id: 'contatcts-information',
    to: '/contacts',
    label: 'Contact information',
    icon: <ContactPhoneOutlinedIcon />,
  },
  {
    id: 'invoices-balances',
    to: '/invoices',
    label: 'Invoices balances',
    icon: <TextSnippetOutlinedIcon />,
  },
  {
    id: 'profile-form',
    to: '/form',
    label: 'Profile form',
    icon: <FormatAlignCenterOutlinedIcon />,
  },
]
const itemsCharts = [
  { id: 'bar-chart', to: '/bar-chart', label: 'Bar chart', icon: <AutoGraphOutlinedIcon /> },
  { id: 'pie-chart', to: '/pie-chart', label: 'Pie chart', icon: <DonutLargeOutlinedIcon /> },
  {
    id: 'line-chart',
    to: '/line-chart',
    label: 'Line chart',
    icon: <StackedLineChartOutlinedIcon />,
  },
  {
    id: 'geography-chart',
    to: '/geography-chart',
    label: 'Geography chart',
    icon: <MapOutlinedIcon />,
  },
]
const itemsOther = [
  { id: 'calendar', to: '/calendar', label: 'Calendar', icon: <EventNoteOutlinedIcon /> },
  { id: 'faq-page', to: '/faq', label: 'FAQ page', icon: <QuizOutlinedIcon /> },
]

const Item = ({ label, to, icon, colors }) => (
  <NavLink
    to={to}
    style={{
      color: colors.primary[100],
      textDecoration: 'none',
      '&:hover:': { background: 'red' },
    }}
  >
    <MenuItem style={{ color: 'inherit' /*colors.grey[100]*/ }} icon={icon} component='div'>
      {label}
    </MenuItem>
  </NavLink>
)

export const SideBar = () => {
  const { collapseSidebar, collapsed } = useProSidebar()
  const { colors } = useAppContext()

  return (
    <Box
      sx={{
        maxHeight: '1000px',
        '& .ps-sidebar-root': {
          backgroundColor: `${colors.primary[400]} !important`,
          height: '100%',
          '& .ps-sidebar-container': {
            backgroundColor: 'transparent !important',
            '& .ps-menu-root': {
              '& ul': {
                '& .ps-menuitem-root': {
                  '& .ps-submenu-content': {
                    backgroundColor: 'transparent !important',
                  },
                  '& .ps-menu-button:hover': {
                    // backgroundColor: `${colors.primary[400]} !important`
                    background: 'transparent',
                  },
                },
              },
            },
          },
        },
      }}
    >
      <Sidebar>
        <Menu>
          <MenuItem
            onClick={() => collapseSidebar()}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <Box sx={{ display: 'flex' }}>
              <MenuOutlinedIcon sx={{ marginLeft: '7px' }} />
              {!collapsed && (
                <Box display='flex' justifyContent='space-between' alignItems='center' ml='15px'>
                  <Typography variant='h5' color={colors.grey[100]}>
                    ADMINS
                  </Typography>
                </Box>
              )}
            </Box>
          </MenuItem>
          {/* USER */}
          {!collapsed ? (
            <Box mt='5px' mb='25px'>
              <Box display='flex' justifyContent='center' alignItems='center'>
                <img
                  alt='profile-user'
                  width='100px'
                  height='100px'
                  src={img}
                  style={{ cursor: 'pointer', borderRadius: '50%' }}
                />
              </Box>
              <Box textAlign='center'>
                <Typography
                  variant='h2'
                  color={colors.grey[100]}
                  fontWeight='bold'
                  sx={{ m: '10px 0 0 0' }}
                >
                  User Name
                </Typography>
                <Typography variant='h5' color={colors.greenAccent[500]}>
                  Status
                </Typography>
              </Box>
            </Box>
          ) : (
            <Box height={194.5} />
          )}
          {/* MENU ITEMS  */}
          <Typography variant='p' color={colors.grey[100]} ml='25px'>
            Main
          </Typography>
          {itemsMain.map((i) => (
            <Item to={i.to} label={i.label} icon={i.icon} colors={colors} key={i.id} />
          ))}
          {itemsOther.map((i) => (
            <Item to={i.to} label={i.label} icon={i.icon} colors={colors} key={i.id} />
          ))}
          <Typography variant='p' color={colors.grey[100]} ml='22px'>
            Charts
          </Typography>
          {itemsCharts.map((i) => (
            <Item to={i.to} label={i.label} icon={i.icon} colors={colors} key={i.id} />
          ))}
        </Menu>
      </Sidebar>
    </Box>
  )
}
