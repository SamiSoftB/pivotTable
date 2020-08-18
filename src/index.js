import { vegaSpec } from "./pivotTable";
const vegaEmbed = window.vegaEmbed;

const chartStruct = {
  columnsData: {
    Bycolumns: [
      { name: "Ship Mode", count: 2, type: "CATEGORICAL" },
      { name: "Speed", count: 4, type: "CATEGORICAL" }
    ],
    Qcolumn: [
      {
        name: "sum(sales)",
        domain: [0, 339135.17],
        type: "QUANTITATIVE"
      }
    ],
    BycolumnsHORIZONTAL: [
      { name: "Gender", count: 3, type: "CATEGORICAL" },
      { name: "Size", count: 6, type: "CATEGORICAL" }
    ],
    selection: { name: "s", type: "SELECTION" },
    idx: { name: "l", type: "LINE" }
  },
  OrderInfo: {
    Length: 2,
    Count: [2, 6],
    Order: ["Ship Mode", "Speed"]
  },
  OrderInfoHOR: {
    Length: 2,
    Count: [3, 7],
    Order: ["Gender", "Size"]
  }
};

document.getElementById(
  "app"
).innerHTML = `<div id="vega-container"></div>`;


vegaEmbed("#vega-container", vegaSpec(700, 700, chartStruct), {
  mode: "vega"
})
  .then((result) => {
    // add bar selection handler
    // see: https://vega.github.io/vega/docs/api/view/
    result.view.addSignalListener("width", (name, value) => {
      console.log("selected", value);
    });
  })
  .catch((error) => {
    console.error("vega:error", error);
  });