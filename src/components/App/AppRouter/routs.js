import { Dashboard } from '../../../pages/Dashboard'
import { Team } from '../../../pages/Team'
import { Contacts } from '../../../pages/Contacts'
import { Invoices } from '../../../pages/Invoices'
import { Form } from '../../../pages/Form'
import { Calendar } from '../../../pages/Calendar'
import { Faq } from '../../../pages/Faq'
import { BarChart } from '../../../pages/BarChart'
import { PieChart } from '../../../pages/PieChart'
import { LineChart } from '../../../pages/LineChart'
import { GeographyChart } from '../../../pages/GeographyChart'
// import { NotFound } from '../../pages/NotFound'

export const routs = [
  { path: '/', Component: Dashboard, index: 'index' },
  { path: '/team', Component: Team },
  { path: '/contacts', Component: Contacts },
  { path: '/invoices', Component: Invoices },
  { path: '/form', Component: Form },
  { path: '/calendar', Component: Calendar },
  { path: '/faq', Component: Faq },
  { path: '/bar-chart', Component: BarChart },
  { path: '/pie-chart', Component: PieChart },
  { path: '/line-chart', Component: LineChart },
  { path: '/geography-chart', Component: GeographyChart },
  //   { path: '*', Component: NotFound },
]
