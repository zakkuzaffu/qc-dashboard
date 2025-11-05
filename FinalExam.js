const MAX_TEMP= 350; // in degree Celsius
const MIN_TEMP = 100 ; // in degree Celsius

function processTempLog(Temperatures) {
    if (Temperatures > MAX_TEMP|| Temperatures < MIN_TEMP) {
        return "ALERT: Temperature is outside bounds.";
    } else return "Temperature is stable.";
}

const tempLogs = [90, 150, 200, 360, 120];

for (let i = 0; i < tempLogs.length; i++) {
    let temp = tempLogs[i];
    let logResult = processTempLog(temp);
    console.log(`Log ${i + 1}: ${logResult}`);
}

const isAuthenticated = false;
const userRole = "Admin, Engineer, Guest";

function checkUserAccess(isAuthenticated, userRole) {
    if (isAuthenticated === false) {
        return "ACCESS DENIED: Please log in.";
    } else if (userRole === "Admin") {
        return "AFull Access: All systems online.";
    } else if (userRole === "Engineer") {
        return "Limited Access: Production data only.";
    } else return "Basic Access: View-only dashboard.";
}