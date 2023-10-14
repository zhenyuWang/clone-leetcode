import React, { useEffect, useState } from 'react'
import { problems } from '@/mockProblems/problems'
import Link from 'next/link'
import { BsCheckCircle } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'
import { IoClose } from 'react-icons/io5'
import YouTube from 'react-youtube'

type ProblemsTableProps = {}

const ProblemsTable: React.FC<ProblemsTableProps> = () => {
  const [youtubePlayer, setYoutubePlayer] = useState({
    isOpen: false,
    videoId: '',
  })
  const closeModal = () => {
    setYoutubePlayer({ isOpen: false, videoId: '' })
  }

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handleEsc)

    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  return (
    <>
      <div className='text-white'>
        {problems.map((problem, idx) => {
          const difficulyColor =
            problem.difficulty === 'Easy'
              ? 'text-dark-green-s'
              : problem.difficulty === 'Medium'
              ? 'text-dark-yellow'
              : 'text-dark-pink'
          return (
            <div className={`${idx % 2 == 1 ? 'flex bg-dark-layer-1' : 'flex'}`} key={problem.id}>
              <div className='px-2 py-4 w-[10%] font-medium whitespace-nowrap text-dark-green-s'>
                <BsCheckCircle fontSize={'18'} width='18' />
              </div>
              <div className='px-1 py-4 w-[38%]'>
                <Link className='hover:text-blue-600 cursor-pointer' href={`/problems/${problem.id}`}>
                  {problem.title}
                </Link>
              </div>
              <div className={`px-1 py-4 w-[12%] ${difficulyColor}`}>{problem.difficulty}</div>
              <div className={'px-1 py-4 w-[23%]'}>{problem.category}</div>
              <div className={'px-1 py-4 w-[17%]'}>
                {problem.videoId ? (
                  <AiFillYoutube
                    fontSize={'28'}
                    className='cursor-pointer hover:text-red-600'
                    onClick={() => setYoutubePlayer({ isOpen: true, videoId: problem.videoId as string })}
                  />
                ) : (
                  <p className='text-gray-400'>Coming soon</p>
                )}
              </div>
            </div>
          )
        })}
      </div>
      {youtubePlayer.isOpen && (
        <div className='fixed top-0 left-0 h-screen w-screen flex items-center justify-center'>
          <div className='bg-black z-10 opacity-70 top-0 left-0 w-screen h-screen absolute' onClick={closeModal}></div>
          <div className='w-full z-50 h-full px-6 relative max-w-4xl'>
            <div className='w-full h-full flex items-center justify-center relative'>
              <div className='w-full relative'>
                <IoClose fontSize={'35'} className='cursor-pointer absolute -top-16 right-0' onClick={closeModal} />
                <YouTube videoId={youtubePlayer.videoId} loading='lazy' iframeClassName='w-full min-h-[500px]' />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default ProblemsTable