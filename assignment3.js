const studentName = "Twin";
let currentJob = "Metallurgy Engineer in a manufacturing company";
function logCareerGoal(goal) {
    console.log(`
        ---
        JS Career Log for ${studentName}:
        ---
        Current Role: ${currentJob}
        Future Goal: ${goal}
        This function confirms that ${studentName} is actively pursuing a career in technology.
        `);
}
logCareerGoal("Remote IT Developer");