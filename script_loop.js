// Task 3: JS Connection Test
console.clear();
console.log("script.js connected");

// Task 4: DOM Access (Get Elements)
// Fixed syntax: Variables must be assigned values directly.
const marksInput = document.getElementById("marks");
const btnDoWhile = document.getElementById("btnDoWhile");
const btnFor     = document.getElementById("btnFor");
const btnClear   = document.getElementById("btnClear");
const output     = document.getElementById("output");

// Verification log
console.log("DOM Elements Loaded:", { marksInput, btnDoWhile, btnFor, btnClear, output });

// Task 5: Event Handling (Click Logging)
// Removed nested DOMContentLoaded to prevent confusion.
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    btnDoWhile.addEventListener("click", function () {
        console.log("Step 1 (Do-While) clicked");
    });

    btnFor.addEventListener("click", function () {
        console.log("Step 2 (For-Loop) clicked");
    });

    btnClear.addEventListener("click", function () {
        console.log("Clear clicked");
    });
});

// Task 6: Helper Function (Input → Array)
function getMarksArray() {
    let text = marksInput.value;
    // Handles empty input to prevent NaN
    if (!text.trim()) return []; 
    return text.split(",").map(x => Number(x.trim()));
}

// Task 7: Step 1 Function: DO-WHILE (Total & Average)
function calculateStats() {
    console.clear();
    console.log(" === DO-WHILE: TOTAL & AVERAGE === ");

    let marks = getMarksArray();
    if (marks.length === 0) {
        output.innerHTML = "Please enter marks first!";
        return;
    }

    let i = 0;
    let total = 0;

    // Do-While execution
    do {
        total += marks[i];
        i++;
    } while (i < marks.length);

    let average = total / marks.length;

    console.log("Total =", total);
    console.log("Average =", average.toFixed(2));

    output.className = "alert alert-info mb-0";
    output.innerHTML = 
        "Total Marks = <b>" + total + "</b><br>" +
        "Average Marks = <b>" + average.toFixed(2) + "</b>";
}

// Task 8: Step 2 Function: FOR (Count PASS/FAIL)
function countPassFail() {
    console.clear();
    console.log(" === FOR LOOP: PASS / FAIL COUNT === ");

    let marks = getMarksArray();
    let pass = 0;
    let fail = 0;

    for (let i = 0; i < marks.length; i++) {
        if (marks[i] >= 50) {
            pass++;
            console.log("Mark " + (i + 1) + " = " + marks[i] + " > PASS");
        } else {
            fail++;
            console.log("Mark " + (i + 1) + " = " + marks[i] + " > FAIL");
        }
    }

    console.log("Total PASS =", pass);
    console.log("Total FAIL =", fail);

    output.className = "alert alert-success mb-0";
    output.innerHTML = 
        "Total PASS = <b>" + pass + "</b><br>" +
        "Total FAIL = <b>" + fail + "</b>";
}

// Task 9: Clear Function
function clearOutput() {
    console.clear();
    output.className = "alert alert-secondary mb-0";
    output.innerHTML = "Result cleared";
    marksInput.value = "";
}

// Task 10: Final Wiring (Connect Buttons → Functions)
document.addEventListener("DOMContentLoaded", function () {
    btnDoWhile.addEventListener("click", calculateStats);
    btnFor.addEventListener("click", countPassFail);
    btnClear.addEventListener("click", clearOutput);
});