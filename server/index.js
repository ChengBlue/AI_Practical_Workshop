import express from 'express';
import cors from 'cors';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const loadJSON = (file) => {
  const path = join(__dirname, 'data', file);
  return JSON.parse(readFileSync(path, 'utf-8'));
};

// 教程列表
app.get('/api/tutorials', (req, res) => {
  try {
    const tutorials = loadJSON('tutorials.json');
    const { tool, difficulty } = req.query;
    let list = tutorials;
    if (tool) list = list.filter((t) => t.tool === tool);
    if (difficulty) list = list.filter((t) => t.difficulty === difficulty);
    res.json({ success: true, data: list });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// 教程详情
app.get('/api/tutorials/:tool/:id', (req, res) => {
  try {
    const tutorials = loadJSON('tutorials.json');
    const { id } = req.params;
    const tutorial = tutorials.find((t) => t.id === id);
    if (!tutorial) return res.status(404).json({ success: false, message: '教程不存在' });
    res.json({ success: true, data: tutorial });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// 用户进度（mock）
app.get('/api/user/progress', (req, res) => {
  res.json({
    success: true,
    data: {
      completedTutorials: ['1'],
      completedTasks: ['task1'],
    },
  });
});

app.post('/api/user/progress', (req, res) => {
  res.json({ success: true, data: { ok: true } });
});

// 资源列表
app.get('/api/resources', (req, res) => {
  try {
    const resources = loadJSON('resources.json');
    const { category } = req.query;
    let list = resources;
    if (category) list = list.filter((r) => r.category === category);
    res.json({ success: true, data: list });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// 实操案例
app.get('/api/cases', (req, res) => {
  try {
    const cases = loadJSON('cases.json');
    res.json({ success: true, data: cases });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});
