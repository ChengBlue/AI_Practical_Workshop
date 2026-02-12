import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AiBasic from './pages/AiBasic';
import Tutorials from './pages/Tutorials';
import TutorialDetail from './pages/TutorialDetail';
import Cases from './pages/Cases';
import Practice from './pages/Practice';
import Resources from './pages/Resources';
import Community from './pages/Community';
import About from './pages/About';
import Login from './pages/Login';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="ai-basic" element={<AiBasic />} />
        <Route path="tutorials" element={<Tutorials />} />
        <Route path="tutorials/:tool/:id" element={<TutorialDetail />} />
        <Route path="cases" element={<Cases />} />
        <Route path="practice" element={<Practice />} />
        <Route path="resources" element={<Resources />} />
        <Route path="community" element={<Community />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}
