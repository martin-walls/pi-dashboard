document.addEventListener("DOMContentLoaded", updateTime);

function updateTime() {
  const now = new Date();
  const hr = now.getHours();
  const min = now.getMinutes();

  document.getElementById("time-hr").innerHTML = leftPadZeroes(hr);
  document.getElementById("time-min").innerHTML = leftPadZeroes(min);

  setTimeout(updateTime, 1000);
}

function leftPadZeroes(x) {
  if (x < 10) {
    x = "0" + x;
  }
  return x;
}
