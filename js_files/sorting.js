var x = document.getElementById("arrayBtn");
x.addEventListener("click", newArrayClicked);

var numbers = [];
var n = 20;
var min_height = 50;

function newArrayClicked() {
    var barParent = document.getElementById("bars");
    var bar;
    deleteOldBars();
    for (let i = 0; i < n; i++) {
        let randomNumber = Math.floor(Math.random() * 90) + 1;
        numbers.push(randomNumber);
        bar = document.createElement("div");
        barParent.appendChild(bar);
        bar.classList.add("barsStyle");
        bar.classList.add("column_alignment");
        bar.style.height = (min_height + (randomNumber * 3)) + "px";
        bar.innerHTML = "<span>" + randomNumber + "</span>";
    }

    console.log(numbers.join(", "))
}

function deleteOldBars() {
    var barParent = document.getElementById("bars");
    var bars = barParent.getElementsByClassName("barsStyle");
    while (bars.length > 0) {
        barParent.removeChild(bars[0]);
    }

    numbers = [];
}

newArrayClicked();


function highlightBar(a, highlight) {
    var barParent = document.getElementsByClassName("barsStyle");
    if (highlight) {
        barParent[a].classList.add("highlight");
    } else {
        barParent[a].classList.remove("highlight");
    }
}

function swapBars(a, b) {
    var barParent = document.getElementsByClassName("barsStyle");
    barParent[a].style.height = (min_height + (numbers[a] * 3)) + "px";
    barParent[b].style.height = (min_height + (numbers[b] * 3)) + "px";
    barParent[a].innerHTML = "<span>" + numbers[a] + "</span>";
    barParent[b].innerHTML = "<span>" + numbers[b] + "</span>";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function addColor(i, color) {
    var barParent = document.getElementsByClassName("barsStyle");
    if (color !== "inherit") {
        barParent[i].style.background = color
    } else {
        barParent[i].style.removeProperty('background')
    }
    barParent[i].style.height = (min_height + (numbers[i] * 3)) + "px";
    barParent[i].innerHTML = "<span>" + numbers[i] + "</span>";
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBarColor(l, m) {
    let color = getRandomColor()
    for (let i = l; i <= m; i++) {
        addColor(i, color);
    }
}

function removeBarColor(l, m) {
    for (let i = l; i <= m; i++) {
        addColor(i, "inherit");
    }
}