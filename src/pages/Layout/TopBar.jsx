import { Box, IconButton } from '@mui/material'
import { InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import { useAppContext } from '../../components/App/AppContext/AppContext'

export const TopBar = () => {
  const { colors, toggleColorMode } = useAppContext()

  return (
    <Box display='flex' justifyContent='space-between' p={2}>
      {/* SEARCH BAR */}
      <Box display='flex' backgroundColor={colors.primary[400]} borderRadius='3px'>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search' />
        <IconButton type='button' sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS SECTION */}
      <Box display='flex'>
        <IconButton onClick={toggleColorMode.toggleColorMode}>
          <NightlightOutlinedIcon />
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <EmailOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  )
}
