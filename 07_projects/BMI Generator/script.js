function Calculate(event) {
  event.preventDefault(); // Prevent form reload

  const height = parseFloat(document.getElementById('height').value) / 100;
  const weight = parseFloat(document.getElementById('weight').value);
  const result = document.getElementById('result');

  if (!(height) || !(weight) || height <= 0 || weight <= 0) {
    result.textContent = "Please enter valid height and weight!";
    result.style.backgroundColor = "#ffcccc"; // Optional: red tint for error
    result.style.color="red";
    return;

    
  }

  const bmi = weight / (height * height);
  result.textContent = `Your BMI is: ${bmi.toFixed(2)} kg/m²`;

  // Style the result box
  result.style.padding = "10px";
  result.style.borderRadius = "10px";
  result.style.boxShadow = "2px 4px 6px lightblue";
  result.style.backgroundColor = "#e6f7ff"; // Optional: light blue background
  result.style.color="#212121"
  result.style.fontWeight="800";
  result.style.textAlign="center";
}
