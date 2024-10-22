import { ElementType } from "../enums";

export interface ElementBase {
  id: string;
  title: string;
  tags: string[];
  languages: string[];
  codes: string[];
  type: ElementType;
  createdAt: string;
  updatedAt: string;
}

export interface Snippet extends ElementBase {
  type: ElementType.snippet;
}

export interface Solution extends ElementBase {
  type: ElementType.solution;
  link: string;
}

export type Element = Snippet | Solution;