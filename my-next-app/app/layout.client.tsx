"use client"

import type React from "react"

import { Analytics } from "@vercel/analytics/next"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

export function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const searchParams = useSearchParams()

  return (
    <>
      {/* <CHANGE> 添加主要内容区域包装器 */}
      <Suspense fallback={<div>Loading...</div>}>
        <main className="min-h-screen">{children}</main>
      </Suspense>
      <Analytics />
    </>
  )
}
