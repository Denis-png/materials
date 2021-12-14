class Lesson4 {
    page3() {
        console_to_page()
        function third() {
            console.log("Hello");
        }

        function second() {
            console.log("Hello from second");
            third();
        }

        function first() {
            console.log("Hello from first ");
            second();
        }

        first();

    }

    page4() {
        console_to_page()
        const btn = document.querySelector("#btn");

        btn.addEventListener("click", () => console.log("btn clicked"));

        console.log("before loop");

        for (let i = 0; i < 30000; i++) {
            console.log(i);
        }

        console.log("after loop");

    }

    page5_8() {
        console_to_page()
        const getUser = new Promise((resolve, reject) => {
            const user = { name: "Mark", age: 28, nationality: "UK" };
            setTimeout(() => {
                if (user) {
                    resolve(user);
                } else {
                    reject(new Error("User not found"));
                }
            }, 2000);
        });

        const getUserName = (user) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(user.name);
                }, 2000);
            });
        };

        //then/catch
        getUser
            .then((res) => getUserName(res))
            .then((name) => console.log(name))
            .catch((err) => console.log(err));

        //async/await
        const fetchUser = async () => {
            try {
                const res = await getUser;
                const name = await getUserName(res);
                console.log(name);
            } catch (e) {
                console.log(e);
            }
        };

        const test = fetchUser().then((res) => console.log(res));

        fetchUser()

        // example of non blocking then/catch
        const fetchUserThen = () => {
            let name;
            getUser
                .then((res) => getUserName(res))
                .then((n) => {
                    name = n;
                    console.log(name);
                })
                .catch((err) => console.log(err));
        };

        fetchUserThen();

        //Fetch API
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `http://jsonplaceholder.typicode.com/posts`,
                    {
                        method: "GET",
                    }
                );
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();

    }

    

    api_project() {
        console_to_page()
        const form = document.querySelector(".form");
        const input = document.querySelector(".form__input");
        const modal = document.querySelector(".modal");
        const modalHeading = document.querySelector(".modal__heading");
        const modalText = document.querySelector(".modal__text");
        const modalBtn = document.querySelector("#modalBtn");
        const loading = document.querySelector("#loading");

        const handleModalChange = (show) =>
            show ? modal.classList.remove("hide") : modal.classList.add("hide");

        const handleLoadingChange = (isLoading) =>
            isLoading
                ? loading.classList.remove("hide")
                : loading.classList.add("hide");

        const formatProbability = (num) => `${Math.round(num * 10000) / 100}%`;

        const renderNationalityModal = ({ name, nationality }) => {
            input.value = "";
            input.blur();
            handleModalChange(true);
            modalHeading.innerHTML = `${name}'s nationality`;
            modalText.innerHTML = `${name} is at ${formatProbability(
                nationality.probability
            )} from ${nationality.country_id}`;
        };

        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            //https://api.nationalize.io/?name=moris

            /* const res = await fetch(
              `https://api.nationalize.io/?name=${e.target.fName.value}`,
              {
                method: "GET",
              }
            );
            console.log(res);
            const jsoned = await res.json();
    
            console.log(jsoned);
    
            const highestProbability = jsoned.country.reduce((max, country) =>
              max.probability > country.probability ? max : country
            );
    
            const user = { name: jsoned.name, nationality: highestProbability };
    
            renderNationalityModal(user); */

            try {
                handleLoadingChange(true); //SHOW LOADING BEFORE FETCH CALL

                const res = await fetch(
                    `https://api.nationalize.io/?name=${e.target.fName.value}`,
                    {
                        method: "GET",
                    }
                );

                if (!res.ok) throw new Error(res.statusText);

                const jsoned = await res.json();

                handleLoadingChange(false); //HIDE LOADING AFTER YOU GET A RESPONSE

                if (jsoned.country.length === 0)
                    throw new Error("Empty array returned from the promise");

                const highestProbability = jsoned.country.reduce((max, country) =>
                    max.probability > country.probability ? max : country
                );

                const user = { name: jsoned.name, nationality: highestProbability };

                renderNationalityModal(user);
            } catch (err) {
                console.log(err);
                handleLoadingChange(false); //OR HIDE IT WHEN SOME ERROR IS THROWN
            }
        });

        modalBtn.addEventListener("click", () => handleModalChange(false));

    }

    
}