import { ElementType } from "@/enums";

export interface IElement {
  id: string;
  title: string;
  tags: string[];
  languages: string[];
  codes: string[];
  link?: string;
  type: ElementType;
}  