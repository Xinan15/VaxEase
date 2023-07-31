import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>About COVID-19 Vaccination</h2>
          <p>COVID-19 vaccination is safe and effective. It gives you the best protection against COVID-19.</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="service-desc">
              <h3>Which COVID-19 vaccine will I get?</h3>
              <p>
                Most people can have any of the COVID-19 vaccines and will be
                offered a vaccine that gives protection from more than one type
                of COVID-19.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-desc">
              <h3>How well do the vaccines work?</h3>
              <p>A vaccine helps give you good protection from becoming seriously ill or needing to go to hospital if you catch COVID-19.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-desc">
              <h3>Spring booster eligibility</h3>
              <p>People aged 75 years and over, those in care homes, and those aged 5 years and over with a weakened immune system are being offered a spring booster of COVID-19 vaccine.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-desc">
              <h3>Additional vaccines for people with a severely weakened immune system</h3>
              <p>If you develop a new health condition or start treatment that severely weakens your immune system, you may need additional protection before autumn 2023.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-desc">
              <h3>Seasonal COVID-19 vaccine</h3>
              <p>You may be able to get a seasonal COVID-19 vaccine in autumn 2023 if you’re at increased risk of getting seriously ill from COVID-19. For example, this may be due to a health condition or your age.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-desc">
              <h3>Do the vaccines cause side effects?</h3>
              <p>The COVID-19 vaccines can cause some side effects, but not everyone gets them.&nbsp;
              <a href="https://www.nhs.uk/conditions/covid-19/covid-19-vaccination/covid-19-vaccines-side-effects-and-safety/" target="_blank">Find out more about COVID-19 vaccine side effects and safety</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
