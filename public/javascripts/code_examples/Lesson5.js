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


class Lesson5 {
    page4() {
        console_to_page()
        let number = 0;

        const increment = () => {
            number++;
        };
        const decrement = () => {
            number--;
        };

        increment();
        increment();
        decrement();
        console.log(number);

    }

    page5() {
        console_to_page()
        class Counter {
            constructor(number) {
                this.number = number;
            }

            increment() {
                this.number++;
            }
            decrement() {
                this.number--;
            }
        }

        const counter1 = new Counter(0);
        console.log(counter1.number);
        counter1.increment();
        counter1.increment();
        counter1.increment();
        console.log(counter1.number);


    }

    page6_7() {
        console_to_page()
        class Counter {
            #privateField;

            constructor(number) {
                this.number = number;
                this.#privateField = "something private";
            }

            increment() {
                this.number++;
                console.log(this.#privateField);
            }
            decrement() {
                this.number--;
            }
        }
        const counter1 = new Counter(0);
        console.log(counter1.number);
        counter1.increment();
        counter1.increment();
        counter1.increment();
        console.log(counter1.number);
        console.log(counter1.#privateField); //error


    }

    page8() {
        console_to_page()
        class Animal {
            move() {
                console.log("run");
            }
        }

        class Dog extends Animal { }

        class Bird extends Animal {
            move() {
                console.log("fly");
            }
        }

        class Turtle extends Animal {
            move() {
                console.log("move veeery slowly");
            }
        }

        const dog1 = new Dog();
        const bird1 = new Bird();
        const turtle1 = new Turtle();
        dog1.move();
        bird1.move();
        turtle1.move();

    }

    page9_11() {
        console_to_page()
        const add = (a) => a * 2;
        console.log(add(5))
        const strNumbers = {
            num1: "2",
        };

        const convertToNum = () => (strNumbers.num1 = parseInt(strNumbers.num1));

        const addToNum = () => (strNumbers.num1 += 5);

        convertToNum();
        addToNum();

        console.log(strNumbers.num1);
        const strNumbers = {
            num1: "2",
        };

        const convertToNum = (obj) => {
            return { ...obj, num1: parseInt(obj.num1) };
        };

        const addToNum = (obj) => {
            return { ...obj, num1: obj.num1 + 5 };
        };

        console.log(addToNum(convertToNum(strNumbers)));




    }

    page12_14() {
        console_to_page()
        const addDirector = (game, name) =>
            Object.assign({}, mafia, { director: name });

        console.log(addDirector(mafia, "Daniel V�vra"));

        const mafia = {
            genre: "Action-adventure",
            releaseDate: new Date("August, 28, 2002"),
            developer: "Illusion Softworks",
        };


        const mafia = {
            genre: "Action-adventure",
            releaseDate: new Date("August, 28, 2002"),
            developer: "Illusion Softworks",
        };

        const addDirector = (game, name) => {
            return {
                ...game,
                director: name,
            };
        };

        console.log(addDirector(mafia, "Daniel V�vra"));
        const mafiaWithDirector = addDirector(mafia, "Daniel V�vra");


        const nestedMafia = {
            genre: "Action-adventure",
            releaseDate: new Date("August, 28, 2002"),
            developer: "Illusion Softworks",
            director: {
                name: "Daniel V�vra",
                otherGame: "Kingdom Come: Deliverance",
            },
        };

        const addMoreDirectorInfo = (game, newInformation) => {
            gameCopy = { ...game };
            gameCopy.director.newInfo = newInformation;
            return gameCopy;
        };

        console.log(
            addMoreDirectorInfo(nestedMafia, "some additional information")
        );
        console.log(nestedMafia);

        const addMoreDirectorInfo = (game, newInformation) => {
            return {
                ...nestedMafia,
                director: {
                    ...nestedMafia.director,
                    newInfo: newInformation,
                },
            };
        };



        console.log(
            addMoreDirectorInfo(nestedMafia, "some additional information")
        );
        console.log(nestedMafia);



    }

    page15() {
        console_to_page()
        const arrs = [
            { name: "josh", age: 22 },
            { name: "angelica", age: 18 },
            { name: "Andrea", age: 38 },
        ];

        Array.prototype.customMap = function (callback) {
            const newArr = [];
            for (i = 0; i < this.length; i++) {
                newArr.push(callback(this[i], i, this));
            }
            return newArr;
        };

        const myown = arrs.customMap((item, index) => item.name);
        console.log(myown);


    }

    page16() {
        console_to_page()
        const factorial = (num) => {
            if (num === 0) return 1;
            return num * factorial(num - 1);
        };

        console.log(factorial(3));

        const getNames = (arr) => {
            const newArr = [];

            const helper = (subArr) => {
                if (subArr.length === 0) return;
                newArr.push(subArr[0].name);
                helper(subArr.slice(1));
            };

            helper(arr);

            return newArr;
        };

        console.log(getNames(arrs));




    }

    page17() {
        console_to_page()

        movies = ["Godfather", "Nemo", "Scarface", "Grown Ups", "Twilight"];

        movieToDelete = "Twilight";

        const imperativeRemove = (arr, toDel) => {
            const newArr = [];

            for (let i = 0; i < arr.length; i++) {
                if (arr[i] !== toDel) newArr.push(arr[i]);
            }
            return newArr;
        };

        console.log(imperativeRemove(movies, movieToDelete));

        const declarativeRemove = (arr, toDel) =>
            arr.filter((item) => item !== toDel);

        console.log(declarativeRemove(movies, movieToDelete));



    }

    
}