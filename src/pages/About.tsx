import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">关于我们</h1>

      <div className="space-y-6 text-base text-gray-600 leading-relaxed">
        <p>
          AI 实操学堂是一个面向零基础用户的 AI 工具学习平台。我们不讲复杂理论，只做「跟着做就能学会」的教程与实操，帮助学生、职场人和新手快速上手 ChatGPT、Midjourney、剪映 AI、WPS AI 等工具。
        </p>
        <p>
          如有合作或反馈，欢迎通过站内留言或邮件联系我们（当前为演示项目，联系方式为 mock）。
        </p>
      </div>

      <div className="mt-10">
        <Link to="/" className="text-[rgb(45,130,255)] font-medium hover:underline">
          ← 返回首页
        </Link>
      </div>
    </div>
  );
}
