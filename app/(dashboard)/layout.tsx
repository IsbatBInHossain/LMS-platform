import Navbar from './_components/Navbar'
import SideBar from './_components/SideBar'

const DahshboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full'>
      <div className='h-[80px] inset-y-0 md:pl-56 w-full z-50 fixed'>
        <Navbar />
      </div>
      <div className='hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50'>
        <SideBar />
      </div>
      <main className='md:pl-56 pt-[80px] h-full'>{children}</main>
    </div>
  )
}
export default DahshboardLayout
