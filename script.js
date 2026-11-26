
function openInvitation() {
    const cover = document.querySelector(".cover");
    const invitation = document.getElementById("invitation");

    cover.classList.add("fade-out");

    setTimeout(function () {
        cover.style.display = "none";
        invitation.hidden = false;
        invitation.classList.add("fade-in");

        window.scrollTo(0, 0);
    }, 800);
}

function openInvitation() {
    const cover = document.querySelector(".cover");
    const invitation = document.getElementById("invitation");
    const music = document.getElementById("weddingMusic");

    music.volume = 0.5;
    music.play().catch(console.error);

    cover.classList.add("fade-out");

    setTimeout(function () {
        cover.style.display = "none";
        invitation.hidden = false;
        invitation.classList.add("fade-in");

        window.scrollTo(0, 0);
    }, 800);
}

const weddingDate = new Date(
    "2027-02-14T10:00:00+09:00"
).getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = Math.max(0, weddingDate - now);

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (distance / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (distance / 1000) % 60
    );

    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);

