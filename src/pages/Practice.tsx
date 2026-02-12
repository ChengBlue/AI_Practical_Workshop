import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRACTICE_TASKS, MOCK_AI_FEEDBACK } from '../data/mock';

export default function Practice() {
  const [selectedTask, setSelectedTask] = useState<string | null>(null);
  const [submitText, setSubmitText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!submitText.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">实操练习区</h1>
      <p className="text-gray-600 mb-8">选一个任务，在下方模拟对话区完成并提交，获得模拟点评。</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 左侧：任务列表 */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">实操任务列表</h2>
          <div className="space-y-4">
            {PRACTICE_TASKS.map((task) => (
              <div
                key={task.id}
                onClick={() => {
                  setSelectedTask(task.id);
                  setSubmitted(false);
                  setSubmitText('');
                }}
                className={`rounded-xl p-5 border cursor-pointer transition-all card-hover ${
                  selectedTask === task.id
                    ? 'border-[rgb(45,130,255)] bg-[rgb(45,130,255)]/5 shadow-sm'
                    : 'border-gray-100 bg-white hover:border-gray-200'
                }`}
              >
                <h3 className="font-bold text-gray-900">{task.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{task.requirement}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 右侧：AI 模拟操作区 + 提交 */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-[rgb(245,247,250)] px-4 py-3 border-b border-gray-200">
              <span className="font-medium text-gray-700">AI 模拟对话区（简化版）</span>
            </div>
            <div className="p-4 min-h-[200px]">
              {selectedTask ? (
                <div className="space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-[rgb(45,130,255)] text-white rounded-lg px-4 py-2 max-w-[80%] text-sm">
                      请在此输入你的提示词或问题，模拟与 AI 对话。
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-[rgb(245,247,250)] rounded-lg px-4 py-2 max-w-[80%] text-sm text-gray-700">
                      你好！我是模拟 AI 助手。你可以输入任意内容，提交后会在下方看到模拟点评。
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-gray-400 text-sm">请先在左侧选择一个实操任务。</p>
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-3">作业提交</h3>
            <textarea
              value={submitText}
              onChange={(e) => setSubmitText(e.target.value)}
              placeholder="输入你的提示词、AI 回复摘要或作业内容（可多行）..."
              className="w-full h-32 rounded-lg border border-gray-200 px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[rgb(45,130,255)]"
              disabled={!selectedTask}
            />
            <button
              type="submit"
              disabled={!selectedTask || !submitText.trim()}
              className="mt-4 px-5 py-2.5 rounded-lg font-medium text-white bg-[rgb(45,130,255)] disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90"
            >
              提交
            </button>
          </form>

          {submitted && (
            <div className="bg-[rgb(52,199,89)]/10 border border-[rgb(52,199,89)]/30 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">AI 模拟点评</h3>
              <p className="text-gray-700 leading-relaxed">{MOCK_AI_FEEDBACK}</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-10">
        <Link to="/" className="text-[rgb(45,130,255)] font-medium hover:underline">
          ← 返回首页
        </Link>
      </div>
    </div>
  );
}
