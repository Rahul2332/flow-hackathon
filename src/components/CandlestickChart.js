import React, { useState, useEffect } from "react";
import FusionCharts from "fusioncharts";
import TimeSeries from "fusioncharts/fusioncharts.timeseries";
import ReactFC from "react-fusioncharts";

ReactFC.fcRoot(FusionCharts, TimeSeries);

const jsonify = res => res.json();
const dataFetch = fetch(
  "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/plotting-multiple-series-on-time-axis-data.json"
).then(jsonify);
const schemaFetch = fetch(
  "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/plotting-multiple-series-on-time-axis-schema.json"
).then(jsonify);

const dataSource = {
  chart: {},
  caption: {
    text: "Sales Analysis"
  },
  subcaption: {
    text: "Grocery & Footwear"
  },
  series: "Type",
  yaxis: [
    {
      plot: "Sales Value",
      title: "Sale Value",
      format: {
        prefix: "$"
      }
    }
  ]
};

export const CandlestickChart = () => {
  const [timeseriesDs, setTimeseriesDs] = useState({
    type: "timeseries",
    renderAt: "container",
    width: "800",
    height: "600",
    dataSource
  });

  useEffect(() => {
    const fetchData = async () => {
      const [data, schema] = await Promise.all([dataFetch, schemaFetch]);
      const fusionTable = new FusionCharts.DataStore().createDataTable(
        data,
        schema
      );
      setTimeseriesDs(prevState => {
        return { ...prevState, dataSource: { ...prevState.dataSource, data: fusionTable } };
      });
    };

    fetchData();
  }, []);

  return (
    <div>
      {timeseriesDs.dataSource.data ? (
        <ReactFC {...timeseriesDs} />
      ) : (
        "loading"
      )}
    </div>
  );
};
