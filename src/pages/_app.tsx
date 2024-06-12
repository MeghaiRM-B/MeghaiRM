import React from 'react'
import type { AppProps } from "next/app";
import {useEffect, useState} from 'react';
import { ConfigProvider } from "antd";

import theme from "../theme/themeConfig";

function SafeHydrate({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div suppressHydrationWarning>
      {typeof document === 'undefined' ? null : children}
    </div>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  const [isServer, setIsServer] = useState(true);
  useEffect(() => {
    setIsServer(false);
  }, []);
  if (isServer) return null;
  
  return (
    <SafeHydrate>
      <ConfigProvider theme={theme}>
        <Component {...pageProps} />
      </ConfigProvider>
    </SafeHydrate>
  );
}
