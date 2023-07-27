import { Image } from "./image";
import React from "react";

export const News = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>News</h2>
          <p>Latest updates on the COVID vaccine from around the world.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <a href={d.link} target="_blank">  {/* Here you provide the link from your data */}
                      <Image
                        title={d.title}
                        smallImage={d.smallImage}
                      />
                    </a>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
