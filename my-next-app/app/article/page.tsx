"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ArticlePage() {
  const [liked, setLiked] = useState(false)
  const [collected, setCollected] = useState(false)
  const [comments, setComments] = useState("")

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-purple-400">ContentHub</div>
              <div className="hidden md:flex space-x-6">
                <a href="/" className="text-gray-300 hover:text-purple-400 transition-colors">
                  首页
                </a>
                <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                  科技
                </a>
                <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                  生活
                </a>
                <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                  娱乐
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="搜索文章..."
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-balance">人工智能如何改变我们的生活方式</h1>
          <div className="flex items-center space-x-4 text-gray-400 mb-6">
            <span>作者：张三</span>
            <span>•</span>
            <span>2024年1月15日</span>
            <span>•</span>
            <span>阅读时间：8分钟</span>
          </div>
          <img src="/placeholder.jpg" alt="文章封面" className="w-full h-64 object-cover rounded-lg" />
        </div>

        {/* Article Body */}
        <article className="prose prose-invert prose-lg max-w-none mb-12">
          <p className="text-gray-300 leading-relaxed mb-6">
            人工智能正在以前所未有的速度改变着我们的生活。从智能手机中的语音助手，到自动驾驶汽车，再到个性化的内容推荐系统，AI技术已经深入到我们日常生活的方方面面。
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">AI在日常生活中的应用</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            在家庭生活中，智能家居系统可以根据我们的习惯自动调节温度、照明和安全系统。在工作中，AI助手帮助我们处理邮件、安排会议、分析数据。在娱乐方面，流媒体平台使用AI算法为我们推荐可能喜欢的内容。
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">未来的发展趋势</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            随着技术的不断进步，我们可以期待看到更多创新的AI应用。从医疗诊断到教育个性化，从环境保护到太空探索，AI将在更多领域发挥重要作用。
          </p>

          <blockquote className="border-l-4 border-purple-500 pl-6 my-8 text-gray-300 italic">
            "人工智能不是要取代人类，而是要增强人类的能力，让我们能够专注于更有创造性和意义的工作。"
          </blockquote>

          <p className="text-gray-300 leading-relaxed">
            总的来说，AI技术的发展为我们带来了巨大的机遇，同时也提出了新的挑战。关键是要以负责任的方式发展和应用这些技术，确保它们能够真正造福人类社会。
          </p>
        </article>

        {/* Interaction Bar */}
        <div className="flex items-center justify-between py-6 border-t border-gray-800">
          <div className="flex items-center space-x-6">
            <Button
              variant={liked ? "default" : "outline"}
              onClick={() => setLiked(!liked)}
              className={`${liked ? "bg-purple-600 hover:bg-purple-700" : "border-gray-600 hover:border-purple-500"}`}
            >
              👍 {liked ? "已点赞" : "点赞"} (128)
            </Button>

            <Button
              variant={collected ? "default" : "outline"}
              onClick={() => setCollected(!collected)}
              className={`${collected ? "bg-purple-600 hover:bg-purple-700" : "border-gray-600 hover:border-purple-500"}`}
            >
              ⭐ {collected ? "已收藏" : "收藏"} (45)
            </Button>

            <Button variant="outline" className="border-gray-600 hover:border-purple-500 bg-transparent">
              💬 评论 (23)
            </Button>

            <Button variant="outline" className="border-gray-600 hover:border-purple-500 bg-transparent">
              📤 分享
            </Button>
          </div>

          <div className="text-gray-400">阅读量：1,234</div>
        </div>

        {/* Comments Section */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-6">评论区</h3>

          <div className="mb-6">
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="写下你的想法..."
              className="w-full bg-gray-800 text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              rows={4}
            />
            <div className="flex justify-end mt-2">
              <Button className="bg-purple-600 hover:bg-purple-700">发表评论</Button>
            </div>
          </div>

          {/* Sample Comments */}
          <div className="space-y-4">
            <Card className="bg-gray-800 border-gray-700 p-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-medium text-white">李四</span>
                    <span className="text-gray-400 text-sm">2小时前</span>
                  </div>
                  <p className="text-gray-300">很有见地的文章！AI确实在改变我们的生活，期待看到更多相关内容。</p>
                </div>
              </div>
            </Card>

            <Card className="bg-gray-800 border-gray-700 p-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-medium text-white">王五</span>
                    <span className="text-gray-400 text-sm">5小时前</span>
                  </div>
                  <p className="text-gray-300">作为一名程序员，我深深感受到AI对我们行业的影响。技术发展太快了！</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      {/* Related Articles */}
      <section className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">相关文章推荐</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="bg-gray-800 border-gray-700 overflow-hidden hover:border-purple-500 transition-colors"
              >
                <img src="/placeholder.jpg" alt={`相关文章${i}`} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <div className="text-purple-400 text-sm mb-2">科技</div>
                  <h3 className="font-bold text-white mb-2">机器学习在医疗领域的应用前景</h3>
                  <p className="text-gray-400 text-sm mb-4">探索AI技术如何革命性地改变医疗诊断和治疗方式...</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 hover:border-purple-500 bg-transparent"
                  >
                    阅读更多
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
