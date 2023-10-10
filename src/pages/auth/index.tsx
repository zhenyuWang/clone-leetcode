import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'
import AuthModal from '@/components/Modals/AuthModal'
import { useRecoilValue } from 'recoil'
import { authModalState } from '@/atoms/authModalAtom'

type authPageProps = {}

const AuthPage: React.FC<authPageProps> = () => {
  const authModal = useRecoilValue(authModalState)

  return (
    <div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
      <div className='max-w-7xl max-auto'>
        <Navbar />
      </div>
      <div className='flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none'>
        <Image src='/hero.png' alt='Hero img' width={700} height={700} />
      </div>
      {authModal.isOpen && <AuthModal />}
    </div>
  )
}
export default AuthPage
