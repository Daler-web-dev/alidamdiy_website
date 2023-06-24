import Context from "@/components/useTranslate";
import eng from "../../public/languages/eng/eng";
import ru from "../../public/languages/ru/ru";
import uz from "../../public/languages/uzb/uz";
import Layout from "@/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Router, useRouter } from "next/router";
import { createContext, useState } from "react";
import axios from "axios";
import { Loading } from "@/components/children/Loading";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", () => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
  });
  const router = useRouter();
  const { locale } = router;
  const translation = locale === "uz" ? uz : locale === "ru" ? ru : eng;
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Context.Provider value={translation}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Context.Provider>
      )}
    </>
  );
}