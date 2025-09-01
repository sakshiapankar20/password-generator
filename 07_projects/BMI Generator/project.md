#BMI projector

#html code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI-Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>BMI Calculator</h1>
        <form>
        <p><label>Height in cm:</label><input type="text" id="height"></p>
        <p><label>Weight in kg:</label><input type="text" id="weight"></p>

        <button onclick="Calculate(event)">Calculate</button>
        </form>

        <div id="result"></div>

        <div class="weight-guide">
            <h3>BMI Weight Guide</h3>
            <p>Under Weight = Less than 18.6</p>
            <p>Normal Range = 18.6 and 24.9</p>
            <p>Overweight = Greater than 24.9</p>
            
        </div>


    </div>
    
</body>

<script src="script.js"></script>
</html>
```

#css code
```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: lightcyan;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
h1{
    text-align: center;
}

.container{
    /* border: 2px solid blue; */
    padding: 30px;
    border-radius: 20px;
    box-shadow: 2px 6px 6px rgb(15, 44, 54);
    background-color: darkblue;
    color: white;

}

form{
    padding: 10px;
}

form>p{
    padding: 10px;
}

button{
    padding: 10px;
    border-radius: 10px;
    color:white;
    border: none;
    box-shadow: 2px 2px 2px rgb(52, 67, 72);

    background-color: blue;
    text-align: center;
    width: 90px;
    margin-left: 120px;
    font-weight: 800;
}


label{
    font-size: 18px;

}
input{
    margin-left: 10px;
    padding: 10px;
    border-radius: 10px;
}

.weight-guide{
    border-top: 2px solid gray;
    margin-top: 30px;
}

.weight-guide>h3{
     margin-top: 5px;
}

.weight-guide>p{
    margin-top: 5px;
}


```

#javascript code
```javascript
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


```
