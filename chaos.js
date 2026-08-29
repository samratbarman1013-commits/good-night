// This file is not responsible for any bugs it causes.
// Use at your own risk. Or don't use it. That's fine too.

const coffee = true;
const sleep = false;
const productivity = coffee && !sleep;

function isWeekend(day) {
    return day === "Saturday" || day === "Sunday"
        ? "Yes, stay in bed."
        : "No, suffer.";
}

function randomExcuse() {
    const excuses = [
        "It works on my machine.",
        "That's not a bug, it's a feature.",
        "I'll fix it tomorrow.",
        "Have you tried turning it off and on again?",
        "It was like that when I got here.",
    ];
    return excuses[Math.floor(Math.random() * excuses.length)];
}

console.log("Productivity level:", productivity ? "MAXIMUM" : "ZILCH");
console.log(isWeekend("Saturday"));
console.log("Excuse of the day:", randomExcuse());

// TODO: write actual code
