import { ReactNode } from "react";
import { IContextType } from "../components/context/interface/contextInterface";
import { TDevice } from "../components/iframe/interface/iframe.interface";

export interface Children {
  children: ReactNode;
  value: IContextType;
}

export type OnlyChildren = Omit<Children, "value">;
export type selection = TDevice | string;
export interface ITab {
  selected: string;
  setSelected: (text: selection) => void;
}

//Interface for Item Tab
export interface IItemTab {
  title: string;
  select: string;
  onClicked: (text: selection) => void;
}
