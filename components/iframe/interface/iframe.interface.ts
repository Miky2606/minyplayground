export interface iIframeDeviceProperties {
  device: TDevice;
  width: string;
  height: string;
}

export type TDevice = "desktop" | "mobile" | "tablet";
export type IDevices = Record<TDevice, iIframeDeviceProperties>;

export const devices: IDevices[] = [
  {
    desktop: {
      device: "desktop",
      width: "100%",
      height: "1080px",
    },
    tablet: {
      device: "tablet",
      width: "768px",
      height: "1024px",
    },
    mobile: {
      device: "mobile",
      width: "414px",
      height: "896px",
    },
  },
];
