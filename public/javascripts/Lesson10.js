// for lesson 10 i created 2 folders with projects

// I am also going to create functions from doc

function console_to_page() {
    if (!console) {
        console = {};
    }
    let old = console.log;
    let logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    }
};



class Lesson10 {
    page6() {
        console_to_page()
        const getQualityOfLife = async () => {
            const res = await fetch(
                "https://api.teleport.org/api/urban_areas/slug:prague/scores/"
            );

            if (!res.ok) throw new Error(res.status);

            const json = await res.json();
            return json;
        };

    }

    page6() {
        console_to_page()
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

    }

   
}