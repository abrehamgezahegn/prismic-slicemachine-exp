import React from "react";
import { RichText } from "prismic-reactjs";

const BleedImage = ({ slice }) => (
  <section className="container">
    <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
  </section>
);

export default BleedImage;
