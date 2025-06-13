import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from '../pages/components/Layout'
import PageTransitionLoader from "./components/PageTransitionLoader";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
);
}
