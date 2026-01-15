"use client"

import Link from "next/link"
import { TypographyP } from "../typography/headers"


export default function HeaderLogo() {
  return (
    <Link
      href="/"
      className="font-semibold tracking-tight text-foreground flex gap-2 items-center align-center"
     >
      <img src="/logo.png" className="w-7" />
      <p className="font-bold">WannaBar</p>
    </Link>
  )
}
