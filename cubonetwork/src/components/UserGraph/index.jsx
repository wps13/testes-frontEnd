import React from "react";

import ReactEcharts from "echarts-for-react";

import { formatData } from "../../utils/helpFunctions";

const UserGraph = ({ userData }) => {
  let legendNames = [],
    graphData = [];

  [legendNames, graphData] = formatData(userData);

  let options = {
    tooltip: {
      trigger: "item",
      formatter: " {b} : {d}%"
    },
    legend: {
      orient: "vertical",
      right: " 10",
      top: "middle",
      data: legendNames
    },
    series: [
      {
        type: "pie",
        radius: ["40%", "70%"],
        center: [" 50%", "50%"],
        data: graphData,
        itemStyle: {
          normal: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          }
        }
      }
    ]
  };
  return <ReactEcharts option={options} />;
};

export default UserGraph;
