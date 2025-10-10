export default function PaymentPage() {
  const plans = [
    {
      id: "basic",
      name: "基础套餐",
      price: 19.9,
      duration: "月",
      features: ["每月10篇文章", "基础客服支持", "移动端访问"],
      popular: false,
    },
    {
      id: "premium",
      name: "高级套餐",
      price: 39.9,
      duration: "月",
      features: ["无限文章阅读", "优先客服支持", "离线下载", "专属内容"],
      popular: true,
    },
    {
      id: "annual",
      name: "年度套餐",
      price: 399,
      duration: "年",
      features: ["无限文章阅读", "24/7客服支持", "离线下载", "专属内容", "年度报告"],
      popular: false,
      discount: "省120元",
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
              <div className="text-gray-400">充值中心</div>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="/"
                className="border border-gray-600 hover:border-purple-500 bg-transparent text-white px-4 py-2 rounded"
              >
                返回首页
              </a>
              <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">选择您的套餐</h1>
          <p className="text-gray-400 text-lg">解锁优质内容，提升阅读体验</p>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative p-8 cursor-pointer transition-all bg-gray-800 border border-gray-700 hover:border-purple-500 ${
                plan.popular ? "ring-2 ring-purple-500" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    最受欢迎
                  </span>
                </div>
              )}
              {plan.discount && (
                <div className="absolute -top-3 right-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {plan.discount}
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">¥{plan.price}</span>
                  <span className="text-gray-400 ml-1">/{plan.duration}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <div className="w-6 h-6 rounded-full border-2 border-gray-400 mx-auto"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-gray-800 border-gray-700 p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">订单摘要</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">套餐</span>
              <span className="text-white font-medium">{plans[1].name}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">价格</span>
              <span className="text-white font-medium">¥{plans[1].price}</span>
            </div>
            <hr className="border-gray-700" />
            <div className="flex justify-between items-center text-lg font-bold">
              <span className="text-white">总计</span>
              <span className="text-purple-400">¥{plans[1].price}</span>
            </div>
          </div>
        </div>

        {/* Payment Button */}
        <div className="text-center">
          <a
            href="#"
            className="bg-purple-600 hover:bg-purple-700 px-12 py-4 text-lg font-medium rounded inline-block"
          >
            立即支付 ¥{plans[1].price}
          </a>
          <p className="text-gray-400 text-sm mt-4">
            点击支付即表示您同意我们的{" "}
            <a href="#" className="text-purple-400 hover:underline">
              服务条款
            </a>{" "}
            和{" "}
            <a href="#" className="text-purple-400 hover:underline">
              隐私政策
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
