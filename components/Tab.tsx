//CodeMirror Tab Small and Tablets

import { IItemTab, OnlyChildren } from "../interface/children";

export const Tab = ({ children }: OnlyChildren): JSX.Element => {
  return (
    <div className=" flex  space-x-3 justify-center p-2 rounded bg-slate-700">
      {children}
    </div>
  );
};

export const ItemTab = ({
  title,
  select,
  onClicked,
}: IItemTab): JSX.Element => {
  return (
    <div
      className={` p-1 uppercase rounded cursor-pointer ${
        select === title ? "bg-emerald-200" : "bg-transparent"
      }`}
      onClick={() => {
        onClicked("");
      }}
    >
      {title}
    </div>
  );
};
