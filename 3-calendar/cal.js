const currentDate= document.querySelector(".current-date"),
daysTag= document.querySelector(".days"),
prevNextIcon= document.querySelectorAll(".icons div");

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", 
                "September", "October", "November", "December"];


const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDate(),
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let liTag = "";

    for (let i = 1; i <= lastDateofMonth; i++) {
        liTag += `<li>${i}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth +1;

        if(currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar();
    });
});