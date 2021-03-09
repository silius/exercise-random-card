const values = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"]
randomNumber = (max=2) => Math.floor(Math.random() * max);
randomSuit = () => {
    let suit = randomNumber(4)
    switch (suit) {
        case 0:
            return "♥:red";
        case 1:
            return "♠:black";
        case 2:
            return "♣:black";
        case 3:
            return "♦:red";
    }
}
randomCard = () => `${randomSuit()}:${values[randomNumber(13)]}`

window.onload = () => {
    const card = randomCard();
    document.querySelectorAll(".suit").forEach(elm => {
        elm.innerHTML = card.split(':')[0];
        elm.style.color = card.split(':')[1];
    });
    document.querySelector(".value").innerHTML = card.split(':')[2];
}

document.querySelector("button").addEventListener("click",window.onload);