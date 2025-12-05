import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { useEffect } from "react";

export default function Document() {
  // var loadScript = function (src) {
  //     var tag = document.createElement('script');
  //     tag.async = false;
  //     tag.src = src;
  //     document.getElementsById('reportsChart');
  // }
  // loadScript('../../adminAssets/assets/vendor/apexcharts/apexcharts.min.js')
  // loadScript('../../adminAssets/assets/vendor/chart.js/chart.min.js')
  // loadScript('../../adminAssets/assets/vendor/echarts/echarts.min.js')
  // loadScript('../../adminAssets/chartStyle1.js')

  return (
    <Html>
      <Head>
     
        <script src="../../adminAssets/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="../../adminAssets/assets/vendor/quill/quill.min.js"></script>
        <script src="../../adminAssets/assets/vendor/simple-datatables/simple-datatables.js"></script>
        <script src="../../adminAssets/assets/vendor/tinymce/tinymce.min.js"></script>
        <script src="../../adminAssets/assets/vendor/php-email-form/validate.js"></script>
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
