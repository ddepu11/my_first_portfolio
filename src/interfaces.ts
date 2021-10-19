import type { RefObject } from 'react';

export interface IProject {
  title: string;
  description: string;
  liveLink: string;
  codeLink: string;
  images: string[];
}

export interface IDirrerentRefs {
  projectsRef: RefObject<HTMLElement | null>;
  aboutRef: RefObject<HTMLElement | null>;
  connectRef: RefObject<HTMLElement | null>;
}
