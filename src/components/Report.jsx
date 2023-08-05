import React from "react";
import Dropdown from "./Dropdown";
import "../styles/report.css";
import { summaryData } from "../data/data";
import SkeletonLoader from "./SkeletonLoader";
const Report = ({ loading }) => {
  const options = ["Last 7 Days", "Last month", "This year"];
  const SummaryOptions = ["Sales", "Orders", "Customers"];
  const maxDataValue = Math.max(...summaryData.map((report) => report.value));

  return (
    <div>
      <div className="card-container c5 report-card">
        {loading ? (
          <div className="skeleton-card-top">
            <SkeletonLoader />
          </div>
        ) : (
          <div className="card-top">
            <div className="card-top-rt">
              <h4 className="card-hr">Summary</h4>
              <Dropdown options={SummaryOptions} />
            </div>
            <Dropdown options={options} />
          </div>
        )}
        <div className="card-buttom-content">
          {loading ? (
            <div className="skeleton-graph">
              <SkeletonLoader />
            </div>
          ) : (
            <div className="grid-chart">
              <div className="chart-vert-value">
                <span>100k</span>
                <span>80k</span>
                <span>60k</span>
                <span>40k</span>
                <span>20k</span>
                <span>{""}</span>
              </div>
              {summaryData.map((report) => (
                <div className="grid-chart-bar" key={report.id}>
                  <div className="bar-wrapper">
                    <div
                      className="bar-item"
                      style={{
                        height:
                          report.value !== null
                            ? `${(report.value / maxDataValue) * 80}%`
                            : 0,
                      }}
                    ></div>
                  </div>

                  <span className="grid-hortz-value">{report.month}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Report;
