import Script from "next/script";
import React from "react";
import Adminfooter from "./adminFooter";
import Adminnavbar from "./adminNavbar";
import Adminsidebar from "./adminSidebar";

import Head from "next/head";

const Adminmaster = (props) => {
  return (
    <>
      <Head>

      </Head>
      <Adminnavbar />
      <Adminsidebar />
      <main id="main" className="main">
        {props.children}
      </main>
      <Adminfooter />
    </>
  );
};

export default Adminmaster;
