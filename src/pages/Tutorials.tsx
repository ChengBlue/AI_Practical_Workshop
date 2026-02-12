import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { fetchTutorials } from '../data/mock';
import type { Tutorial } from '../types';

const DIFFICULTY_OPTIONS = [
  { value: '', label: '全部' },
  { value: '入门', label: '入门' },
  { value: '进阶', label: '进阶' },
];

const TOOL_OPTIONS = [
  { value: '', label: '全部工具' },
  { value: 'chatgpt', label: 'ChatGPT' },
  { value: 'midjourney', label: 'Midjourney' },
  { value: 'wps-ai', label: 'WPS AI' },
  { value: 'jianying', label: '剪映 AI' },
];

export default function Tutorials() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tool = searchParams.get('tool') || '';
  const difficulty = searchParams.get('difficulty') || '';
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchTutorials({ tool: tool || undefined, difficulty: difficulty || undefined })
      .then(setTutorials)
      .catch(() => setTutorials([]))
      .finally(() => setLoading(false));
  }, [tool, difficulty]);

  const updateFilter = (key: string, value: string) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else next.delete(key);
    setSearchParams(next);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">工具教程</h1>
      <p className="text-gray-600 mb-8">按工具和难度筛选，跟着步骤一步步学。</p>

      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">工具：</span>
          <select
            value={tool}
            onChange={(e) => updateFilter('tool', e.target.value)}
            className="rounded-lg border border-gray-200 px-3 py-2 text-sm"
          >
            {TOOL_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">难度：</span>
          <select
            value={difficulty}
            onChange={(e) => updateFilter('difficulty', e.target.value)}
            className="rounded-lg border border-gray-200 px-3 py-2 text-sm"
          >
            {DIFFICULTY_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      </div>

      {loading ? (
        <p className="text-gray-500">加载中...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((t) => (
            <Link
              key={t.id}
              to={`/tutorials/${t.tool}/${t.id}`}
              className="bg-white rounded-xl p-6 border border-gray-100 card-hover shadow-sm block"
            >
              <span className="text-xs font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                {t.difficulty}
              </span>
              <span className="ml-2 text-xs text-gray-500">{t.toolName}</span>
              <h2 className="mt-3 font-bold text-gray-900 text-lg line-clamp-2">{t.title}</h2>
              <p className="mt-2 text-sm text-gray-500">浏览 {t.views} 次</p>
            </Link>
          ))}
        </div>
      )}

      {!loading && tutorials.length === 0 && (
        <p className="text-gray-500">暂无符合条件的教程。</p>
      )}

      <div className="mt-10">
        <Link to="/" className="text-[rgb(45,130,255)] font-medium hover:underline">
          ← 返回首页
        </Link>
      </div>
    </div>
  );
}
