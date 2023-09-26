import NavbarRoutes from '@/components/NavbarRoutes'
import MobileSidebar from './MobileSidebar'

const Navbar = () => {
  return (
    <div className='flex items-center h-full bg-white shadow-sm border-b p-4'>
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  )
}
export default Navbar
