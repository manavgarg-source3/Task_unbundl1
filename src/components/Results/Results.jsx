import "./Results.css";
import resultsData from "../../../src/data/results.json";

function Results() {
  return (
    <section className="results" id="results">
      <h2 className="results__title">Results You'll Love</h2>

      <div className="results__carousel">
        {resultsData.map((result) => (
          <div key={result.id} className="results__card">
            <div className="results__media">
              <div className="results__images">
                <img
                  src={result.beforeImage}
                  alt={`Before treatment for ${result.concern}`}
                  className="results__img"
                />

                <img
                  src={result.afterImage}
                  alt={`After treatment for ${result.concern}`}
                  className="results__img"
                />
              </div>

              <div className="results__labels">
                <span className="results__label">Before</span>
                <span className="results__label">After</span>
              </div>
            </div>

            <div className="results__details">
              <div className="results__detail-row">
                <span className="results__detail-name">Concern</span>
                <span className="results__detail-value">
                  {result.concern}
                </span>
              </div>

              <div className="results__detail-row">
                <span className="results__detail-name">
                  Treatment Duration
                </span>
                <span className="results__detail-value">
                  {result.duration}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Results;