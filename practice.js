const MAX_Hour = 17; // 5 PM
const MIN_Hour = 9;  // 9 AM

function checkShiftStatus(currentHour, isRemoteWorker) {
    if (currentHour < MIN_Hour || currentHour > MAX_Hour) {
        return "OFFSHIFT: Worker is outside of shift hours.";
    } else if (isRemoteWorker === true) {
        return "ON-SHIFT: Remote, Flexible hours.";
    } else {
        return "ON-SHIFT: In-office required.";
    }
}

const workerHours = [8, 10, 15];
const remoteStatuses = [false, true, false];

for (let i = 0; i < workerHours.length; i++) {
    let hour = workerHours[i];
    let isRemote = remoteStatuses[i];
    let statusResult = checkShiftStatus(hour, isRemote);

    console.log(`Worker ${i + 1}: ${statusResult}`);
}