import Menu from './pages/components/Menu'
import TopInfo from './pages/components/TopInfo'
import { Outlet } from "react-router-dom";
import { MenuData } from './pages/components/Menu/MenuDataInitial';

const Base = () => {
  return (
    <>
      <Menu MenuData={MenuData} all/>
      <TopInfo />
      <Outlet/>
    </>
  )
}
export default Base
