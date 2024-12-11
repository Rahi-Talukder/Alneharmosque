const prayerTimes = JSON.parse(localStorage.getItem("prayerTimes")) || {
    Fajr: "",
    Dhuhr: "",
    Asr: "",
    Maghrib: "",
    Isha: "",
};

document.getElementById("fajr").value = prayerTimes.Fajr;
document.getElementById("dhuhr").value = prayerTimes.Dhuhr;
document.getElementById("asr").value = prayerTimes.Asr;
document.getElementById("maghrib").value = prayerTimes.Maghrib;
document.getElementById("isha").value = prayerTimes.Isha;

function saveTimes() {
    const newTimes = {
        Fajr: document.getElementById("fajr").value,
        Dhuhr: document.getElementById("dhuhr").value,
        Asr: document.getElementById("asr").value,
        Maghrib: document.getElementById("maghrib").value,
        Isha: document.getElementById("isha").value,
    };
    localStorage.setItem("prayerTimes", JSON.stringify(newTimes));
    alert("Prayer times updated!");
    window.location.href = "index.html";
}
