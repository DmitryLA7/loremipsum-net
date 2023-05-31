const rangeResult = () => {
  const value = document.querySelector("#order-range-result");
  const input = document.querySelector("#order-range");
  value.textContent = input.value;
  input.addEventListener("input", (event) => {
    value.textContent = event.target.value;
  });
};

export default rangeResult;
