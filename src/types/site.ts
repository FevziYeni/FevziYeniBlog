import type { ReactNode } from 'react';

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  icon: ReactNode;
  title: string;
  description: string;
};

export type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  status: string;
  demoUrl?: string;
  repoUrl?: string;
};

export type BlogPost = {
  title: string;
  category: string;
  readTime: string;
  description: string;
  slug: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type Stat = {
  value: string;
  label: string;
};
