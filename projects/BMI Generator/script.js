function Calculate(event) {
  event.preventDefault(); // 🔴 Prevent the form from reloading the page

  // Get values and convert them to numbers
  const height = parseFloat(document.getElementById('height').value)/100; // Convert cm to meters
  const weight = parseFloat(document.getElementById('weight').value);

  const result = document.getElementById('result');

  // Validate inputs
  if (!(height) || !(weight) || height <= 0 || weight <= 0) {
    result.textContent = "Please enter valid height and weight!";
    return;
  }

  // Calculate BMI
  const bmi = weight / (height * height);

  // Display result
  result.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
}
