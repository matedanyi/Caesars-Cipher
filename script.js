function rot13() {
  let str = document.getElementById("toConvert").value;
  let decoded = "";
  for (let i = 0; i < str.length; i++) {
    if (/[A-M]|[a-m]/.test(str[i])) {
      decoded += String.fromCharCode(str.charCodeAt(i) + 13);
    } else if (/[N-Z]|[n-z]/.test(str[i])) {
      decoded += String.fromCharCode(str.charCodeAt(i) - 13);
    } else {
      decoded += String.fromCharCode(str.charCodeAt(i));
    }
  }
  document.getElementById("answerDiv").style.display = "block";
  return document.getElementById("answer").innerHTML = decoded;
}

document.getElementById("convert").onclick = function () { rot13(); };
document.getElementById("answerDiv").style.display = "none";
