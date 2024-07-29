'use client'

import { Status, handleStatus } from '@/lib/status'
import { useEffect, useMemo, useState } from 'react'

export function DiscordStatus() {
  const [status, setStatus] = useState<Status | undefined>('offline')

  const fetchData = async () => {
    try {
      const data = await handleStatus()
      setStatus(data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchData()

    const intervalId = setInterval(fetchData, 4000)
    const clearIntervalId = () => clearInterval(intervalId)

    return clearIntervalId
  }, [])

  const [mode, bgClass] = useMemo(() => {
    if (!status) return ['loading', 'bg-gray-400']
    switch (status) {
      case 'idle':
        return ['idle', 'bg-[#EFDC02]']
      case 'dnd':
      case 'online':
        return ['online', 'bg-green-500']
      case 'offline':
        return ['offline', 'bg-red-600']
    }
  }, [status])

  return <span className={`size-full text-white ${bgClass}`}>{mode}</span>
}
