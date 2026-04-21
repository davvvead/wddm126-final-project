let projectName = "WDDM 126 Final Project";
let projectTitle = "WDDM 126 Final Project";
let labName = "WDDM 126 Lab 10";

function init() {
    console.log("Project loaded:", projectName);
}

function logDebugInfo() {
    console.log("=== Debug Info ===");
    console.log("Project:", projectTitle);
    console.log("Page Title:", document.title);
    console.log("DOM Ready:", document.readyState);
    console.log("Lab Name:", labName);
}

function displayYear() {
    const year = new Date().getFullYear();
    console.log("Current year:", year);
}

init();
displayYear();
logDebugInfo();