import React from "react";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import "./doughchart.css"

const labels = ["January", "February", "March"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "RGB(81 139 197)",
      borderColor: "RGB(152 184 217)",
      data: [0, 10, 5, 2, 20, 30, 45],
      radius:"100%",
      circumference:"320",
      cutout:"80%",
     
      options:{
         responsive: true,
      }}
        
    
  ],
};

const DoughChart = () => {
  return (
    <div className="doughchart">
        <div style={{width:"70%"}} >
        <Doughnut data={data} />
        </div>
        <hr></hr>

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

export default DoughChart;