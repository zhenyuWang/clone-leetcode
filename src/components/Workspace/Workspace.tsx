import React, { useState } from 'react'
import Split from 'react-split'
import ProblemDescription from './ProblemDescription/ProblemDescription'
import Playground from './Playground/Playground'
import type { Problem } from '@/utils/problems'

type WorkspaceProps = {
  problem: Problem
}

const Workspace: React.FC<WorkspaceProps> = ({ problem }) => {
  const [solved, setSolved] = useState(false)

  return (
    <Split className='split' minSize={0}>
      <ProblemDescription problem={problem} _solved={solved} />
      <Playground problem={problem} />
    </Split>
  )
}
export default Workspace
