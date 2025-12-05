import React from "react";
import Link from "next/link";
import Script from "next/script";
import Head from "next/head";
const Adminfooter = () => {
  return (
    <>
      <Head>
        <script src="../../adminAssets/assets/js/main.js"></script>
      </Head>
      <footer id="footer" className="footer">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>NiceAdmin</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </footer>

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
      {/* <Script src="../../adminAssets/assets/js/main.js" /> */}
    </>
  );
};

export default Adminfooter;
