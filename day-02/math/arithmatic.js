// Addition
function add(x, y) {
    return x + y;
  }
  
  // Subtraction
  function subtract(x, y) {
    return x - y;
  }
  
  // Multiplication
  function multiply(x, y) {
    return x * y;
  }
  
  // Division
  function divide(x, y) {
    // Check for division by zero
    if (y === 0) {
      return "Cannot divide by zero";
    }
    return x / y;
  }
  
  // Example usage:
  console.log("Addition: " + add(5, 3));         // Output: 8
  console.log("Subtraction: " + subtract(8, 3)); // Output: 5
  console.log("Multiplication: " + multiply(4, 2)); // Output: 8
  console.log("Division: " + divide(10, 2));     // Output: 5
  console.log("Division: " + divide(5, 0));      // Output: "Cannot divide by zero"
  