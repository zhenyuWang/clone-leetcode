import { useState } from 'react'
import useHasMounted from '@/hooks/useHasMounted'
import TopBar from '@/components/TopBar/TopBar'
import ProblemsTable from '@/components/ProblemsTable/ProblemsTable'

export default function Home() {
  const [loadingProblems, setLoadingProblems] = useState(true)
  const hasMounted = useHasMounted()

  if (!hasMounted) return null

  return (
    <main className='bg-dark-layer-2 min-h-screen'>
      <TopBar />
      <h1
        className='text-2xl text-center text-gray-700 dark:text-gray-400 font-medium
					uppercase mt-10 mb-5'>
        &ldquo; QUALITY OVER QUANTITY &rdquo; 👇
      </h1>
      <div className='relative overflow-x-auto mx-auto px-6 pb-10'>
        {loadingProblems && (
          <div className='max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse'>
            {[...Array(10)].map((_, i) => (
              <LoadingSkeleton key={i} />
            ))}
          </div>
        )}
        <div className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
          {!loadingProblems && (
            <div className='flex text-xs text-gray-700 uppercase dark:text-gray-400 border-b'>
              <div className='py-3 w-[10%] font-medium'>Status</div>
              <div className='py-3 w-[38%] font-medium'>Title</div>
              <div className='py-3 w-[12%] font-medium'>Difficulty</div>
              <div className='py-3 w-[23%] font-medium'>Category</div>
              <div className='py-3 w-[17%] font-medium'>Solution</div>
            </div>
          )}
          <ProblemsTable setLoadingProblems={setLoadingProblems} />
        </div>
      </div>
    </main>
  )
}

const LoadingSkeleton = () => {
  return (
    <div className='flex items-center space-x-12 mt-4 px-6'>
      <div className='w-6 h-6 shrink-0 rounded-full bg-dark-layer-1'></div>
      <div className='h-4 sm:w-52  w-32  rounded-full bg-dark-layer-1'></div>
      <div className='h-4 sm:w-52  w-32 rounded-full bg-dark-layer-1'></div>
      <div className='h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1'></div>
      <span className='sr-only'>Loading...</span>
    </div>
  )
}
