const userInput = document.querySelector("#degree");
const optionSelected = document.querySelector("#type");
const btn = document.querySelector("#convert--btn");
const MessageBox = document.querySelector("#message");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  const SelectedValue = optionSelected.value;
  const InputValue = Number(userInput.value);

  if (!InputValue) {
    MessageBox.textContent = "Enter a valid number";
  }
  //Calculations of values
  else if (SelectedValue === "Fahrenheit") {
    MessageBox.textContent = "";
    MessageBox.textContent = `${(InputValue * 9) / 5 + 32}°F`;
  } else if (SelectedValue === "Celsius") {
    MessageBox.textContent = "";
    MessageBox.textContent = `${InputValue}°C`;
  } else if (SelectedValue === "Kelvin") {
    MessageBox.textContent = "";
    MessageBox.textContent = `${InputValue + 273.15}°K`;
  }
});
