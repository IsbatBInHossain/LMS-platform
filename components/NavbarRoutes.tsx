'use client'

import { UserButton } from '@clerk/nextjs'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { LogOut } from 'lucide-react'
import Link from 'next/link'

const NavbarRoutes = () => {
  const pathname = usePathname()
  const router = useRouter()

  const isTeacherPage = pathname?.startsWith('/teacher')
  const isPlayerPage = pathname?.includes('/chapter')

  return (
    <div className='flex ml-auto gap-x-2'>
      {isTeacherPage || isPlayerPage ? (
        <Link href='/'>
          <Button size='sm' variant='ghost' className='text-sky-700 pl-4'>
            <LogOut />
            <span className='pl-2'>Exit</span>
          </Button>
        </Link>
      ) : (
        <Link href='/teacher/courses'>
          <Button size='sm' variant='ghost' className='text-sky-700 pl-4'>
            Teacher Mode
          </Button>
        </Link>
      )}
      <UserButton afterSignOutUrl='/' />
    </div>
  )
}
export default NavbarRoutes
