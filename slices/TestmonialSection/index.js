import React from "react";
import { RichText } from "prismic-reactjs";

const MySlice = ({ slice }) => (
  <section>
    <span className="title">
      {slice.primary.title ? (
        <RichText render={slice.primary.title} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </span>
    {slice.primary.description ? (
      <RichText render={slice.primary.description} />
    ) : (
      <p>start by editing this slice from inside the SliceMachine builder!</p>
    )}
    <div className="testimonials">
      {slice?.items?.map((item, i) => (
        <div className="testimony">
          <img src={item.avatar.url} alt={item.avatar.alt} key={`img-${i}`} />
          <div key={`item.name-${i}`}>{item.name}</div>
          {slice?.items?.map((item, i) => (
            <RichText render={item.word} key={`rich-text-${i}`} />
          ))}
        </div>
      ))}
    </div>
    <style jsx>{`
      section {
        max-width: 900px;
        margin: 4em auto;
        text-align: center;
      }
      .title {
        color: #8592e0;
      }
      .testimonials {
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 800px;
      }

      .testimony {
        margin-right: 54px;
      }

      .testimony img {
        width: 54px;
        height: 54px;
        border-radius: 50%;
        object-fit: cover;
      }
    `}</style>
  </section>
);

export default MySlice;
