import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchResources } from '../data/mock';
import type { Resource } from '../types';

const CATEGORIES = [
  { value: '', label: '全部分类' },
  { value: '新手必备', label: '新手必备' },
  { value: '提示词模板', label: '提示词模板' },
  { value: '操作手册', label: '操作手册' },
];

export default function Resources() {
  const [category, setCategory] = useState('');
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    fetchResources(category || undefined).then(setResources).catch(() => setResources([]));
  }, [category]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">资源下载</h1>
      <p className="text-gray-600 mb-8">精选手册、模板与操作说明，按需下载（当前为 mock，点击下载仅模拟）。</p>

      <div className="flex flex-wrap gap-3 mb-8">
        {CATEGORIES.map((c) => (
          <button
            key={c.value}
            type="button"
            onClick={() => setCategory(c.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium border ${
              category === c.value
                ? 'bg-[rgb(45,130,255)] text-white border-[rgb(45,130,255)]'
                : 'border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((r) => (
          <div
            key={r.id}
            className="bg-white rounded-xl p-6 border border-gray-100 card-hover shadow-sm"
          >
            <span className="text-xs font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-600">
              {r.category}
            </span>
            <h2 className="mt-2 font-bold text-gray-900">{r.name}</h2>
            <p className="mt-2 text-sm text-gray-600">{r.desc}</p>
            <p className="mt-2 text-xs text-gray-500">适用：{r.audience} · {r.size} · 下载 {r.downloads} 次</p>
            <button
              type="button"
              onClick={() => alert('当前为 mock，未真实下载。')}
              className="mt-4 w-full py-2 rounded-lg text-sm font-medium text-white bg-[rgb(45,130,255)] hover:opacity-90"
            >
              下载
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link to="/" className="text-[rgb(45,130,255)] font-medium hover:underline">
          ← 返回首页
        </Link>
      </div>
    </div>
  );
}
