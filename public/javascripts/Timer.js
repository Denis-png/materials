function timer(){
    let startDate = new Date();
    let elapsedTime = 0;

    const startTime = function() {
        startDate = new Date();
        elapsedTime = 0;
    };

    const saveTime = function () {
        const endDate = new Date();
        const spentTime = endDate.getTime() - startDate.getTime();
        let toSave = spentTime - elapsedTime;
        elapsedTime = spentTime;
        console.log(toSave)
        return toSave
    }

    const blur = function() {
        const endDate = new Date();
        const spentTime = endDate.getTime() - startDate.getTime();
        elapsedTime += spentTime;
    };

    const beforeunload = function() {
        const endDate = new Date();
        const spentTime = endDate.getTime() - startDate.getTime();
        elapsedTime += spentTime;


    };


    document.getElementById('next').addEventListener('click', saveTime);
    document.getElementById('prev').addEventListener('click', startTime);
    //window.addEventListener('blur', blur);
    //window.addEventListener('beforeunload', beforeunload);

}
