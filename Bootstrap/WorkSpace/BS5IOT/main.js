// import { arrayTime } from "./main2.js";
const chart = Highcharts.chart("container", {
  title: {
    // text: "U.S Solar Employment Growth by Job Category, 2010-2020",
    text: "Realtime Temperature,Humadity,Light",
  },

  subtitle: {
    text: 'Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>',
  },

  yAxis: {
    title: {
      text: "Numer of Data",
    },
  },

  xAxis: {
    // labels: {
    //   enabled: true,
    //   formatter: function(){ return arrayTime[this.value]}
    // },
    accessibility: {
      rangeDescription: "Range: 2010 to 2020",
    },
  },

  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
      // pointStart: 1,
    },
  },

  series: [
    {
      name: "Nhiệt Độ",
      // data: [
      //   43, 48, 65, 81, 11, 14, 17, 16, 15,
      //   16, 15,
      // ],
      // data: arrayN
    },
    {
      name: "Độ ẩm",
      // data: [24, 37, 29, 29, 32, 30,
      //   38, 36, 33, 34, 31]
      // data: arrayN,
    },
    {
      name: "Ánh sáng",
      // data: [
      //   11, 30, 16, 19, 20, 24, 32, 30, 29, 29,
      //   25,
      // ],
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
          },
        },
      },
    ],
  },
});

export function redrawChart(dataT,dataH,dataL){
  chart.series[0].setData(dataT);
  chart.series[1].setData(dataH);
  chart.series[2].setData(dataL);
  // console.log();
}
// export function redrawChart0(data){
//   chart.series[0].setData(data);
// }
// export function redrawChart2(data){
//   chart.series[2].setData(data);
// }