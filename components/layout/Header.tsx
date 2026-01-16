"use client"

import HeaderLogo from "./HeaderLogo"

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b wb-bg-glass">
      <div className="mx-auto flex h-14 max-w-screen-xl items-center justify-between px-4">
        <HeaderLogo />
      </div>
    </header>
  )
}
