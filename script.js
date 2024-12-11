// Load prayer times from localStorage or default times
const defaultTimes = {
    Fajr: "05:30 AM",
    Dhuhr: "12:30 PM",
    Asr: "03:45 PM",
    Maghrib: "06:15 PM",
    Isha: "07:45 PM",
};

const prayerTimes = JSON.parse(localStorage.getItem("prayerTimes")) || defaultTimes;

function populatePrayerTimes() {
    const tableBody = document.getElementById("prayer-times");
    tableBody.innerHTML = "";
    for (const [prayer, time] of Object.entries(prayerTimes)) {
        tableBody.innerHTML += `
            <tr>
                <td>${prayer}</td>
                <td>${time}</td>
            </tr>
        `;
    }
}

populatePrayerTimes();
