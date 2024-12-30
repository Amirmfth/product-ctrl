import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased font-body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
