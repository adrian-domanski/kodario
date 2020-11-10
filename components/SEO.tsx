import Head from "next/head";
import React from "react";

interface IProps {
  title?: string;
  description?: string;
  pageTitle?: string;
}

const META_DEFAULT = {
  description:
    "Zajmuję się tworzeniem nowoczesnych i wydajnych stron internetowych. Chętnie zaprojektuję i zrealizuję stronę, która pomożę Ci w rozwoju twojej działalności.",
  title: "Kodario | Nowoczesne strony internetowe",
  titeTemplate: "| Kodario",
};

const SEO: React.FC<IProps> = ({
  description = META_DEFAULT.description,
  title = META_DEFAULT.title,
  pageTitle,
}) => {
  return (
    <Head>
      <title>
        {pageTitle ? `${pageTitle} ${META_DEFAULT.titeTemplate}` : title}
      </title>
      <meta name="description" content={description} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/meta/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/meta/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/meta/favicon-16x16.png"
      />
      <link rel="manifest" href="/meta/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/meta/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="/meta/favicon.ico" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="msapplication-config" content="/meta/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff"></meta>
    </Head>
  );
};

export default SEO;
