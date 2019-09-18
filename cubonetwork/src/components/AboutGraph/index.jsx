import React from "react";

import ReactEcharts from "echarts-for-react";

import { formatDataAbout } from "../../utils/helpFunctions";

const AboutGraph = ({ value, type }) => {
  let formattedData = formatDataAbout(value, type);
  let options = {
    series: [
      {
        name: type,
        type: "pie",
        radius: ["80%", "70%"],
        label: {
          normal: {
            show: true,
            position: "center"
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: "30",
              fontWeight: "bold"
            }
          }
        },
        data: formattedData,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        },
        color: ["#333", "#fff"],
        startAngle: [90]
      }
    ]
  };
  return <ReactEcharts option={options} />;
};

export default AboutGraph;
