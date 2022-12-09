import { useContext, useState } from "react";
import { ITab } from "../../interface/children";
import { GlobalContext } from "../context/context";
import { ItemTab, Tab } from "../Tab";
import {
  devices,
  IDevices,
  iIframeDeviceProperties,
  TDevice,
} from "./interface/iframe.interface";

export const IframeView = (): JSX.Element => {
  const [select, setSelected] = useState<TDevice>("desktop");

  const context = useContext(GlobalContext);

  const htmlStructure = `<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
        ${context?.data[1].name}
        </style>
    </head>
    <body>
    ${context?.data[0].name}
    <script type="module">
    import confetti from 'https://cdn.skypack.dev/canvas-confetti';

    ${context?.data[2].name}
    </script>
    </body>
    </html>`;

  return (
    <div className="flex flex-col items-center">
      <div className="hidden lg:block">
        <Tab>
          {devices.map((e: IDevices) => {
            return (
              <>
                <ItemTab
                  title={e.desktop.device}
                  select={select}
                  onClicked={() => {
                    setSelected(e.desktop.device);
                  }}
                />
                <ItemTab
                  title={e.tablet.device}
                  select={select}
                  onClicked={() => {
                    setSelected(e.tablet.device);
                  }}
                />
                <ItemTab
                  title={e.mobile.device}
                  select={select}
                  onClicked={() => {
                    setSelected(e.mobile.device);
                  }}
                />
              </>
            );
          })}
        </Tab>
      </div>

      <div
        className={` overflow-y-auto flex justify-center lg:h-[90vh]  h-[50vh] w-[90vw] lg:w-[48vw]  p-1 m-1 rounded`}
      >
        <iframe
          srcDoc={htmlStructure}
          frameBorder="5"
          height={`${devices[0][select].height}`}
          width={`${devices[0][select].width}`}
          className="rounded"
        />
      </div>
    </div>
  );
};
