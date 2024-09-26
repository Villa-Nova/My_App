'use client'

import { spotifyGetToken } from '@/app/api/music'
/* eslint-disable @typescript-eslint/no-unused-vars */
import { DiscordStatus } from '@/components/DiscordStatus'
import { SpotifyCard } from '@/components/SpotifyCard'
import { Switcher } from '@/components/Switcher'

export function GridLayout() {
  spotifyGetToken()

  return (
    <aside className="flex-[2] px-8 py-7 max-h-dvh xl:overflow-y-scroll">
      <div className="grid gap-4 rounded_border grid-areas-nano-layout grid-cols-nano-layout grid-rows-nano-layout sm:grid-cols-sm-layout sm:grid-areas-sm-layout md:grid-areas-md-layout md:grid-cols-md-layout xl:grid-rows-xl-layout">
        <div className="bg-indigo-100 aspect-square w-full h-full grid-in-A flex justify-center items-center">
          <Switcher />
        </div>

        <div className="bg-indigo-200 aspect-square sm:aspect-[16/5] w-full h-full grid-in-B overflow-hidden relative">
          <SpotifyCard />
        </div>

        <div className="bg-indigo-300 aspect-square sm:aspect-[16/5] w-full h-full grid-in-C">
          3
        </div>

        <div className="bg-indigo-400 aspect-[2/3] w-full h-full grid-in-D">
          4
        </div>

        <div className="bg-indigo-500 aspect-square w-full h-full grid-in-E relative">
          <DiscordStatus />
        </div>

        <div className="bg-indigo-600 aspect-square w-full h-full grid-in-F">
          Github
        </div>

        <div className="bg-indigo-700 aspect-video w-full h-full grid-in-G">
          video
        </div>

        <div className="bg-indigo-800 aspect-[2/3] w-full h-full grid-in-H">
          8
        </div>
      </div>
    </aside>
  )
}
