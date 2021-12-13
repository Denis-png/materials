import Chart from "chart.js";
import "regenerator-runtime/runtime";

const qolChart = document.getElementById("qolChart").getContext("2d");

const getQualityOfLife = async () => {
  const res = await fetch(
    "https://api.teleport.org/api/urban_areas/slug:prague/scores/"
  );

  if (!res.ok) throw new Error(res.status);

  const json = await res.json();
  return json;
};

/* const getQualityOfLife = async () => */
/*   await getData("https://api.teleport.org/api/urban_areas/slug:prague/scores/"); */

const renderQualityOfLifeChart = async () => {
  const data = await getQualityOfLife();

  const qolLabels = data.categories.map((item) => item.name);
  const qolData = data.categories.map((item) => item.score_out_of_10);
  const qolColors = data.categories.map((item) => item.color);

  const barChart = new Chart(qolChart, {
    type: "bar",
    data: {
      labels: [...qolLabels],
      datasets: [
        {
          label: "Quality of Life scores form 0 to 10",
          data: [...qolData],
          backgroundColor: [...qolColors],
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
};

renderQualityOfLifeChart();
