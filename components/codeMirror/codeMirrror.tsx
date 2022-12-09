import { atomone } from "@uiw/codemirror-theme-atomone";
import CodeMirror from "@uiw/react-codemirror";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/context";
import { IDataContext } from "../context/interface/contextInterface";
import { ICodeMirrorProperties } from "./interface/codemirror.interface";
import { ITab } from "../../interface/children";
import { ItemTab, Tab } from "../Tab";
import Image from "next/image";
//CodeMirrorDiv to see the div codemirror

export const CodeMirrorDiv = (): JSX.Element => {
  const context = useContext(GlobalContext);
  return (
    <div className="flex flex-col">
      <div className="hidden lg:flex lg:flex-col">
        <CodeMirrorDesktop />
      </div>

      <div className="lg:hidden">
        <CodeMirrorSmallTablets />
      </div>
    </div>
  );
};

//CodeMirror Device Desktop

const CodeMirrorDesktop = (): JSX.Element => {
  const context = useContext(GlobalContext);
  return (
    <>
      {context?.data.map((e: IDataContext) => (
        <div key={e.lenguage}>
          <CodeMirrorView
            lenguages={e.lenguage}
            width={"50vw"}
            height={"30vh"}
          />
        </div>
      ))}
    </>
  );
};

//CodeMirror Device Small and Tablets

const CodeMirrorSmallTablets = (): JSX.Element => {
  const context = useContext(GlobalContext);
  const [selected, setSelected] = useState<string>("html");
  return (
    <div className="m-auto flex flex-col  items-center">
      <CodeMirrorTab selected={selected} setSelected={setSelected} />
      {context?.data.map((e: IDataContext) => (
        <div
          key={e.lenguage}
          className={`${selected === e.lenguage ? "block" : "hidden"}`}
        >
          <CodeMirrorView
            lenguages={e.lenguage}
            width={"90vw"}
            height={"40vh"}
          />
        </div>
      ))}
    </div>
  );
};

//CodeMirror Tab Small and Tablets

const CodeMirrorTab = ({ selected, setSelected }: ITab): JSX.Element => {
  const context = useContext(GlobalContext);

  return (
    <Tab>
      {context?.data.map((e: IDataContext) => (
        <ItemTab
          key={e.lenguage}
          title={e.lenguage}
          select={selected}
          onClicked={() => {
            setSelected(e.lenguage);
          }}
        />
      ))}
    </Tab>
  );
};

//CodeMirrorView to see the editor

export const CodeMirrorView = ({
  lenguages,
  width,
  height,
}: ICodeMirrorProperties): JSX.Element => {
  const context = useContext(GlobalContext);
  const handle = (e: string) => {
    context!.data.forEach((d: IDataContext) => {
      if (d.lenguage === lenguages) return d.setLenguages(e);
    });
  };

  return (
    <div className="text-lg m-1">
      <Image
        width={100}
        height={100}
        className="fixed z-10 right-0 lg:right-1/2 mr-10 lg:-mr-2 lg:m-2 w-12 "
        src={`/icons/${lenguages}.svg`}
        alt={lenguages}
      />

      <CodeMirror
        width={width}
        height={height}
        extensions={[
          lenguages === "js"
            ? loadLanguage("javascript")!
            : lenguages === "css"
            ? loadLanguage("css")!
            : loadLanguage("html")!,
        ]}
        theme={atomone}
        onChange={handle}
      />
    </div>
  );
};
