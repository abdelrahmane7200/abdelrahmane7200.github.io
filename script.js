let ownerName = "Abdelrahman E"; // update the part BETWEEN the "quotes"
let userName = "abdelrahmane7200"; // same here

document.querySelectorAll(".owner-name").forEach((e) => {
    e.innerHTML = ownerName;
});

document.querySelector("#github").href = "http://github.com/" + userName;
document.querySelector("#fork").href = "http://github.com/" + userName + "/" + userName + ".github.io";
