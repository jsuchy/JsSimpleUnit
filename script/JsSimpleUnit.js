function test(tests) {
  
  function write(message, color) {
    var output = document.createElement("div");
    output.innerHTML = message;
    output.style.color = color;
    document.body.appendChild(output);
  }
  
  for (var testName in tests) {
    try {
      tests[testName]();
      write(testName + " passed", "green");
    }
    catch (ex) {
      write(testName + " failed; " + ex.message, "red");
    }
  }
}

test.assertEquals = function(expectedValue, actualValue) {
  if (expectedValue !== actualValue) {
    throw new Error("Expected " + expectedValue + " but got " + actualValue);
  }
}