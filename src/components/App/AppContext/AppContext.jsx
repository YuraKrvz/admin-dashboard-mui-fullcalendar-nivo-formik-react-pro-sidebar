import { useContext } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { AppCtxTheme, useMode } from '../AppTheme/AppTheme'

export const AppContext = ({ children }) => {
  const [createdTheme, colors, toggleColorMode] = useMode()

  return (
    <AppCtxTheme.Provider
      value={{
        colors,
        toggleColorMode,
      }}
    >
      <ThemeProvider theme={createdTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppCtxTheme.Provider>
  )
}

export const useAppContext = () => useContext(AppCtxTheme)
