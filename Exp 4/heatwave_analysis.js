// 1. Declare Variables
let locationName = "Mumbai";
let currentTemp = 42.5;         // in °C
let thresholdTemp = 40.0;       // in °C
let humidity = 68;              // in %
let monitoringDate = "2026-10-09";

// 2. Perform Operations & Calculations
let tempDifference = currentTemp - thresholdTemp;
let isHeatwave = currentTemp >= thresholdTemp;

// Determine heatwave status message
let statusMessage = "";
if (isHeatwave) {
    statusMessage = "WARNING: Heatwave threshold crossed by " + tempDifference.toFixed(1) + "°C!";
} else {
    statusMessage = "NORMAL: Temperature is below the threshold by " + Math.abs(tempDifference).toFixed(1) + "°C.";
}

// Prepare summary text for output
let summaryText = 
    "=== Heatwave Monitoring Report ===\n" +
    "Location: " + locationName + "\n" +
    "Date: " + monitoringDate + "\n" +
    "Current Temperature: " + currentTemp + "°C\n" +
    "Threshold Temperature: " + thresholdTemp + "°C\n" +
    "Humidity: " + humidity + "%\n" +
    "Status: " + statusMessage;

// 3. Display Output using standard JavaScript message-printing methods

// Output Method 1: Console Log
console.log(summaryText);

// Output Method 2: Alert Box
alert("Location: " + locationName + "\nStatus: " + statusMessage);

// Output Method 3: Document Write (HTML output)
document.write("<h2>Heatwave Temperature Analysis</h2>");
document.write("<p><strong>Location:</strong> " + locationName + "</p>");
document.write("<p><strong>Date:</strong> " + monitoringDate + "</p>");
document.write("<p><strong>Current Temp:</strong> " + currentTemp + " °C</p>");
document.write("<p><strong>Threshold Temp:</strong> " + thresholdTemp + " °C</p>");
document.write("<p><strong>Humidity:</strong> " + humidity + "%</p>");
document.write("<p><strong>Status:</strong> " + statusMessage + "</p>");