/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */

// import { redirect } from "next/navigation"

// export async function getAuthorize() {
//   const client_id = 'a8db7374af6a4f1d906bb1ce299a025b'
//   const response_type = 'code'
//   const redirect_uri = 'http://localhost:3000/'
//   const state = '1234567890abcdef'
//   const scope =
//     'user-read-currently-playing user-read-playback-position user-top-read user-read-recently-played user-read-playback-state'

//   const baseUrl = 'https://accounts.spotify.com/authorize?'

//   const params = new URLSearchParams({
//     client_id,
//     response_type,
//     redirect_uri,
//     state,
//     scope,
//   }).toString()

//   const fullUrl = baseUrl + params

//   const response = await fetch(fullUrl, {
//     method: 'GET',
//   })

//   const redirectURL = await fetch(response.url)

//   redirect(redirectURL)
// }

import { NextApiRequest, NextApiResponse } from 'next'
import SpotifyWebApi from 'spotify-web-api-node'

const api = new SpotifyWebApi({
    clientId: 'a8db7374af6a4f1d906bb1ce299a025b',
    clientSecret: '68a4a78ea4e8401db502d87557b51b26',
    redirectUri: 'http://localhost:3000/'
});

const handler = async(req: NextApiRequest, res: NextApiResponse) => {

    try {
      api.setRefreshToken('AQDTDLB1L3-ftQwsEVJYzGxwUvRenj45Dbp2_7CM_Bqo134mhKHSIR2V_zTHhn2JaC_QkHbhoKfG6qLMCM98F7KZ9zGmaklOP3bMtx-m4PkBnHcNaqiGw5szghaFn5H3sIk')
      const data = await api.refreshAccessToken()
        api.setAccessToken(data.body.access_token)

        const recentTracks = await api.getMyRecentlyPlayedTracks({
          limit: 1 })
          res.status(200).json(recentTracks.body.items[0].track)
    }
    catch (err) {
        console.log('Something went wrong!', err)
    }
}

export default handler