import { Dashboard } from '../../../pages/Dashboard'
import { Team } from '../../../pages/Team'
import { TeamForm } from '../../../pages/TeamForm'
import { Contacts } from '../../../pages/Contacts'
import { Invoices } from '../../../pages/Invoices'
import { InvoicesForm } from '../../../pages/InvoicesForm'
import { Calendar } from '../../../pages/Calendar'
import { Faq } from '../../../pages/Faq'
import { BarChart } from '../../../pages/BarChart'
import { PieChart } from '../../../pages/PieChart'
import { LineChart } from '../../../pages/LineChart'
import { GeographyChart } from '../../../pages/GeographyChart'

export const routs = [
  { path: '/', Component: Dashboard, index: 'index' },
  { path: '/team', Component: Team },
  { path: '/team-form', Component: TeamForm },
  { path: '/contacts', Component: Contacts },
  { path: '/invoices', Component: Invoices },
  { path: '/invoices-form', Component: InvoicesForm },
  { path: '/calendar', Component: Calendar },
  { path: '/faq', Component: Faq },
  { path: '/bar-chart', Component: BarChart },
  { path: '/pie-chart', Component: PieChart },
  { path: '/line-chart', Component: LineChart },
  { path: '/geography-chart', Component: GeographyChart },
]
