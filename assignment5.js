const MAX_TEMP = 300; // in degree Celsius
const MIN_STRENGTH = 450; // in MPa
function checkMaterialSafety(materialTemperature, tensileStrength, isWeldingComplete) {
    if (materialTemperature > MAX_TEMP||isWeldingComplete === false) {
        console.log("FAILURE: Process safety criteria failed.");
    } else if (tensileStrength < MIN_STRENGTH) {
        console.log("WARNING: Strenght is suboptimal. Requires engineer review");
    } else {
        console.log("SUCCESS: Material passed all QC criteria.");
    }
}

console.log("\n--- Automated Material QC Run ---");

const batchTemperatures = [240, 260, 280, 300, 320];
const batchStrengths = [500, 485, 460, 450, 440];
const weldingStatuses = [true, true, false, true, true];

for (let i = 0; i < batchTemperatures.length; i++) {
    let temp = batchTemperatures[i];
    let strength = batchStrengths[i];
    let weldingComplete = weldingStatuses[i];
    checkMaterialSafety(temp, strength, weldingComplete);
}

console.log("--- QC Run Complete ---\n");