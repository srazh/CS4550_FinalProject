import MingleItem from "../mingle/mingleItem";
import emmasarah from "../images/emmasarah.png"
import spacex from "../images/spacex.png"

const EmmaMingles = () => {
  return (
    <>
      <h3 class="wd-top-songs-header">Emma's Public Mingles</h3>
    <div className = "wd-mingle-row">
      
      
        <div className="card bg-dark mb-3">
          <img className="wd-mingle-image" src={emmasarah} alt="Emma + Sarah" width="100%"/>
          <div className="card-body">
            <h4 className="card-title">{"Emma + Sarah"}</h4>
            <p className="card-text">"Mingle curated for Emma and Sarah"</p>
          </div>
        </div>

        <div className="card bg-dark mb-3">
          <img  className="wd-mingle-image" src={spacex} alt="Emma + Jose" width="100%"/>
          <div className="card-body">
            <h4 className="card-title">{"Emma + Jose"}</h4>
            <p className="card-text">"Mingle curated for Emma and Jose"</p>
          </div>
        </div>
        </div>




    

    </>
  );
};

export default EmmaMingles;
