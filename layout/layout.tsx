import Head from "next/head";
import { Context } from "../components/context/context";
import { OnlyChildren } from "../interface/children";

export const Layout = ({ children }: OnlyChildren): JSX.Element => {
  return (
    <>
      <Head>
        <title>MinyPlayground</title>
      </Head>
      <Context>{children}</Context>
    </>
  );
};
