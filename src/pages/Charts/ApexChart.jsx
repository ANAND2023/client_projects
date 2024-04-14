import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const [series, setSeries] = useState([ 41, 17, 15]);
  const [chartWidth, setChartWidth] = useState(380);
  const [chartHeight, setChartHeight] = useState(300); // Initial height

  const options = {
    chart: {
      width: chartWidth,
      height: chartHeight,
      type: 'donut',
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'gradient',
    },
    legend: {
      formatter: function(val, opts) {
        return val + ' - ' + opts.w.globals.series[opts.seriesIndex];
      },
    },
    title: {
      text: 'CPU RAM',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
            height: 250, // Adjust height for smaller screens
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  // Function to handle changes in chart dimensions
  const handleChartResize = (width, height) => {
    setChartWidth(width);
    setChartHeight(height);
  };

  return (
    <div className='bg-gray-200'>
      <div id="chart" style={{ width: chartWidth, height: chartHeight }}>
        <ReactApexChart options={options} series={series} type="donut" />
      </div>
      {/* <div id="html-dist"></div>
      <div>
       
        <label>
          Chart Width:
          <input
            type="number"
            value={chartWidth}
            onChange={(e) => handleChartResize(parseInt(e.target.value), chartHeight)}
          />
        </label>
        <label>
          Chart Height:
          <input
            type="number"
            value={chartHeight}
            onChange={(e) => handleChartResize(chartWidth, parseInt(e.target.value))}
          />
        </label>
      </div> */}
    </div>
  );
};

export default ApexChart;
