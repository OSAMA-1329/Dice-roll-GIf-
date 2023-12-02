function rollDice() {
      
    var randomNumber = Math.floor(Math.random() * 6) + 1;

    var resultElement = document.getElementById('result');
    resultElement.textContent = 'Result: ' + randomNumber;
  }