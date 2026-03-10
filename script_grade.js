// Task 3
console.clear();
console.log("script_grade.js connected");

// Task 4
const nameInput = document.getElementById("studentName");
const pw1Input = document.getElementById("pw1");
const pw2Input = document.getElementById("pw2");
// FIX: Changed 'conts' to 'const'
const btn = document.getElementById("btnCalc");
const outputBox = document.getElementById("outputBox");

// Task 4-2: Quick checks
console.log(nameInput);
console.log(pw1Input);
console.log(pw2Input);
console.log(btn);
console.log(outputBox);

// Task 5 & 6 (Consolidated)
// Madam, saya hubungkan event listener ke fungsi calculateMarks terus.
btn.addEventListener("click", function () {
    console.log("Button clicked");
    calculateMarks(); // Task 6: Execute the main function
});

// Task 7 - 10 (Main Function)
function calculateMarks() {
    console.log("calculateMarks() executed");

    // Task 7: Data extraction
    let name = nameInput.value.trim();
    let pw1 = Number(pw1Input.value);
    let pw2 = Number(pw2Input.value);

    // Task 10: Validation (Logic check before calculation)
    // FIX: Changed '| |' (with spaces) to '||' (correct logical OR)
    // Added proper condition checks for 0-100 range
    if (!name || isNaN(pw1) || isNaN(pw2) || pw1 < 0 || pw1 > 100 || pw2 < 0 || pw2 > 100) {
        outputBox.className = "alert alert-danger mt-3 mb-0";
        // FIX: Wrapped string in quotes and added missing text
        outputBox.innerHTML = "❌ Please enter a name and valid marks (0-100) for both PW1 and PW2.";
        return; // Stops the function here if validation fails
    }

    // Task 8: Calculation
    let total = pw1 + pw2;
    let average = total / 2;
    let percentage = (total / 200) * 100;

    console.log("Name:", name);
    console.log("Total:", total);
    console.log("Average:", average);
    console.log("Percentage:", percentage);

    // Task 9: Selection Logic (Grade)
    let grade;
    if (average >= 80) {
        grade = "Excellent";
    } else if (average >= 60) {
        grade = "Good";
    } else if (average >= 40) {
        grade = "Satisfactory";
    } else {
        grade = "Fail";
    }

    console.log("Grade:", grade);

    // Task 10: Output to Browser (DOM)
    outputBox.className = "alert alert-success mt-3 mb-0";
    // Using Template Literals for clean multi-line display
    outputBox.innerHTML = `
        <h5 class="alert-heading">Result Summary</h5>
        <hr>
        <strong>Name:</strong> ${name}<br>
        <strong>PW1:</strong> ${pw1} / 100<br>
        <strong>PW2:</strong> ${pw2} / 100<br>
        <strong>Total:</strong> ${total} / 200<br>
        <strong>Average:</strong> ${average.toFixed(2)} / 100<br>
        <strong>Percentage:</strong> ${percentage.toFixed(2)}%<br>
        <strong>Grade:</strong> <span class="badge bg-primary">${grade}</span>
    `;
}