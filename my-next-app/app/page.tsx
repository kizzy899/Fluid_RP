"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import './globals.css'


export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleCreatorClick = () => {
    router.push("/creator")
  }

  const handleLoginClick = () => {
    // 这里可以添加登录逻辑或跳转到登录页面
    alert("登录功能待实现")
  }

  const handleReadArticle = () => {
    router.push("/article")
  }

  const handlePaymentClick = () => {
    router.push("/payment")
  }

  return (
    <div className="bg-background text-foreground font-sans min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">创作平台</div>
            </div>

            {/* Search & Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="搜索文章..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <div className="absolute right-3 top-2.5 text-muted-foreground">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <a href="#" className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  科技
                </a>
                <a href="#" className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  生活
                </a>
                <a href="#" className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  艺术
                </a>
                <a href="#" className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  商业
                </a>
              </div>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-primary-foreground">U</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              释放你的
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">创作潜能</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              加入我们的创作者社区，分享你的故事，获得收益，与读者建立深度连接
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleCreatorClick}
                className="px-8 py-4 bg-primary hover:bg-primary-hover text-primary-foreground rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
              >
                成为创作者
              </button>
              <button
                onClick={handleLoginClick}
                className="px-8 py-4 border border-border hover:bg-muted text-foreground rounded-lg font-semibold text-lg transition-all"
              >
                开始阅读
              </button>
            </div>
          </div>

          {/* Animation Interactive Area */}
          <div className="relative bg-card rounded-2xl p-8 mb-16 overflow-hidden">
            <div className="absolute inset-0 gradient-card opacity-50"></div>
            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">实时收益展示</h3>
                  <p className="text-muted-foreground mb-6">观看创作者收益实时增长，每一次阅读都是价值的体现</p>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl font-bold text-success">¥2,847</div>
                    <div className="text-sm text-success">+12.5%</div>
                  </div>
                </div>
                <div className="relative h-48 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-muted-foreground">动画互动区域</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">精选推荐</h2>
          <div className="relative bg-card rounded-2xl overflow-hidden">
            <div className="aspect-[16/6] bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">本周热门文章</h3>
                <p className="text-muted-foreground">探索最受欢迎的创作内容</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">最新文章</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Article Card 1 */}
            <div className="bg-card rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/30 to-accent/30"></div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">科技</span>
                  <span className="text-xs text-muted-foreground">5分钟阅读</span>
                </div>
                <h3 className="font-semibold mb-2 text-balance">人工智能的未来发展趋势</h3>
                <p className="text-sm text-muted-foreground mb-4 text-pretty">
                  探索AI技术如何改变我们的生活方式和工作模式...
                </p>
                <button
                  onClick={handlePaymentClick}
                  className="w-full py-2 bg-primary hover:bg-primary-hover text-primary-foreground rounded-lg text-sm font-medium transition-all"
                >
                  开始阅读
                </button>
              </div>
            </div>

            {/* Article Card 2 */}
            <div className="bg-card rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-accent/30 to-primary/30"></div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full">生活</span>
                  <span className="text-xs text-muted-foreground">8分钟阅读</span>
                </div>
                <h3 className="font-semibold mb-2 text-balance">极简生活的艺术</h3>
                <p className="text-sm text-muted-foreground mb-4 text-pretty">
                  如何通过减少物质需求来获得更多的内心平静...
                </p>
                <button
                  onClick={handlePaymentClick}
                  className="w-full py-2 bg-primary hover:bg-primary-hover text-primary-foreground rounded-lg text-sm font-medium transition-all"
                >
                  开始阅读
                </button>
              </div>
            </div>

            {/* Article Card 3 */}
            <div className="bg-card rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-success/30 to-primary/30"></div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-2 py-1 bg-success/20 text-success text-xs rounded-full">商业</span>
                  <span className="text-xs text-muted-foreground">12分钟阅读</span>
                </div>
                <h3 className="font-semibold mb-2 text-balance">创业者的成长之路</h3>
                <p className="text-sm text-muted-foreground mb-4 text-pretty">
                  从想法到实现，分享成功创业者的经验和教训...
                </p>
                <button
                  onClick={handlePaymentClick}
                  className="w-full py-2 bg-primary hover:bg-primary-hover text-primary-foreground rounded-lg text-sm font-medium transition-all"
                >
                  开始阅读
                </button>
              </div>
            </div>

            {/* Article Card 4 */}
            <div className="bg-card rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-destructive/30 to-accent/30"></div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-2 py-1 bg-destructive/20 text-destructive text-xs rounded-full">艺术</span>
                  <span className="text-xs text-muted-foreground">6分钟阅读</span>
                </div>
                <h3 className="font-semibold mb-2 text-balance">数字艺术的新纪元</h3>
                <p className="text-sm text-muted-foreground mb-4 text-pretty">
                  探索NFT和区块链技术如何重新定义艺术价值...
                </p>
                <button
                  onClick={handlePaymentClick}
                  className="w-full py-2 bg-primary hover:bg-primary-hover text-primary-foreground rounded-lg text-sm font-medium transition-all"
                >
                  开始阅读
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold gradient-primary bg-clip-text text-transparent mb-4">创作平台</div>
              <p className="text-muted-foreground text-sm">连接创作者与读者的桥梁</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">产品</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    创作工具
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    数据分析
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    收益管理
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">支持</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    帮助中心
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    联系我们
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    社区
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">关注我们</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary transition-all"
                >
                  <span className="text-xs">微</span>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary transition-all"
                >
                  <span className="text-xs">博</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
