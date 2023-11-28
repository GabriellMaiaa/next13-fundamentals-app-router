import GithubProfile from './components/github-profile'
import { Suspense } from 'react'

export default async function Home() {
  return (
    <div>
      <h1>Homepage!</h1>
      <p>menfirbhurvgyfvehd jhevgywsbuhw</p>
      <p>menfirbhurvgyfvehd jhevgywsbuhw</p>
      <p>menfirbhurvgyfvehd jhevgywsbuhw</p>
      <p>menfirbhurvgyfvehd jhevgywsbuhw</p>
      <Suspense>
        <GithubProfile />
      </Suspense>
    </div>
  )
}
