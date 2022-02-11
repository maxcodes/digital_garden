import React from 'react'
import { useTheme } from '@skagami/gatsby-plugin-dark-mode'

export default () => {
  const [theme, toggleTheme] = useTheme()
  if (theme == null) return null

  return (
    <label>
      <input
        type="checkbox"
        className="theme-changer"
        onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
        checked={theme === 'dark'}
      />{' '}
      <div className="mode-container">
        <i className="gg-sun"></i>
        <i className="gg-moon"></i>
      </div>
    </label>
  )
}
