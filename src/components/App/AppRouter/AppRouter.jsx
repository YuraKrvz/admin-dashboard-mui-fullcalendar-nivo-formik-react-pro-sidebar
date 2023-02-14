import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Layout } from '../../../pages/Layout/Layout'

import { routs } from './routs'

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          {routs.map(({ Component, ...props }) => (
            <Route path={props.path} element={<Component />} {...props} key={props.path} />
          ))}
        </Route>
      </Routes>
    </Router>
  )
}
