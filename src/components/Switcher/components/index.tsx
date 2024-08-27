'use client'

import { useState } from 'react'
import { toast } from 'sonner'

export function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(true)
  const alertPhrase = "Light mode isn't necessary. Wear glasses."

  function closeModal() {
    setIsOpen(true)
  }

  function handleSwitchAndModal() {
    setIsOpen((prev) => !prev)

    toast(alertPhrase, {
      style: {
        border: 'none',
        color: '#cbd5e1',
        background: '#db2777',
        padding: '1rem',
      },
      duration: 3000,
    })

    setTimeout(closeModal, 3000)
  }

  return (
    <input
      type="checkbox"
      className="theme-switch__checkbox"
      onChange={() => handleSwitchAndModal()}
      checked={isOpen}
    />
  )
}
