import { ElementType } from "@/enums/elementType";

export interface IElement {
  id: string;
  title: string;
  tags: string[];
  languages: string[];
  codes: string[];
  link?: string;
  type: ElementType;
}  