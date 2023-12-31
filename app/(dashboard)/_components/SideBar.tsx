import Logo from './Logo'
import { SidebarRoutes } from './sidebar-routes'

const SideBar = () => {
  return (
    <div className='border-r w-full flex flex-col overflow-y-auto bg-white shadow-sm'>
      <div className='p-6'>
        <Logo />
      </div>
      <div className='flex flex-col w-full'>
        <SidebarRoutes />
      </div>
    </div>
  )
}
export default SideBar
