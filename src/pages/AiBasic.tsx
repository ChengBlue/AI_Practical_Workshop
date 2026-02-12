import { Link } from 'react-router-dom';

export default function AiBasic() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">AI 基础</h1>
      <p className="text-base text-gray-600 leading-relaxed mb-8">
        这里不讲复杂理论，只帮你快速建立「AI 能做什么、怎么用」的直观认识，为后续实操打基础。
      </p>

      <div className="space-y-8">
        <section className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-3">什么是 AI？</h2>
          <p className="text-gray-600 leading-relaxed">
            我们说的 AI，主要指像 ChatGPT、文心一言这类「对话式 AI」：你输入文字，它回复文字或图片。你可以用它写文案、做提纲、翻译、总结、答疑等，相当于一个随时在线的助手。
          </p>
        </section>

        <section className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-3">怎么用？</h2>
          <p className="text-gray-600 leading-relaxed">
            大多数工具都是：打开网站或 App → 在输入框里输入你的问题或需求 → 等待回复。有些产品需要注册账号。具体每一步怎么做，我们在「工具教程」里按产品手把手教。
          </p>
        </section>

        <section className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-3">下一步</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            选一个你感兴趣的工具，从「工具教程」里跟着做一遍，就能快速上手。
          </p>
          <Link
            to="/tutorials"
            className="inline-block px-5 py-2.5 rounded-lg font-medium text-white bg-[rgb(45,130,255)] hover:opacity-90"
          >
            去选教程
          </Link>
        </section>
      </div>

      <div className="mt-10">
        <Link to="/" className="text-[rgb(45,130,255)] font-medium hover:underline">
          ← 返回首页
        </Link>
      </div>
    </div>
  );
}
