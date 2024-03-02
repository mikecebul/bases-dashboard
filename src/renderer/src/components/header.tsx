import { ModeToggle } from './mode-toggle'

export function Header() {
  return (
    <header className="w-full">
      <nav className="flex justify-between items-center">
        <p className="text-xl font-semibold">BASES</p>
        <ModeToggle />
      </nav>
    </header>
  )
}
