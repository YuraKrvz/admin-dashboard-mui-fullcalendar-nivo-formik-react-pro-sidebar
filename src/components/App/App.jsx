import { AppRouter } from './AppRouter/AppRouter'
import { AppContext } from './AppContext/AppContext'
import { AppSidebarProvider } from './AppSidebarProvider/AppSidebarProvider'

export const App = () => {
  return (
    <AppContext>
      <AppSidebarProvider>
        <AppRouter />
      </AppSidebarProvider>
    </AppContext>
  )
}
