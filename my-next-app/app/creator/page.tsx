"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function CreatorPage() {
  const [selectedTab, setSelectedTab] = useState<"overview" | "articles" | "revenue">("overview")

  // 动态显示的收益数字
  const [totalRevenue, setTotalRevenue] = useState(0)
  const [monthlyRevenue, setMonthlyRevenue] = useState(0)

  const targetTotalRevenue = 156.7
  const targetMonthlyRevenue = 89.5

  // 动画效果，每 20ms 增加一次数字，直到目标值
  useEffect(() => {
    let totalTimer: ReturnType<typeof setInterval>
    let monthTimer: ReturnType<typeof setInterval>

    if (selectedTab === "overview") {
      totalTimer = setInterval(() => {
        setTotalRevenue((prev) => {
          if (prev >= targetTotalRevenue) {
            clearInterval(totalTimer)
            return targetTotalRevenue
          }
          return +(prev + targetTotalRevenue / 50).toFixed(2) // 分50步增加
        })
      }, 20)
    }

    if (selectedTab === "revenue") {
      monthTimer = setInterval(() => {
        setMonthlyRevenue((prev) => {
          if (prev >= targetMonthlyRevenue) {
            clearInterval(monthTimer)
            return targetMonthlyRevenue
          }
          return +(prev + targetMonthlyRevenue / 50).toFixed(2)
        })
      }, 20)
    }

    return () => {
      clearInterval(totalTimer)
      clearInterval(monthTimer)
    }
  }, [selectedTab])

  const articles = [
    {
      id: 1,
      title: "人工智能如何改变我们的生活方式",
      publishDate: "2024-01-15",
      status: "已发布",
      views: 1234,
      likes: 128,
      collections: 45,
      revenue: 89.5,
    },
    {
      id: 2,
      title: "区块链技术的未来发展趋势",
      publishDate: "2024-01-10",
      status: "已发布",
      views: 856,
      likes: 92,
      collections: 31,
      revenue: 67.2,
    },
    {
      id: 3,
      title: "可持续发展与绿色科技",
      publishDate: "2024-01-08",
      status: "草稿",
      views: 0,
      likes: 0,
      collections: 0,
      revenue: 0,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-purple-400">ContentHub</div>
              <div className="text-gray-400">创作者中心</div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/">
                <button className="border border-gray-600 hover:border-purple-500 bg-transparent px-3 py-1 rounded transition">
                  返回首页
                </button>
              </Link>
              <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </nav>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tab Buttons */}
        <div className="flex space-x-4 mb-6">
          {["overview", "articles", "revenue"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded transition ${
                selectedTab === tab ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-400"
              }`}
              onClick={() => setSelectedTab(tab as "overview" | "articles" | "revenue")}
            >
              {tab === "overview" ? "数据概览" : tab === "articles" ? "文章管理" : "收益详情"}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {selectedTab === "overview" && (
          <div className="space-y-6">
            <div className="bg-gray-800 border border-gray-700 p-10 rounded-lg flex justify-center items-center shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-5xl font-extrabold text-white text-center">
                总收益<br />¥{totalRevenue.toFixed(2)}
              </div>
            </div>
          </div>
        )}

        {selectedTab === "articles" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">文章管理</h2>
              <button className="bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded transition">+ 创建新文章</button>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-6 overflow-x-auto rounded-lg">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2 text-gray-400">标题</th>
                    <th className="text-left py-2 text-gray-400">发布时间</th>
                    <th className="text-left py-2 text-gray-400">状态</th>
                    <th className="text-left py-2 text-gray-400">阅读量</th>
                    <th className="text-left py-2 text-gray-400">点赞</th>
                    <th className="text-left py-2 text-gray-400">收藏</th>
                    <th className="text-left py-2 text-gray-400">收益</th>
                  </tr>
                </thead>
                <tbody>
                  {articles.map((article) => (
                    <tr key={article.id} className="border-b border-gray-700">
                      <td className="py-2">{article.title}</td>
                      <td className="py-2">{article.publishDate}</td>
                      <td className="py-2">{article.status}</td>
                      <td className="py-2">{article.views}</td>
                      <td className="py-2">{article.likes}</td>
                      <td className="py-2">{article.collections}</td>
                      <td className="py-2">¥{article.revenue.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedTab === "revenue" && (
          <div className="space-y-6">
            <div className="bg-gray-800 border border-gray-700 p-10 rounded-lg flex justify-center items-center shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-5xl font-extrabold text-purple-400 text-center">
                本月收益<br />¥{monthlyRevenue.toFixed(2)}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
