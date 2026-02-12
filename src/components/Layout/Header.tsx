import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/', label: '首页' },
  { to: '/ai-basic', label: 'AI 基础' },
  { to: '/tutorials', label: '工具教程' },
  { to: '/cases', label: '实操案例' },
  { to: '/practice', label: '实操练习' },
  { to: '/resources', label: '资源下载' },
  { to: '/community', label: '社区' },
  { to: '/about', label: '关于我们' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          <Link to="/" className="flex items-center gap-2 text-primary font-bold text-lg">
            <span className="text-2xl">🤖</span>
            AI 实操学堂
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === to
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg text-sm font-medium text-primary border border-primary hover:bg-primary/5"
            >
              登录 / 注册
            </Link>
            <button
              type="button"
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="菜单"
            >
              <span className="text-xl">{menuOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden py-3 border-t border-gray-100">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`px-3 py-2 rounded-lg text-sm ${
                    location.pathname === to ? 'bg-primary/10 text-primary font-medium' : 'text-gray-600'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
