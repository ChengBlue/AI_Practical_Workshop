import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchCases } from '../data/mock';
import type { CaseItem } from '../types';

export default function Cases() {
  const [cases, setCases] = useState<CaseItem[]>([]);

  useEffect(() => {
    fetchCases().then(setCases).catch(() => setCases([]));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">实操案例</h1>
      <p className="text-gray-600 mb-8">真实场景下的操作演示，可直接照着做。</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cases.map((c) => (
          <div
            key={c.id}
            className="bg-white rounded-xl p-6 border border-gray-100 card-hover shadow-sm"
          >
            <span className="text-xs font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-600">
              {c.difficulty}
            </span>
            <h2 className="mt-2 text-xl font-bold text-gray-900">{c.title}</h2>
            <p className="mt-2 text-gray-600 leading-relaxed">{c.summary}</p>
            <p className="mt-3 text-sm text-gray-500">工具：{c.tool}</p>
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
