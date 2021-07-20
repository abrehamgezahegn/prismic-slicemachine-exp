import React from "react";
import { RichText } from "prismic-reactjs";
import { Link } from "prismic-reactjs";

const MySlice = ({ slice }) => (
  <section>
    {console.log("slice", slice)}
    <div className="banner-content container">
      <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
      <h2 className="banner-title">{RichText.asText(slice.primary.title)}</h2>
      {/* /* you might want to use a lib here (eg. react-oembed-container) */}
      {/* <div dangerouslySetInnerHTML={{ __html: slice.primary.youtube }} /> */}
      <div className="banner-description">
        <RichText render={slice.primary.description} />
      </div>
      <a href={Link.url(slice.primary.link)}>{slice.primary.linkLabel}</a>
      {/* <img src={slice.primary.background.url} /> */}
    </div>
    <style jsx>{`
      .homepage-banner {
        font-family: "Lato", sans-serif;
        margin: 0 0 80px 0;
        padding: 6em 0 6em;
        background-position: center center;
        background-size: cover;
        color: #ffffff;
        line-height: 1.75;
        text-align: center;
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.4),
            rgba(0, 0, 0, 0.6)
          ),
          url(${slice.primary.background.url});
      }
      .banner-content {
        text-align: center;
      }
      .banner-title {
        width: 90%;
        max-width: 80%;
        margin-left: auto;
        margin-right: auto;
        font-size: 70px;
        font-weight: 900;
        line-height: 70px;
      }
      .banner-description {
        width: 90%;
        max-width: 490px;
        margin-left: auto;
        margin-right: auto;
      }
      a {
        background: #ffffff;
        border-radius: 7px;
        color: #484d52;
        font-size: 14px;
        font-weight: 700;
        padding: 15px 40px;
      }
      a:hover {
        background: #c8c9cb;
      }
      @media (max-width: 767px) {
        .homepage-banner {
          margin: 0 0 40px;
          padding: 10em 0 6em;
        }
        .banner-title {
          font-size: 50px;
          line-height: 50px;
        }
      }
    `}</style>
  </section>
);

export default MySlice;
