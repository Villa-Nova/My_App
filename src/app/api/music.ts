/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */

export async function spotifyAuthorize() {
  const scope =
    'user-read-currently-playing user-read-playback-position user-top-read user-read-recently-played user-read-playback-state'
  const state = '1234567890abcdef'

  const queryParams = new URLSearchParams({
    response_type: 'code',
    client_id: 'a8db7374af6a4f1d906bb1ce299a025b',
    scope,
    redirect_uri: 'http://localhost:3000/',
    state,
  }).toString()

  const authorizeUrl = `https://accounts.spotify.com/authorize?${queryParams}`

  const response = await fetch(authorizeUrl, {
    method: 'GET',
  })
    .then((resp) => console.log('Resp =>', resp.url))
    .catch((err) => console.error('Resp error =>', { err }))

  return response
}

export async function spotifyGetToken() {
  const baseUrl = 'https://accounts.spotify.com/api/token'
  const code =
    'AQBdOB_mfehFI65Zju4sBTqlX6FjUAFjSE_XoHCZaCPzVYfTpsZeuUvJUfNbZMWzdWwsqcVW6H5cgf4hAzifJf3ZmM5eZZ5WBlm5xhgJ44qTjvSP-thiBG-npJt6ClmK1C78kBEeRaMue7qhJBwPfx3Y96A91zUa2x6br4s7pzpP6wuNv8K4dhrOlCWVqGuKxcl-HdbOCYZqxCbSu_tiOAVgljYWt39ZdDdYZpY471neghBhbznY1Yo-40CEEkeooztqZbZxiu5pWXBv4W04sSzxEM5wXRrRM7Tsj1KmrN6_ccrmMrxXau3SqUXSpSswacBjdk3rrw8&state=1234567890abcdef'

  const params = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: 'http://localhost:3000/',
    client_id: 'a8db7374af6a4f1d906bb1ce299a025b',
    client_secret: '68a4a78ea4e8401db502d87557b51b26',
  })

  const url = `${baseUrl}?${params}`

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then((res) => console.log('Resposta API =>', res))

  return response
}

export function spotifyLastPlayedSong() {
  const baseUrl = 'https://api.spotify.com/v1/me/player/recently-played'
  const limit = 1
  const fullUrl = `${baseUrl}?limit=${limit}`
  const accessToken =
    'BQBiY10oadzCkgQ2II-_4Fjkz38FRWtEkms21ISw6dT3fYPbmIwsUYQ_F5CD7VvMXPgBB21daeSLmfeuF5hg-_aak70hS4VCCG2aZUekh2P4ecXQEB78Z_hZ0XnYi9TWh51tloB0TNRuaIVHkQjMcOFGX5vYzYzieTYkC2tEyqlMwj_gtZOt9LQe-ObezN21xzJyKfBq_Pt3oDxyiPjrUzhgIgJO'

  fetch(fullUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((data) => data.json())
    .then((data) => console.log('Resposta => ', data.items))
    .catch((err) => console.error('Erro => ', { err }))
}

// export async function getTrackInfo() {
//   const access_token =
//     'AQAxOxTuDj_fwDB1Ap2b80ZbVkDXubn8v0yRAkcu9ovfw7j85XZxzlNo2WbMzKORq8oWGVyVsqkOHG6m_NJ7CfAZG7uAkIeFPXhvOCEc_dGaVkm-KQiji1_XHhQKfDKMmTy6G5suTI0Zpr_b--_hqwo9EGArB3jGbS2apDa3JszmLPLzFOE5t7MoZz61JxzDKt5u7HbiXPovVEibNmH4qshKSDPvLhriA4azPIlEJ3BxG0uiGJZmICs1YrYg8_nmeryXA4sIy963D-S8cAIyoTkGVgSM4iIk7Wg-Yrgmhvn87vRB5mceue8XzBSdgHEoRO0j8hh4X_I&state=1234567890abcdef'

//   const response = await fetch(
//     'https://api.spotify.com/v1/me/player/recently-played',
//     {
//       headers: {
//         Authorization: 'Bearer' + access_token,
//       },
//     },
//   )

//   return console.log(response.json())
// }

/*

  REPO DE ESTUDO:
  https://github.com/AnaArsonist/anahoward.me/blob/main/src/pages/api/nowplaying.ts
  https://github.com/thelinmichael/spotify-web-api-node?tab=readme-ov-file

*/
