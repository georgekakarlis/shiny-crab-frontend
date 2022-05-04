import Head from "next/head";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import Navbar from "./Navbar";

const Layout = (props: { metaInfo: { title: any; metaKeywords: any; metaDesc: any; }; children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
  const { title, metaKeywords, metaDesc } = props.metaInfo;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDesc} />
        <meta name="keywords" content={metaKeywords} />
        <link href="/static/styles.css" rel="stylesheet" key="mainstyle" />
      </Head>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <div
          id="content"
          className="flex-grow mx-auto p-8 w-full shadow rounded bg-white"
        >
          {props.children}
        </div>

        
      </div>
    </>
  );
};

Layout.defaultProps = {
  metaInfo: {
    title: "Default Title",
    metaKeywords: "Default metaKeywords",
    metaDesc: "Default metaDesc",
  },
};

export default Layout;