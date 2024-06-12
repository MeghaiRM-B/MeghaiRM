import Documnet, { Html, Head, Main, NextScript } from "next/document";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import type { DocumentContext } from "next/document";

function MyDocument() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const cache = createCache();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () => 
    originalRenderPage({
      enhanceApp: (App) => (props) => (
        <StyleProvider cache={cache}>
          <App {...props}></App>
        </StyleProvider>
      )
    });

    const initalProps = await Documnet.getInitialProps(ctx);
    const style = extractStyle(cache, true);
    return {
      ...initalProps,
      style: (
        <>
          {initalProps.styles}
          <style dangerouslySetInnerHTML={{ __html: style}} />
        </>
      )
    }
}

export default MyDocument;