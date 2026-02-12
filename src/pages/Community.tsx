import { Link } from 'react-router-dom';

export default function Community() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">社区</h1>
      <p className="text-gray-600 mb-8">交流心得、提问答疑、分享作品（当前为占位页，功能后续开放）。</p>

      <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm text-center">
        <p className="text-gray-600 leading-relaxed">
          社区功能正在筹备中，敬请期待。你可以先完成教程与实操练习，有问题可到「关于我们」查看联系方式。
        </p>
        <Link
          to="/practice"
          className="inline-block mt-6 px-5 py-2.5 rounded-lg font-medium text-white bg-[rgb(45,130,255)] hover:opacity-90"
        >
          去实操练习
        </Link>
      </div>

      <div className="mt-10">
        <Link to="/" className="text-[rgb(45,130,255)] font-medium hover:underline">
          ← 返回首页
        </Link>
      </div>
    </div>
  );
}
