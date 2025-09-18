import { WidgetPlaceholder } from "@naseef0/streak/components";

const HomeLayout = () => {
  console.info("Rendering Home Layout");
  return (
    <html dir="ltr" lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <title>
          Teleflora v1 | Order Flower Delivery Online | Flowers Near Me
        </title>

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Teleflora" />
        <meta
          property="og:description"
          content="Teleflora makes it easy to order flowers online and get same day flower delivery right to your loved one's door, no matter what the occasion is."
        />
        <meta property="og:url" content="https://teleflora.com/" />
        <meta property="og:site_name" content="Teleflora" />
        <meta
          name="description"
          content="Teleflora makes it easy to order flowers online and get same day flower delivery right to your loved one's door, no matter what the occasion is."
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#E7F3E3" />
        <meta name="application-name" content="Teleflora" />
        <meta name="apple-mobile-web-app-title" content="Teleflora" />
        <link
          rel="icon"
          sizes="144x144"
          href="/images/favicon/mstile-144x144.png"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          media="all"
          href="/images/favicon/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/images/favicon/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/images/favicon/apple-touch-icon-152x152.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon.ico"
        />
        <meta name="next-head-count" content="23" />
        <link rel="stylesheet" href="/styles/global.css" />
      </head>

      <body>
        <WidgetPlaceholder id="header" type="Header" />
        <WidgetPlaceholder id="MegaMenu" type="MegaMenu" />
        <div className="home-panel">
          <WidgetPlaceholder id="HeroBanner" type="HeroBanner" />
          <WidgetPlaceholder id="Grid4" type="Grid4" />
          <WidgetPlaceholder id="ProductsOne" type="ProductsOne" />
          <WidgetPlaceholder />
        </div>
        <WidgetPlaceholder id="Footer" type="Footer" />
      </body>
    </html>
  );
};

export default HomeLayout;
