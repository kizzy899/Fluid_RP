import type React from "react"
import type { Metadata } from "next"
import { LayoutClient } from "./layout-client"
import "./globals.css"


export const metadata: Metadata = {
  title: "创作者平台 - 内容创作与分享",
  description: "专业的内容创作平台，为创作者提供优质的创作环境和收益机会",
  generator: "kizzy",
  keywords: ["内容创作", "文章分享", "创作者", "阅读平台"],
  authors: [{ name: "创作者平台" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#8b5cf6", // 紫色主题
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body className="font-sans antialiased bg-black text-white min-h-screen">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
}
