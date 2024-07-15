import { AboutMe } from './components/AboutMe'
import { GridLayout } from './components/GridLayout'

export default function Home() {
  return (
    <main className="mx-auto flex flex-col xl:flex-row xl:w-[85%]">
      <AboutMe />
      <GridLayout />
    </main>
  )
}
