import React from "react";
import Chart from "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";
import "./barchart.css"

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const BarChart = () => {
  return (
    <div className="barchart">
      <Bar data={data} />
      <div className="inchart">
        <div>
          <p>$4230</p>
          <span>Total revenue</span>
        </div>

        <div>
          <p>321</p>
          <span>Total sales</span>
        </div>
      </div>
    </div>
  );
};

export default BarChart;