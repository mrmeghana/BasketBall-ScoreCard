let homeScoreButtonOne=document.getElementById("home-score-btn-1");
let homeScoreButtonTwo=document.getElementById("home-score-btn-2");
let homeScoreButtonThree=document.getElementById("home-score-btn-3");
let homeStoreEL=document.getElementById("home-score");
let homescore=0;

function addPoints(points)
{
    homescore+=points;
    homeStoreEL.textContent=homescore;
}


let guestScoreButtonOne=document.getElementById("guest-score-btn-1");
let guestScoreButtonTwo=document.getElementById("guest-score-btn-2");
let guestScoreButtonThree=document.getElementById("guest-score-btn-3");
let guestStoreEL=document.getElementById("guest-score");
let guestscore=0;

function addPointsGuest(points)
{
    guestscore+=points;
    guestStoreEL.textContent=guestscore;
}
