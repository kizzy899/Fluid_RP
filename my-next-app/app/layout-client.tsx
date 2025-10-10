"use client"

import type React from "react"

import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"

export function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Suspense
        fallback={<div className="flex items-center justify-center min-h-screen text-purple-400">Loading...</div>}
      >
        <main className="min-h-screen">{children}</main>
      </Suspense>
      <Analytics />
    </>
  )
}
