'use client'

import { GoAlertFill } from 'react-icons/go'
import { toast } from 'sonner'
import { useState } from 'react'

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
        color: '#000000',
        background: '#fcd34d ',
        padding: '1rem',
        boxShadow: '0 0 4px #000000',
        fontFamily: 'agrandir',
        fontSize: '1rem',
        width: '365px',
      },
      icon: <GoAlertFill />,
      duration: 2000,
    })

    setTimeout(closeModal, 2000)
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
