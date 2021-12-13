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


class Lesson1 {
    page6_7() {
        console_to_page()
        //VARIABLES
        //Dynamically typed example
        let apples;
        apples = 4;
        apples = "four";

        //Weakly typed example
        let eggs = 3;
        let text = "Number of eggs: ";
        let combination = text + eggs; //Result is - Number of eggs: 3

        let num1 = 2;
        let num2 = "5";
        let sum = num1 + num2;
        console.log(sum);
    }

    page8() {
        console_to_page()
        const isWeekend = true;
        let action;

        if (isWeekend === true) {
            action = "Go to pub";
        } else {
            action = "Go to school";
        }
        console.log(action)
        const equalSignVal = "5";
        if (equalSignVal == 5) {
            console.log("Variable contains value 5");
        }

        if (equalSignVal === 5) {
            console.log("Variable contains value 5 and is type number");
        }


    }

    page9() {
        console_to_page()
        let ternaryAction;
        ternaryAction = isWeekend ? "Go to pub" : "Go to school";
        console.log(ternaryAction);

        //truthy and falsy
        const truthyVar = 8;
        if (truthyVar) {
        }
    }

    page10() {
        console_to_page()
        //switch
        const dayOfWeek = "monday";
        let dayAction;

        switch (dayOfWeek) {
            case "Monday":
                dayAction = "Work";
                break;
            case "Tuesday":
                dayAction = "School";
                break;
            case "Wednesday":
                dayAction = "Road trip";
                break;
            case "Thursday":
                dayAction = "School";
                break;
            case "Friday":
                dayAction = "Party";
                break;
            case "Saturday":
                dayAction = "Hangover";
                break;
            case "Sunday":
                dayAction = "Family time";
                break;
            default:
                dayAction = "No match found";
        }
        console.log(dayAction)
    }

    page11() {
        console_to_page()
        //FUNCTIONS
        //function declaration
        function sumDeclaration(a, b) {
            return a + b;
        }
        sumDeclaration(2, 3); //seète 2 + 3 a vrátí hodnotu 5

        //function expression

        const sumExpression = function (a, b) {
            return a + b;
        };

        console.log(sumExpression(2, 3));

        const arrowExpression = (a, b) => a + b;

        const arrowAddFive = (a) => a + 5;
    }

    page12() {
        console_to_page()
        //Hoisting
        hoistedFunction();

        function hoistedFunction() {
            return "hello from hoisted function";
        }

        // notHoistedFunction(); //error - Cannot access function before its initialization

        const notHoistedFunction = () => {
            return "hello from not hoisted function";
        };

        notHoistedFunction(); //runs fine

        //Default parameter value
        function defaultParam(a, b = ", hello from default parameter") {
            return a + b;
        }

        defaultParam("Students"); //returns "Students, hello from default parameter"

        console.log(defaultParam("Students"));
    }

    page13_14() {
        console_to_page()
        //ARRAYS
        //Array declaration
        const cities = ["Prague", "Budapest", "Moscow", "London"];
        const carBrands = new Array("BWM", "Audi", "Škoda");

        //Access to array values
        console.log(cities[0]);

        //Get length of citties array
        console.log(cities.length); //returns 4

        //Array value mutation
        cities[0] = "Paris";
        console.log(cities);

        //Add value to end
        cities.push("Berlin");
        console.log(cities);

        //Remove value from end
        cities.pop();
        console.log(cities);

        //Add to beginning
        cities.unshift("Tokyo");
        console.log(cities);

        //Remove from beginning
        cities.shift();
        console.log(cities);

        //Find item position by its value
        console.log(cities.indexOf("Budapest"));

    }

    page14() {
        console_to_page()
        //OBJECTS

        const car = {
            type: "BMW", //string
            color: "black", //string
            kilometers: 197087, //number
            wasCrashed: true, //boolean
            drive: function () {
                //method
                //some logic, so car can drive
            },
            stop: function () {
                //method
                //some logic so car can stop
            },
        };

        console.log(car.type);

        car.type = "Audi";

        console.log(car.type);

        car["type"] = "Mercedes";

        console.log(car.type);

        car.fuelType = "gasoline";

        console.log(car);

        delete car.type;

        console.log(car);
    }

    page15_16() {
        console_to_page()
        //Destructuring
        //Array destructuring
        const games = ["God of War", "Mafia", "Company of Heroes", "Fortnite"];

        games[0]; //God of War
        games[1]; //Mafia
        games[2]; //Company of Heroes

        const [game1, game2, game3] = games;

        game1; //God of War
        game2; //Mafia
        game3; //Company of Heroes

        //object destructuring
        const game = {
            name: "Company of Heroes",
            genre: "Strategy",
            price: "5 euro",
        };

        const { name, genre, price } = game;

        console.log(name);
        console.log(genre);
        console.log(price);

        const mathProblem1 = {
            operand1: 6,
            operand2: 2,
            operator: "/",
        };

        function solveMathProblem({ operand1, operand2, operator }) {
            let result;
            switch (operator) {
                case "/":
                    result = operand1 / operand2;
                    break;
                case "*":
                    result = operant1 * operand2;
                    break;
            }
            return result;
        }
        console.log(solveMathProblem(mathProblem1));
    }

    page17() {
        console_to_page()
        const sports = ["football", "ice-hockey", "tennis"];
        console.log(sports);
        console.log(...sports);

    }

    page18() {
        console_to_page()
        const someString = "Rainbow";
        console.log(...someString);
        const books1 = ["book1", "book2", "book3"];
        const otherBooks1 = ["book4", "book5", "book6"];
        const allBooks1 = [books1, otherBooks1];

        const books2 = ["book1", "book2", "book3"];
        const otherBooks2 = ["book4", "book5", "book6"];
        const allBooks2 = [...books2, ...otherBooks2];

        const allBooks3 = [...books2, "value in the middle", ...otherBooks2];
        console.log(allBooks1)
        console.log(allBooks2)
        console.log(allBooks3)


        const mainColors = { brightRed: "#e55039", waterfallBlue: "#38ada9" };
        const accentColors = { lightGrey: "#778ca3", swanWhite: "#f7f1e3" };
        const fullPalette = { ...mainColors, ...accentColors }; //{brightRed: "#e55039", waterfallBlue: "#38ada9", lightGrey: "#778ca3", swanWhite: "#f7f1e3"}

        console.log(fullPalette)

        const fruits = ["apple", "strawberry", "orange", "lemon"];
        const fruitsCopy = fruits;
        const realFruitsCopy = [...fruits];
        console.log(fruitsCopy)
        console.log(realFruitsCopy)
    }

    page19() {
        console_to_page()
        const artist = {
            nickName: "Eminem",
            realName: "Marshall Bruce Matthers III.",
            genre: "Hip-hop",
        };

        const artistCopy = { ...artist };
        console.log(artistCopy)
    }

    page20() {
        console_to_page()
        var varScoped = "hello from var";
        function varScopeFunction() {
            var varInsideFunction = "hello from function";
            if (true) {
                var varInsideBlock = "Hello from var if block";
            }
            console.log(varScoped); //Global variable, so it's accessible
            console.log(varInsideFunction); //Accessible, because it's called                      inside a function where it is declared as well
            console.log(varInsideBlock); //Accessible as well, because it's still        in same function, even though it is in if block
        }

        varScopeFunction();

        console.log(varScoped); //Global variable - accessible
        console.log(varInsideFunction); //Called outside a function where it is declared - not accessible
        console.log(varInsideBlock); //Not accessible as well

        const constScoped = "hello from const";
        function constScopeFunction() {
            const constInsideFunction = "hello from const";
            if (true) {
                const constInsideBlock = "Hello from const if block";
            }
            console.log(constScoped); //Global variable, so it's accessible
            console.log(constInsideFunction); //Accessible, because it's called from the same block of code
            console.log(constInsideBlock); //Not accessible, because it's outside block of code, where it is declared
        }
        console.log(constScoped); //Global variable, so it's accessible
        console.log(constInsideFunction); //Not accessible, because it's outside block of code, where it is declared
        console.log(constInsideBlock); //Not accessible, because it's outside block of code, where it is declared


    }

    page21() {
        console_to_page()
        console.log(hoistedVar); //returns undefined
        var hoistedVar = "cat";
        console.log(hoistedVar); //returns "cat"
        var hoistedVar
        console.log(hoistedVar)
        hoistedVar = "cat"
        console.log(hoistedConst); //Reference error - cannot access "hoistedConst" before its initialization
        const hoistedConst = "dog";
        console.log(hoistedConst); //returns "dog"

        var redeclaredVar = "fish";
        var redeclaredVar = "mouse";
        console.log(redeclaredVar); //returns "mouse"
        const redeclaredConst = "monkey";
        const redeclaredConst = "pig"; //SyntaxError: Identifier 'redeclaredConst' has already been declared

    }
    page22() {
        console_to_page()
        var someCar = "BMW";
        if (true) {
            var someCar = "Škoda";
        }
        console.log(someCar);
        const someCar = "BMW";
        if (true) {
            const someCar = "Škoda";
            console.log(someCar); // “Škoda”
        }
        console.log(someCar); //"BMW"
        const someCar = "BMW";
        const someCar = "Škoda";
        console.log(someCar); //SyntaxError: Identifier 'someCar' has already been declared
        const someCar = "BMW";
        if (true) {
            console.log(someCar); //ReferenceError: Cannot access 'someCar' before      initialization
            const someCar = "Škoda";
        }
        console.log(someCar); //"BMW"

    }
}