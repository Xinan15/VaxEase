import React from "react";

export const Data = () => {
  return (
    <div id="data" className="text-center">
      <div className="container" style={{padding:"80px"}}>
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Vaccinations in England</h2>
        </div>
        <div className="row">
          <div key="" className="col-xs-6 col-md-3">
            <h1 className="">149,398,324</h1>
            <h3>Vaccinations Given</h3>
            <p>The number of COVID-19 vaccinations (all doses) given to people of all ages, reported up to Sunday, 9 July 2023.</p>
          </div>
          <div key="" className="col-xs-6 col-md-3">
            <h1 className="">3,858,154</h1>
            <h3>People Vaccinated</h3>
            <p>Total number of people who have received the second dose of COVID-19 vaccine, reported up to Wednesday, 19 July 2023.</p>
          </div>
          <div key="" className="col-xs-6 col-md-3">
            <h1 className="">70</h1>
            <h3>Booster Uptake (%)</h3>
            <p>Total number of people who have received a booster or third dose of COVID-19 vaccine, reported up to Wednesday, 19 July 2023.</p>
          </div>
          <div key="" className="col-xs-6 col-md-3">
            <h1 className="">2,757</h1>
            <h3>People Tested Positive</h3>
            <p>Total number of people tested positive in the last 7 days (9 July 2023 - 15 July 2023)</p>
          </div>
        </div>
      </div>
    </div>
  );
};
