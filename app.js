const p1Button = document.querySelector("#p1");
const p2Button = document.querySelector("#p2");
const resetButton = document.querySelector("#reset");

const p1PointsEl = document.querySelector("#p1Points");
const p2PointsEl = document.querySelector("#p2Points");

function updatePoints(playerPointsEl, otherPlayerPointsEl, playerButtonEl, otherPlayerButtonEl){
    
    const pointsEl = document.querySelector("#points");
    const points = pointsEl.value;
    
    let playerPoints = parseInt(playerPointsEl.innerText);
    playerPoints += 1

    if (playerPoints == points) {
        playerPointsEl.style.color = "green";
        otherPlayerPointsEl.style.color = "red";
        playerButtonEl.disabled = true;
        otherPlayerButtonEl.disabled = true;
    }

    playerPointsEl.innerText = playerPoints;
}

p1Button.addEventListener("click", () => {updatePoints(p1PointsEl,p2PointsEl,p1Button,p2Button)});
p2Button.addEventListener("click", () => {updatePoints(p2PointsEl,p1PointsEl,p2Button,p1Button)});

resetButton.addEventListener("click", ()=> {
    p1PointsEl.innerText = "0";
    p2PointsEl.innerText = "0";
    p1PointsEl.style.color = "black";
    p2PointsEl.style.color = "black";
    p1Button.disabled = false;
    p2Button.disabled = false;
});