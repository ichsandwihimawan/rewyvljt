import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {
  return (
    <div>
      <Helmet>
        <title>Richfams - RichFams IT Startup </title>
        <meta name="description" content="Richfams - RichFams IT Startup" />
        <meta
          name="og:title"
          property="og:title"
          content="Richfams - RichFams IT Startup"
        ></meta>
        <meta
          name="twitter:card"
          content="Richfams - RichFams IT Startup"
        ></meta>
        <link rel="canonical" href="https://rewy-react.envytheme.com/"></link>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dev-empty/image/upload/v1593069801/explore-learning.jpg"
        />
      </Helmet>
    </div>
  );
};

export default SEO;
