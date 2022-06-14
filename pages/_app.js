import '../styles/global.css'

export default function App({ Component, pageProps }) {
    debugger
    return <Component {...pageProps} />;
}

// import React from "react"
// import App from "next/app"

// export default class App extends App {
//     constructor({ Component, pageProps }) {
//         // super({Component:Component, pageProps:pageProps})

//         // super(pageProps);

//         //    this.Component = Component

//         super({Component, pageProps})
//     }

//     render() {
//         return (
//             <Component {...pageProps}></Component>
//         )
//     }
// }