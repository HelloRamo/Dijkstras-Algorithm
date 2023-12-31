// BEGIN: Test Cases
// Test case 1: Correct distance input
document.getElementById('distanceToA').value = '10';
validateInput('A');
// Expected output: Alert with message "Correct! The distance to node A is 10."

// Test case 2: Incorrect distance input
document.getElementById('distanceToB').value = '15';
validateInput('B');
// Expected output: Alert with message "Incorrect for node B. Try again."

// Test case 3: Correct distance input
document.getElementById('distanceToC').value = '5';
validateInput('C');
// Expected output: Alert with message "Correct! The distance to node C is 5."
// END: Test Cases