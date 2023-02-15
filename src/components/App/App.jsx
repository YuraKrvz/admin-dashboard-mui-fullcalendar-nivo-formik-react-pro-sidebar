import { ProviderStore } from '../../store/ProviderStore'

import { AppRouter } from './AppRouter/AppRouter'
import { AppContext } from './AppContext/AppContext'
import { AppSidebarProvider } from './AppSidebarProvider/AppSidebarProvider'

export const App = () => {
  return (
    <ProviderStore>
      <AppContext>
        <AppSidebarProvider>
          <AppRouter />
        </AppSidebarProvider>
      </AppContext>
    </ProviderStore>
  )
}
