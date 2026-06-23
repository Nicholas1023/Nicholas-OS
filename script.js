function bootScreen() {
    document.getElementById("main").style.display =
    document.getElementById("footer").style.display = "flex";
    document.getElementById("boot").style.display = "none";
}

setTimeout(() => {bootScreen()}, 2000);

function time() {
    date = new Date();
    month = date.getMonth() + 1;
    if (month == 1) {
        monthName = "January";
    } else if (month == 2) {
        monthName = "February";
    } else if (month == 3) {
        monthName = "March";
    } else if (month == 4) {
        monthName = "April";
    } else if (month == 5) {
        monthName = "May";
    } else if (month == 6) {
        monthName = "June";
    } else if (month == 7) {
        monthName = "July";
    } else if (month == 8) {
        monthName = "August";
    } else if (month == 9) {
        monthName = "September";
    } else if (month == 10) {
        monthName = "October";
    } else if (month == 11) {
        monthName = "November";
    } else if (month == 9) {
        monthName = "December";
    }
    document.getElementById("time").innerHTML = `${date.getDate()} ${monthName} ${date.getFullYear()}, ${date.toLocaleTimeString()}`;
};

setInterval(time, 500);

function minimiseW(window, bar) {
    document.getElementById(window).style.height = "60dvh";
    document.getElementById(window).style.width = "60dvw";
    document.getElementById(window).style.borderRadius = "10px";
    document.getElementById(bar).style.borderTopLeftRadius =
    document.getElementById(bar).style.borderTopRightRadius = "10px";
    document.getElementById(window).style.display = "block";
    document.getElementById(bar).style.display = "flex";
    document.getElementById(window).style.position = "absolute";
}

function maximiseW(window, bar) {
    document.getElementById(window).style.height = "100%";
    document.getElementById(window).style.width = "100%";
    document.getElementById(window).style.borderRadius =
    document.getElementById(bar).style.borderRadius = "0"; 
    document.getElementById(window).style.position = "unset";
}

function closeW(window) {
    document.getElementById(window).style.display = "none"; 
}

document.getElementById("fileOpen").addEventListener("click", () => {
    minimiseW("file", "fileBar");
    document.getElementById("file").click();
});

document.getElementById("terminalOpen").addEventListener("click", () => {
    minimiseW("terminal", "terminalBar");
    document.getElementById("terminal").click();
});

document.getElementById("installerOpen").addEventListener("click", () => {
    minimiseW("installer", "installerBar");
    document.getElementById("installer").click();
});

document.getElementById("about").addEventListener("click", () => {
    document.getElementById("about").style.zIndex = "1000";
    document.getElementById("file").style.zIndex = "999";
    document.getElementById("terminal").style.zIndex = "999";
    document.getElementById("installer").style.zIndex = "999";
});

document.getElementById("terminal").addEventListener("click", () => {
    document.getElementById("about").style.zIndex = "999";
    document.getElementById("file").style.zIndex = "999";
    document.getElementById("terminal").style.zIndex = "1000";
    document.getElementById("installer").style.zIndex = "999";
});

document.getElementById("file").addEventListener("click", () => {
    document.getElementById("about").style.zIndex = "999";
    document.getElementById("file").style.zIndex = "1000";
    document.getElementById("terminal").style.zIndex = "999";
    document.getElementById("installer").style.zIndex = "999";
});

document.getElementById("installer").addEventListener("click", () => {
    document.getElementById("about").style.zIndex = "999";
    document.getElementById("file").style.zIndex = "999";
    document.getElementById("terminal").style.zIndex = "999";
    document.getElementById("installer").style.zIndex = "1000";
});

drag("about");
drag("file");
drag("terminal");
drag("installer");
drag("webApp");

function drag(window) {
    document.getElementById(window + "Bar").addEventListener("mouseup", () => {document.onmousemove = ""});
    document.getElementById(window + "Bar").addEventListener("mousedown", (e) => {
        initX = e.clientX;
        initY = e.clientY;
        document.onmousemove = move;
    });

    function move(e) {
        nowX = initX - e.clientX;
        initX = e.clientX;
        nowY = initY - e.clientY;
        initY = e.clientY;
        document.getElementById(window).style.top = `${document.getElementById(window).offsetTop - nowY}px`;
        document.getElementById(window).style.left = `${document.getElementById(window).offsetLeft - nowX}px`;
    }
}

document.getElementById("fileOpener").addEventListener("change", function(event) {
    document.getElementById("fileViewer").src = URL.createObjectURL(event.target.files[0]);
});

function createWebApp() {
    let app = document.createElement("div");
    app.className = "app";
    app.id = document.getElementById("url").value;
    if (!document.getElementById("icon").value) {
        app.innerHTML = `<img src='${document.getElementById("url").value}/favicon.ico' width='50px' height='50px'><p>${document.getElementById("name").value}</p>`;
    } else {
        app.innerHTML = `<img src='${document.getElementById("icon").value}' width='50px' height='50px'><p>${document.getElementById("name").value}</p>`;
    }
    document.getElementById("apps").appendChild(app);
    document.getElementById(document.getElementById("url").value).addEventListener("click", () => {
        minimiseW("webApp", "webAppBar");
        document.getElementById("webAppViewer").src = document.getElementById("url").value;
        document.getElementById("appName").textContent = document.getElementById("name").value;
    });
}