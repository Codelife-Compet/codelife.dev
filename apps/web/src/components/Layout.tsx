"use-client";
import Head from "next/head";
import Footer from "@/components/Footer";
import Clouds from "./Clouds/Clouds";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

interface LayoutProps {}
const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  children,
}) => {
  const { locale, pathname } = useRouter();
  const { i18n } = useTranslation();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);

  const renderClouds = pathname !== "/";

  return (
    <>
      {hydrated && (

        <>
          <main className="mb-20">{children}</main>
          <Footer />
          {renderClouds && <Clouds />}
        </>
      )}
    </>
  );
};
export default Layout;
