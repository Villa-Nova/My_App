export type Status = 'idle' | 'dnd' | 'online' | 'offline'

export const handleStatus = async () => {
  const userId = '364447483381678080'

  const response: Status = await fetch(
    `https://api.lanyard.rest/v1/users/${userId}`,
  )
    .then((res) => res.json())
    .then((res) => {
      return res?.data?.discord_status
    })

  return response
}
