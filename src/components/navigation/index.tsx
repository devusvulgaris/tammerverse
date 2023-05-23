import Link from 'next/link'


const Navigation = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/map">Map</Link>
      <Link href="/quiz">Quiz</Link>
      <Link href="/scene">Scene</Link>
    </nav>
  )
}

export default Navigation
