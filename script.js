let checkNetwork = true,
    popup = document.querySelector(".popup"),
    wifiIcon = document.querySelector(".icon img"),
    title = document.querySelector(".details .title"),
    description = document.querySelector(".details .desc"),
    wordOnline = document.querySelector(".online"),
    wordOffline = document.querySelector(".offline");
setInterval(
    async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            checkNetwork = response.status >= 200 && response.status < 300;
        } catch (error) {
            checkNetwork = false;
        }
        popupStyle(checkNetwork);
    }    
,1000);

function popupStyle(booleanValue) {
    if (booleanValue) {
        popup.style = "border-color: 4px solid rgb(0, 255, 0)";
        wifiIcon.style = "background-color: rgb(0, 255, 0)";
        title.innerHTML = "Restored Connection";
        description.innerHTML = "Internet connection has been restored.";
        wordOnline.style = "color: rgb(0, 255, 0)";
        wordOffline.style = "color: black";
        popup.classList.remove("show");
    } else {
        popup.style = "border-color: 4px solid red";
        wifiIcon.style = "background-color: red";
        title.innerHTML = "Lost Connection";
        description.innerHTML = "Please check your internet connection.";
        wordOnline.style = "color: black";
        wordOffline.style = "color: red";
        popup.classList.add("show");
    }
}