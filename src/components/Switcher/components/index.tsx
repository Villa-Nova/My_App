import { useState } from 'react'

interface InputSwitcherProps {
  onChange: () => void
}

export function InputSwitcher({ onChange }: InputSwitcherProps) {
  const [isChecked, setIsChecked] = useState(false)

  function handleCheckBoxChange() {
    setIsChecked(!isChecked)
    onChange()
  }

  return (
    <input
      type="checkbox"
      className="theme-switch__checkbox"
      onChange={() => handleCheckBoxChange()}
      checked={isChecked}
    />
  )
}
