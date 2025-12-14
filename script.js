function insert(value) {
  document.getElementById("expression").value += value;
}

function calculateExpression() {
  let input = document.getElementById("expression").value;

  try {
    
    if (/sqrt\([^)]*,/.test(input)) {
      throw new Error("sqrt() takes only one argument");
    }
    input = input.replace(/\^/g, "**");
    input = input.replace(/sqrt\(/g, "Math.sqrt(");
    input = input.replace(/sin\(/g, "Math.sin(");
    input = input.replace(/cos\(/g, "Math.cos(");
    input = input.replace(/tan\(/g, "Math.tan(");

    const result = eval(input);
    document.getElementById("result").value = result;
  } catch {
    document.getElementById("result").value = "Error";
  }
}

function clearCalc() {
  document.getElementById("expression").value = "";
  document.getElementById("result").value = "";
}

function backspace() {
  const exp = document.getElementById("expression").value;
  document.getElementById("expression").value = exp.slice(0, -1);
}







const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
