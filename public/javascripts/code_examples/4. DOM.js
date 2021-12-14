


class Leeson3 {
    mini_game_js {
    const btn = document.getElementById("btn1"); //select button element and assign it to a variable
    const heading = document.getElementById("heading"); //select heading element and assign it to a variable

    console.log(btn);

    function setNewHeadingText(text) {
        heading.innerHTML = text; //changes text inside the h1 element
    }

    btn.addEventListener("click", () => setNewHeadingText("Hello students!"));
}


    mini_game_html() {
        //SELECTORS
        const answers = document.getElementById("answers");
        const quizQuestionText = document.querySelector(".quiz-question__text");
        // const answersOption = document.getElementsByClassName("answers__option");
        const modal = document.querySelector(".modal");

        //GLOBAL VARIABLES
        let quizColor;
        let answerColors = [];

        console.log(quizQuestionText);

        const getRandomInt = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        // const getRandomRgbNumber = () => Math.floor(Math.random() * 256); - REPLACED WITH MORE GENERIC FUNCTION getRandomInt()

        const generateColor = () => {
            const red = getRandomInt(0, 255);
            const green = getRandomInt(0, 255);
            const blue = getRandomInt(0, 255);
            return `rgb(${red}, ${green}, ${blue});`;
        };

        const clearAnswerColorsArr = () => {
            answerColors = [];
        };

        const createAnswerColorsArr = () => {
            for (let i = 0; i < 4; i++) {
                answerColors.push(generateColor());
            }
        };

        const renderAnswerOptions = () => {
            for (let i = 0; i < answerColors.length; i++) {
                answers.insertAdjacentHTML(
                    "beforeend",
                    `<button class="answers__option" style="background-color: ${answerColors[i]}" onclick="handleAnswerOptionClick(this)" id="${i}"></button>`
                );
            }
        };

        const renderQuizColor = () => {
            quizColor = answerColors[getRandomInt(0, 3)];
            quizQuestionText.innerHTML = quizColor;
        };

        //INITIAL RENDER
        createAnswerColorsArr();
        renderAnswerOptions();
        renderQuizColor();

        //MODAL LOGIC
        // const handleModalChange = (show) =>
        // show ? modal.classList.remove("hide") : modal.classList.add("hide");

        const handleModalChange = (show) => {
            // show ? modal.classList.remove("hide") : modal.classList.add("hide"); - REPLACED WITH THE CODE BELOW BECAUSE OF BOUNCE ANIMATION
            if (show) {
                modal.classList.remove("hide");
                modal.style.animation = "bounce 1s";
            } else {
                modal.classList.add("hide");
                modal.style.animation = null;
            }
        };

        modal.addEventListener("click", (e) => {
            if (e.target === modal) handleModalChange(false);
        });

        const handleAnswerOptionClick = (btn) => {
            if (answerColors[btn.id] === quizColor) handleModalChange(true);
            else btn.style.opacity = 0;
        };

        const handleSubmitPlayAgain = (event) => {
            event.preventDefault();
            const input = event.target.answerInput;
            if (input.value === "yes") {
                answers.innerHTML = "";
                clearAnswerColorsArr(); // added function
                createAnswerColorsArr();
                renderAnswerOptions();
                renderQuizColor();
                input.value = "";
                handleModalChange(false);
            } else if (input.value === "no") {
                input.value = "";
                handleModalChange(false);
            }
        };
    }
}
