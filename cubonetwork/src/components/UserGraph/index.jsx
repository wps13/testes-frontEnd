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
        radius: "65%",
        center: [" 50%", "50%"],
        selectedMode: "single",
        data: graphData,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  };
  return <ReactEcharts option={options} />;
};

export default UserGraph;
