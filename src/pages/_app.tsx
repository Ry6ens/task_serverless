import GlobalStyles from "@/styles/Global.styled";
import "@/styles/globals.css";

import Layout from "@/components/layout/Layout";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  );
}
