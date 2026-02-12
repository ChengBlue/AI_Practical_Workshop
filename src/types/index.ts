export interface TutorialSection {
  title: string;
  content: string;
  imagePlaceholder: string;
}

export interface Tutorial {
  id: string;
  tool: string;
  toolName: string;
  title: string;
  difficulty: string;
  views: number;
  cover: string;
  sections: TutorialSection[];
  relatedIds: string[];
}

export interface Resource {
  id: string;
  name: string;
  category: string;
  audience: string;
  size: string;
  downloads: number;
  desc: string;
}

export interface CaseItem {
  id: string;
  title: string;
  tool: string;
  summary: string;
  difficulty: string;
}

export interface ToolCard {
  id: string;
  name: string;
  slug: string;
  intro: string;
  icon: string;
}
