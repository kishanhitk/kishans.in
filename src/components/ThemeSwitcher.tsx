import { Monitor, Moon, Sun } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

type Theme = 'system' | 'light' | 'dark'

const STORAGE_KEY = 'theme'

const OPTIONS: { value: Theme; label: string; Icon: typeof Sun }[] = [
  { value: 'system', label: 'System theme', Icon: Monitor },
  { value: 'light', label: 'Light theme', Icon: Sun },
  { value: 'dark', label: 'Dark theme', Icon: Moon },
]

function getStoredTheme(): Theme {
  // Guard on `window`, not `localStorage`: Node 24 exposes a global
  // `localStorage` stub during SSR whose methods throw, so a typeof-localStorage
  // check passes on the server and then blows up on the first getItem call.
  if (typeof window === 'undefined') return 'system'
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === 'light' || stored === 'dark' ? stored : 'system'
}

// Mirror of the inline <head> script in Layout.astro. Kept in sync so a click
// updates the DOM immediately, before the next navigation re-runs the head script.
function applyTheme(theme: Theme) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const isDark = theme === 'dark' || (theme === 'system' && prefersDark)
  document.documentElement.classList.toggle('dark', isDark)
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', isDark ? '#202125' : '#ffffff')
}

export default function ThemeSwitcher() {
  const [theme, setTheme] = React.useState<Theme>(getStoredTheme)

  React.useEffect(() => {
    // Re-sync on hydration and when another tab changes the preference.
    setTheme(getStoredTheme())
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setTheme(getStoredTheme())
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const select = (next: Theme) => {
    if (next === 'system') localStorage.removeItem(STORAGE_KEY)
    else localStorage.setItem(STORAGE_KEY, next)
    setTheme(next)
    applyTheme(next)
  }

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className="inline-flex items-center gap-0.5 rounded-full border border-border p-0.5"
    >
      {OPTIONS.map(({ value, label, Icon }) => {
        const active = theme === value
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={label}
            title={label}
            onClick={() => select(value)}
            className={cn(
              'flex h-7 w-7 items-center justify-center rounded-full transition-colors',
              'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
              active
                ? 'bg-secondary text-foreground'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            <Icon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
          </button>
        )
      })}
    </div>
  )
}
