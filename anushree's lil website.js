/* =================================
   OLD SCHOOL PERSONAL WEBSITE JS
================================= */


/* -------------------------------
   CURRENTLY LISTENING
-------------------------------- */

const songs = [
    "Dreams — Fleetwood Mac",
    "Linger — The Cranberries",
    "Sweet Disposition — The Temper Trap",
    "Everybody Wants to Rule the World — Tears for Fears",
    "Friday I'm In Love — The Cure",
    "There Is a Light That Never Goes Out — The Smiths"
];

let currentSong = 0;


function changeSong() {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    document.getElementById("song").textContent = songs[currentSong];

}


/* -------------------------------
   GUESTBOOK
-------------------------------- */

function signGuestbook() {

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const output = document.getElementById("guestMessage");

    if (name === "" || message === "") {

        output.textContent =
            "please fill in both boxes! ♡";

        return;
    }

    output.textContent =
        `thank you for signing my guestbook, ${name}! ✿`;

    // Clear the form
    document.getElementById("name").value = "";
    document.getElementById("message").value = "";

}


/* -------------------------------
   FAKE VISITOR COUNTER
-------------------------------- */

let visitors = localStorage.getItem("visitorCount");

if (visitors === null) {
    visitors = 1;
} else {
    visitors = parseInt(visitors) + 1;
}

localStorage.setItem("visitorCount", visitors);

document.getElementById("visitorCount").textContent =
    String(visitors).padStart(6, "0");


/* -------------------------------
   WELCOME MESSAGE
-------------------------------- */

window.addEventListener("load", function () {

    console.log(
        "♡ welcome to Anushree's little corner of the internet ♡"
    );

});