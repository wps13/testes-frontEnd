import React from "react";

import ReactEcharts from "echarts-for-react";

const UserGraph = ({ userData }) => {
  let legendNames = [],
    graphData = [];
  userData.forEach(user => {
    legendNames.push(`${user.name} ${user.lastName}`);
    graphData.push({
      name: `${user.name} ${user.lastName}`,
      value: user.value
    });
  });

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
