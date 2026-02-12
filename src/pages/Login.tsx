import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        {isLogin ? '登录' : '注册'}
      </h1>

      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('当前为 mock，未真实登录/注册。');
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(45,130,255)]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">密码</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(45,130,255)]"
              required
            />
          </div>
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">确认密码</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(45,130,255)]"
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full py-2.5 rounded-lg font-medium text-white bg-[rgb(45,130,255)] hover:opacity-90"
          >
            {isLogin ? '登录' : '注册'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          {isLogin ? '还没有账号？' : '已有账号？'}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="ml-1 text-[rgb(45,130,255)] font-medium hover:underline"
          >
            {isLogin ? '去注册' : '去登录'}
          </button>
        </p>
      </div>

      <div className="mt-8 text-center">
        <Link to="/" className="text-[rgb(45,130,255)] font-medium hover:underline">
          ← 返回首页
        </Link>
      </div>
    </div>
  );
}
