import { CssBaseline, ThemeProvider } from '@mui/material'

export const AppThemeProvider = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
