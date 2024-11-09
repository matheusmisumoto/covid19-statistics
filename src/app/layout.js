export const metadata = {
    title: 'COVID-19 Statistics - The latest data about the Coronavirus pandemic',
    description: 'Data about the COVID-19 around the world. Website created using ReactJS, with information from public API',
  }
  
export default function RootLayout({ children }) {
    return (
        <html lang="en">
          <head>
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="Data about the COVID-19 around the world. Website created using ReactJS, with information from public API" />
          </head>
          <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root">{children}</div>
          </body>
        </html>
    )
  }