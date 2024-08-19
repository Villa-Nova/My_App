export type Status = 'idle' | 'dnd' | 'online' | 'offline'

export const handleStatus = async () => {
  const userId = process.env.NEXT_PUBLIC_DISCORD_USER_ID

  const response: Status = await fetch(
    `${process.env.NEXT_PUBLIC_DISCORD_URL}/${userId}`,
  )
    .then((res) => res.json())
    .then((res) => {
      return res?.data?.discord_status
    })

  return response
}
