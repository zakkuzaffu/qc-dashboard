const MAX_TEMP = 300; // in degree Celsius
const MIN_STRENGTH = 450; // in MPa

function checkMaterialSafety(materialTemperature, tensileStrength, isWeldingComplete) {
    if (materialTemperature > MAX_TEMP || isWeldingComplete === false) {
        return "FAILURE: Process safety criteria failed.";
    } else if (tensileStrength < MIN_STRENGTH) {
        return "WARNING: Strength is suboptimal. Requires engineer review";
    } else {
        return "SUCCESS: Material passed all QC criteria.";
    }
}

const batchTemperatures = [240, 260, 280, 300, 320];
const batchStrengths = [500, 485, 460, 450, 440];
const weldingStatuses = [true, true, false, true, true];

const targetLocation = document.getElementById("report-body");

for (let i = 0; i < batchTemperatures.length; i++) {
    let temp = batchTemperatures[i];
    let strength = batchStrengths[i];
    let weldingComplete = weldingStatuses[i];
    let statusResult = checkMaterialSafety(temp, strength, weldingComplete);
    
    let newRow = document.createElement('tr');

    if (statusResult.startsWith("SUCCESS")) {
        newRow.classList.add('status-success');
    } else if (statusResult.startsWith("WARNING")) {
        newRow.classList.add('status-warning');
    } else {
        newRow.classList.add('status-failure');
    }
    
    let sampleCell = document.createElement('td');
    sampleCell.textContent = i + 1;
    newRow.appendChild(sampleCell);
    let tempCell = document.createElement('td');
    tempCell.textContent = temp + " °C";
    newRow.appendChild(tempCell);
    let strengthCell = document.createElement('td');
    strengthCell.textContent = strength + " MPa";
    newRow.appendChild(strengthCell);
    let statusCell = document.createElement('td');
    statusCell.textContent = statusResult;
    if (statusResult.startsWith("SUCCESS")) {
        statusCell.style.color = "green";
    } else if (statusResult.startsWith("WARNING")) {
        statusCell.style.color = "orange";
    } else {
        statusCell.style.color = "red";
    }
    newRow.appendChild(statusCell);
    targetLocation.appendChild(newRow);
}