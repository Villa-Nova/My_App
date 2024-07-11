import { AboutMe } from './components/AboutMe/page'
import { GridLayout } from './components/GridLayout/page'

export default function Home() {
  return (
    <main className="mx-auto flex flex-col xl:flex-row xl:w-[85%]">
      <AboutMe />
      <GridLayout />
    </main>
  )
}
