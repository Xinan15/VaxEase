import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Vaccination Appointment</h2>
              <p style={{ margin: "5px" }}>
                <b>
                  Everyone 12 years of age and older is now eligible to get a
                  COVID-19 vaccination.
                </b>
              </p>
              <p style={{ margin: "5px" }}>
                COVID-19 vaccination is safe and effective. It gives you the
                best protection against COVID-19. You may be able to get
                diferent doses of the COVID-19 vaccine depending on your age and
                if you're at increased risk from COVID-19.
                </p>
                <p style={{ margin: "5px" }}>
                Children under 12 years old will be given smaller doses than older children and adults.
              </p>
              <p style={{ margin: "5px" }}>
                <b>Some people are only offered certain vaccines.</b>
              </p>
              <h3 style={{ margin: "5px" }}>For example:</h3>
              <div className="list-style">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ul>
                    <li>if you're pregnant.</li>
                    <li>if you're under 18 years.</li>
                    <li>if you're aged 75 or over.</li>
                    <li>in very rare cases if you’ve had a severe allergic reaction to one of the common vaccines you may be referred to a specialist clinic for an alternative COVID-19 vaccine.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
