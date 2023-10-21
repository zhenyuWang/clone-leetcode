import React from "react"
import useHasMounted from '@/hooks/useHasMounted'
import TopBar from '@/components/TopBar/TopBar'
import Workspace from '@/components/Workspace/Workspace'
import { Problem, problems } from '@/utils/problems'

type ProblemPageProps = {
  problem: Problem
}

const ProblemPage: React.FC<ProblemPageProps> = ({ problem }) => {
  const hasMounted = useHasMounted()

  if (!hasMounted) return null
  return (
    <>
      <TopBar problemPage />
      <Workspace problem={problem} />
    </>
  )
}
export default ProblemPage

export async function getStaticPaths() {
  const paths = Object.keys(problems).map((key) => ({
    params: { pid: key },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: { pid: string } }) {
  const { pid } = params
  const problem = problems[pid]

  if (!problem) {
    return {
      notFound: true,
    }
  }
  problem.handlerFunction = problem.handlerFunction.toString()
  return {
    props: {
      problem,
    },
  }
}
