const paraDiv = document.getElementById("p-div");
const imgDiv = document.getElementById("img-div");

const paraButton = document.getElementById("p-button");
const imgButton = document.getElementById("img-button");

paraButton.onclick = function() {
    imgDiv.style.display = "none";
    paraDiv.style.display = "block";
    let newPara = document.createElement("p");
    newPara.innerHTML = "Hot chocolate is bad today";
    newPara.style.color = "white";
    newPara.style.backgroundColor = "black";
    newPara.style.padding = "10px"
    paraDiv.appendChild(newPara);
}

imgButton.onclick = function() {
    imgDiv.style.display = "block";
    paraDiv.style.display = "none";
    let newImg = document.createElement("img");
    newImg.src = "pigeon.png"
    newImg.style.width = "25%"
    imgDiv.appendChild(newImg)
}