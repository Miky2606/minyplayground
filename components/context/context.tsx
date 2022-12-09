import { createContext, useState } from "react";
import { OnlyChildren } from "../../interface/children";
import { DataLenguages, IContextType } from "./interface/contextInterface";

export const GlobalContext = createContext<IContextType>(null);

export const Context = ({ children }: OnlyChildren): JSX.Element => {
  const [html, setHtml] = useState<string>("");
  const [css, setCss] = useState<string>("");
  const [js, setJs] = useState<string>("");

  const value: DataLenguages = {
    data: [
      {
        lenguage: "html",
        name: html,
        setLenguages: setHtml,
      },
      {
        lenguage: "css",
        name: css,
        setLenguages: setCss,
      },
      {
        lenguage: "js",
        name: js,
        setLenguages: setJs,
      },
    ],
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
