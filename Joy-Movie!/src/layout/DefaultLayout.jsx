import { Outlet } from 'react-router-dom'

import Header from '../components/Header/index.jsx'

function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
export default DefaultLayout
