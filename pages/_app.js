import "../styles/global.css";

// export default function App({ Component, pageProps }) {
//     return <Component {...pageProps} />;
// }

import React from "react";
// import App from "next/app";
import "../styles/global.css";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* // Responsive meta tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* // bootstrap CDN */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
