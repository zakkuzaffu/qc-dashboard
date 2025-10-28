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

for (let i = 0; i < 8; i++) {
    let sampleTemp = 200 + (i * 20);
    let sampleStrength = 500;
    let sampleWelding = true;

    checkMaterialSafety(sampleTemp, sampleStrength, sampleWelding);
}

console.log("--- QC Run Complete ---\n");