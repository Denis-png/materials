// All Lesson 8 - projects. I will create 5 folder called Lesson8 - projet name. Inside of this folders are files index.html with code and css

// I will still create function from doc for lesson 8, when possible

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

class Lesson8 {
    page5() {
        console_to_page
        const http = require('http');
        const fs = require("fs")

        const hostname = '127.0.0.1';
        const port = 3000;

        const server = http.createServer((req, res) => {
            res.writeHead(200, { "Content-Type": "text/html" })
            fs.readFile("index.html", (err, data) => {
                res.write(data)
                res.end()
            })
        });

        server.listen(port, hostname, () => {
            console.log(`Server running at http://${hostname}:${port}/`);
        });



    }
    page6_7() {
        console_to_page
        const http = require("http");
        const fs = require("fs");

        const hostname = "127.0.0.1";
        const port = 3000;

        const server = http.createServer((req, res) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            fs.readFile("index.html", (err, data) => {
                console.log(data);
                res.write(data);
                res.end();
            });
            console.log("rendered first");
        });

        server.listen(port, hostname, () => {
            console.log(`Server running at http://${hostname}:${port}/`);

        });
        const server = http.createServer((req, res) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            const data = fs.readFileSync("index.html");
            console.log(data);
            res.write(data);
            console.log("rendered first");
            return res.end();
        });

    }
    page9() {
        console_to_page
        
        const express = require("express");

        const app = express(); //name doesn't really matter, you can call it whatever you want. Developers just usually call it either app or server

        const port = 3000;
        //starts listening
        app.listen(port, () => {
            console.log(`Server is running on ${port}`);
        });




    }
    page10() {
        console_to_page
        const express = require("express");

        const app = express();

        const games = [
            {
                id: 1,
                name: "Mafia: Definitive Edition",
                platforms: ["PS4", "Xbox One", "Microsoft Windows"],
            },
            {
                id: 2,
                name: "God of War",
                platforms: ["PS4"],
            },
        ];

        //ROUTES
        app.get("/games", (req, res) => {
            res.send(games);
        });

        const port = 3000;

        app.listen(port, () => {
            console.log(`Server is running on ${port}`);
        });


    }
   
}