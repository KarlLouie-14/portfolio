"use strict";

// Runs showDate function per 1000 ms = 1 second.
showDate();
setInterval("showDate()", 1000);

// This function extracts the Pacific timezone and displays it in the date-time heading.
function showDate() {
    const now = new Date();
    const pacificTime = now.toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
    });
    const pacificDateTime = new Date(pacificTime);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = pacificDateTime.toLocaleDateString('en-US', options);
    const pacificTimeString = pacificDateTime.toLocaleTimeString('en-US');
    document.getElementById("date-time").innerHTML = `${dateString}<br>${pacificTimeString}`;
}