import type { ToolCard, CaseItem } from '../types';

const API_BASE = '/api';

export async function fetchTutorials(params?: { tool?: string; difficulty?: string }) {
  const q = new URLSearchParams(params as Record<string, string>).toString();
  const res = await fetch(`${API_BASE}/tutorials${q ? '?' + q : ''}`);
  const json = await res.json();
  if (!json.success) throw new Error(json.message);
  return json.data;
}

export async function fetchTutorial(tool: string, id: string) {
  const res = await fetch(`${API_BASE}/tutorials/${tool}/${id}`);
  const json = await res.json();
  if (!json.success) throw new Error(json.message);
  return json.data;
}

export async function fetchResources(category?: string) {
  const q = category ? `?category=${encodeURIComponent(category)}` : '';
  const res = await fetch(`${API_BASE}/resources${q}`);
  const json = await res.json();
  if (!json.success) throw new Error(json.message);
  return json.data;
}

export async function fetchCases() {
  const res = await fetch(`${API_BASE}/cases`);
  const json = await res.json();
  if (!json.success) throw new Error(json.message);
  return json.data;
}

// 前端静态数据：工具导航卡片、步骤、好评、最新工具等
export const TOOL_CARDS: ToolCard[] = [
  { id: '1', name: 'ChatGPT', slug: 'chatgpt', intro: '对话式 AI，写文案、做提纲、答疑解惑', icon: '💬' },
  { id: '2', name: 'Midjourney', slug: 'midjourney', intro: '用文字描述生成图片，做海报、插画', icon: '🎨' },
  { id: '3', name: '剪映 AI', slug: 'jianying', intro: '一键成片、智能字幕，做短视频更轻松', icon: '🎬' },
  { id: '4', name: 'WPS AI', slug: 'wps-ai', intro: '写文档、做表格、做 PPT，办公好帮手', icon: '📄' },
];

export const STEPS = [
  { step: 1, title: '认识 AI', desc: '了解 AI 能做什么、怎么用，消除陌生感。' },
  { step: 2, title: '跟着教程做', desc: '一步步操作，每步都有说明和截图。' },
  { step: 3, title: '完成实操', desc: '完成小任务，真正用起来。' },
];

export const REVIEWS = [
  { name: '小明', role: '大学生', text: '跟着教程第一次用 ChatGPT 写提纲，真的能交作业了！' },
  { name: '李姐', role: '职场人', text: '用 WPS AI 写周报省了好多时间，步骤讲得很清楚。' },
  { name: '王叔', role: '零基础新手', text: '不搞理论，直接教点哪里，我们这种年纪也能学会。' },
];

export const LATEST_TOOLS = [
  { name: 'Kimi 长文档', update: '支持更长文档阅读与总结' },
  { name: '通义千问', update: '上新多轮对话与代码解释' },
  { name: '即梦', update: '国产 AI 绘图，中文提示词友好' },
];

// 实操练习区 mock
export const PRACTICE_TASKS = [
  { id: 'pt1', title: '用 AI 写一封简短邮件', requirement: '主题：向老师请假一天，语气礼貌。提交你使用的提示词和 AI 回复（可打码）。' },
  { id: 'pt2', title: '用 AI 列一份提纲', requirement: '任选一个你熟悉的题目，让 AI 列出三级提纲，并提交截图或文字。' },
];

export const MOCK_AI_FEEDBACK = '你的提示词写得很清晰，包含了主题和语气要求，AI 回复结构完整。建议：可以再加一句「感谢老师」会更有礼貌。继续保持！';
