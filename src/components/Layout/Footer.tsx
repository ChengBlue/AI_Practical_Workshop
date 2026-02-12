import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="font-bold text-primary text-lg">AI 实操学堂</Link>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              面向零基础用户的 AI 工具学习平台，不讲复杂理论，跟着做就能学会。
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-600 hover:text-primary">首页</Link></li>
              <li><Link to="/tutorials" className="text-gray-600 hover:text-primary">工具教程</Link></li>
              <li><Link to="/practice" className="text-gray-600 hover:text-primary">实操练习</Link></li>
              <li><Link to="/resources" className="text-gray-600 hover:text-primary">资源下载</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-primary">关于我们</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3">协议与版权</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-primary">用户协议</a></li>
              <li><a href="#" className="hover:text-primary">隐私政策</a></li>
              <li>© 2025 AI 实操学堂 版权所有</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
