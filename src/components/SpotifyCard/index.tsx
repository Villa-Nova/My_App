/* eslint-disable @next/next/no-img-element */
import { response } from '../../../data.js'
import '../../styles/globals.css'
import './style.css'
import { SoundWave } from './components'

export function SpotifyCard() {
  const img = response.items[0].track.album.images[0].url
  const album = response.items[0].track.name
  const artist = response.items[0].track.artists[0].name

  return (
    <div className="w-full h-full flex flex-col md:flex-row md:items-end justify-between md:justify-normal gap-5 px-4 py-4">
      <div className="w-[60%] h-[60%] md:w-[50%] md:h-[100%] rounded-2xl overflow-hidden border-2 border-indigo-400 music_border">
        <img className="size-full" src={img} alt="Album cover" />
      </div>

      <div>
        <div>
          <p>
            <span className="font-semibold">{album}</span>

            <br />

            <span>{artist}</span>
          </p>
        </div>
      </div>

      <SoundWave />
    </div>
  )
}
