import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TOOL_CARDS,
  STEPS,
  REVIEWS,
  LATEST_TOOLS,
  fetchTutorials,
  fetchCases,
} from '../data/mock';
import type { Tutorial } from '../types';
import type { CaseItem } from '../types';

export default function Home() {
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  const [cases, setCases] = useState<CaseItem[]>([]);

  useEffect(() => {
    fetchTutorials().then(setTutorials).catch(() => setTutorials([]));
    fetchCases().then(setCases).catch(() => setCases([]));
  }, []);

  const hotTutorials = tutorials.slice(0, 4);

  return (
    <div>
      {/* Banner */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            从 0 开始，轻松学会 AI 实操
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            拒绝复杂理论，跟着做就能用
          </p>
          <Link
            to="/tutorials"
            className="inline-block mt-8 px-8 py-3 rounded-xl font-medium text-white bg-[rgb(45,130,255)] hover:opacity-90 transition-opacity"
          >
            立即开始学习
          </Link>
        </div>
      </section>

      {/* AI 工具导航 */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">AI 工具导航</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOOL_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl p-6 border border-gray-100 card-hover shadow-sm"
            >
              <div className="text-3xl mb-3">{card.icon}</div>
              <h3 className="font-bold text-gray-900 text-lg">{card.name}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{card.intro}</p>
              <Link
                to={`/tutorials?tool=${card.slug}`}
                className="mt-4 inline-block px-4 py-2 rounded-lg text-sm font-medium text-[rgb(45,130,255)] border border-[rgb(45,130,255)] hover:bg-[rgb(45,130,255)] hover:text-white transition-colors"
              >
                开始学习
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 新手 3 步 */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">新手 3 步上手</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((s) => (
              <div key={s.step} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[rgb(45,130,255)] text-white flex items-center justify-center font-bold text-lg">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">第 {s.step} 步：{s.title}</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 热门教程推荐 */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">热门教程推荐</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotTutorials.map((t) => (
            <Link
              key={t.id}
              to={`/tutorials/${t.tool}/${t.id}`}
              className="bg-white rounded-xl p-5 border border-gray-100 card-hover shadow-sm block"
            >
              <span className="text-xs font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                {t.difficulty}
              </span>
              <h3 className="mt-2 font-bold text-gray-900 line-clamp-2">{t.title}</h3>
              <p className="mt-2 text-sm text-gray-500">浏览 {t.views} 次</p>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link to="/tutorials" className="text-[rgb(45,130,255)] font-medium hover:underline">
            查看全部教程 →
          </Link>
        </div>
      </section>

      {/* 实操案例展示 */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">实操案例展示</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cases.slice(0, 4).map((c) => (
              <Link
                key={c.id}
                to="/cases"
                className="rounded-xl p-5 border border-gray-100 bg-gray-50/50 hover:bg-gray-50 hover:border-gray-200 transition-colors block"
              >
                <h3 className="font-bold text-gray-900">{c.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{c.summary}</p>
                <span className="inline-block mt-2 text-xs text-gray-500">{c.tool} · {c.difficulty}</span>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="/cases" className="text-[rgb(45,130,255)] font-medium hover:underline">
              更多案例 →
            </Link>
          </div>
        </div>
      </section>

      {/* 学习成果 / 用户好评 */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">学习成果 / 用户好评</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <p className="text-gray-700 leading-relaxed">「{r.text}」</p>
              <p className="mt-4 text-sm font-medium text-gray-900">{r.name}</p>
              <p className="text-xs text-gray-500">{r.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 最新 AI 工具更新 */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">最新 AI 工具更新</h2>
          <ul className="space-y-4">
            {LATEST_TOOLS.map((t, i) => (
              <li key={i} className="flex items-center gap-4 py-2 border-b border-gray-100 last:border-0">
                <span className="font-medium text-gray-900 w-28">{t.name}</span>
                <span className="text-gray-600 text-sm">{t.update}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
