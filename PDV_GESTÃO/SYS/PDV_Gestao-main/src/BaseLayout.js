import Menu from './pages/components/Menu'
import TopInfo from './pages/components/TopInfo'
import { Outlet } from "react-router-dom";
import { MenuData } from './pages/components/Menu/MenuData';

const Base = ({ openMenu, setOpenMenu }) => {
  return (
    <>
      <Menu openMenu={openMenu} MenuData={MenuData} setOpenMenu={setOpenMenu} />
      <TopInfo />
      <Outlet/>
    </>
  )
}
export default Base
