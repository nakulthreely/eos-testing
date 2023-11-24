import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../lib/gtag";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta http-equiv="origin-trial" content=" AjnsJ8kellgF8AiHLBeUBJWBrCGvfJoumtdvGmLF9avx8cUpBu58v3KLil/s1BumxQKbxw6v4iM8UXIKZALKRg4AAACHeyJvcmlnaW4iOiJodHRwczovL2Vvcy10ZXN0aW5nLnZlcmNlbC5hcHA6NDQzIiwiZmVhdHVyZSI6IkRpc2FibGVUaGlyZFBhcnR5U3RvcmFnZVBhcnRpdGlvbmluZyIsImV4cGlyeSI6MTcyNTQwNzk5OSwiaXNTdWJkb21haW4iOnRydWV9"/>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
          {/* GODLIKE */}
          <link rel="stylesheet" href="assets/css/godlike.css" />
          {/* Custom Styles */}
          <link rel="stylesheet" href="assets/css/custom.css" />
          <link rel="stylesheet" href="true" />
          {/* START: Styles */}
          {/* Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300i,400,400i,700%7cMarcellus+SC"
            rel="stylesheet"
          />
          {/* Bootstrap */}
          <link
            rel="stylesheet"
            href="assets/vendor/bootstrap/dist/css/bootstrap.min.css"
          />
          {/* FontAwesome */}
          <script defer src="assets/vendor/fontawesome-free/js/all.js"></script>
          <script
            defer
            src="assets/vendor/fontawesome-free/js/v4-shims.js"
          ></script>
          {/* IonIcons */}
          <link
            rel="stylesheet"
            href="assets/vendor/ionicons/css/ionicons.min.css"
          />
          {/* Revolution Slider */}
          <link
            rel="stylesheet"
            href="assets/vendor/revolution/css/settings.css"
          />
          <link
            rel="stylesheet"
            href="assets/vendor/revolution/css/layers.css"
          />
          <link
            rel="stylesheet"
            href="assets/vendor/revolution/css/navigation.css"
          />
          {/* Flickity */}
          <link
            rel="stylesheet"
            href="assets/vendor/flickity/dist/flickity.min.css"
          />
          {/* Photoswipe */}
          <link
            rel="stylesheet"
            href="assets/vendor/photoswipe/dist/photoswipe.css"
          />
          <link
            rel="stylesheet"
            href="assets/vendor/photoswipe/dist/default-skin/default-skin.css"
          />
          {/* DateTimePicker */}
          <link
            rel="stylesheet"
            href="assets/vendor/jquery-datetimepicker/build/jquery.datetimepicker.min.css"
          />
          {/* Summernote */}
          <link
            rel="stylesheet"
            href="assets/vendor/summernote/dist/summernote-bs4.css"
          />

          {/* END: Styles */}
          {/* jQuery */}
          <script src="assets/vendor/jquery/dist/jquery.min.js"></script>
          {/* START: Scripts */}
          {/* Object Fit Polyfill */}
          <script src="assets/vendor/object-fit-images/dist/ofi.min.js"></script>
          {/* GSAP */}
          <script src="assets/vendor/gsap/dist/gsap.min.js"></script>
          <script src="assets/vendor/gsap/dist/ScrollToPlugin.min.js"></script>

          {/* GODLIKE */}
          <script src="assets/js/godlike.min.js"></script>
          <script src="assets/js/godlike-init.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
