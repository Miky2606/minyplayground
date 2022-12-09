export interface IContext {
  data: IDataContext[];
  hola: string;
}

export type DataLenguages = Omit<IContext, "hola">;
export type IContextType = IContext | DataLenguages | null;
export interface IDataContext {
  lenguage: string;
  name: string;
  setLenguages: (text: string) => void;
}
