import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchTutorials, fetchTutorial } from '../data/mock';
import type { Tutorial } from '../types';

export default function TutorialDetail() {
  const { tool, id } = useParams<{ tool: string; id: string }>();
  const [tutorial, setTutorial] = useState<Tutorial | null>(null);
  const [related, setRelated] = useState<Tutorial[]>([]);
  const [liked, setLiked] = useState(false);
  const [fav, setFav] = useState(false);

  useEffect(() => {
    if (!tool || !id) return;
    fetchTutorial(tool, id).then(setTutorial).catch(() => setTutorial(null));
  }, [tool, id]);

  useEffect(() => {
    if (!tutorial?.relatedIds?.length) return;
    fetchTutorials().then((list) => {
      const rel = list.filter((t) => tutorial.relatedIds.includes(t.id));
      setRelated(rel);
    }).catch(() => setRelated([]));
  }, [tutorial?.relatedIds]);

  if (!tutorial) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <p className="text-gray-500">加载中或教程不存在。</p>
        <Link to="/tutorials" className="text-[rgb(45,130,255)] mt-4 inline-block">返回教程列表</Link>
      </div>
    );
  }

  const toc = tutorial.sections.map((s, i) => ({ id: `section-${i}`, title: s.title }));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 左侧内容 */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setFav(!fav)}
                className={`px-4 py-2 rounded-lg text-sm font-medium border ${fav ? 'bg-red-50 border-red-200 text-red-600' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}
              >
                {fav ? '已收藏' : '收藏'}
              </button>
              <button
                type="button"
                onClick={() => setLiked(!liked)}
                className={`px-4 py-2 rounded-lg text-sm font-medium border ${liked ? 'bg-[rgb(52,199,89)]/10 border-[rgb(52,199,89)] text-[rgb(52,199,89)]' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}
              >
                {liked ? '已点赞' : '点赞'}
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 text-gray-600 hover:bg-gray-50"
              >
                评论
              </button>
            </div>
            <div className="p-6">
              <span className="text-xs font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                {tutorial.difficulty}
              </span>
              <span className="ml-2 text-sm text-gray-500">{tutorial.toolName} · 浏览 {tutorial.views} 次</span>
              <h1 className="mt-3 text-2xl font-bold text-gray-900">{tutorial.title}</h1>

              <div className="mt-8 space-y-10">
                {tutorial.sections.map((section, i) => (
                  <section key={i} id={`section-${i}`} className="scroll-mt-24">
                    <h2 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
                    <div className="prose prose-sm text-gray-700 whitespace-pre-line leading-relaxed">
                      {section.content}
                    </div>
                    <div className="mt-4 h-40 rounded-lg bg-[rgb(245,247,250)] flex items-center justify-center text-gray-400 text-sm">
                      [图片占位：{section.imagePlaceholder}]
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 右侧目录 + 相关推荐 */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm sticky top-24">
            <h3 className="font-bold text-gray-900 mb-3">本页目录</h3>
            <nav className="space-y-2">
              {toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-sm text-[rgb(45,130,255)] hover:underline"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-3">相关教程推荐</h3>
            <ul className="space-y-3">
              {related.map((t) => (
                <li key={t.id}>
                  <Link
                    to={`/tutorials/${t.tool}/${t.id}`}
                    className="text-sm text-gray-700 hover:text-[rgb(45,130,255)] line-clamp-2"
                  >
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Link to="/tutorials" className="text-[rgb(45,130,255)] font-medium hover:underline">
          ← 返回教程列表
        </Link>
      </div>
    </div>
  );
}
