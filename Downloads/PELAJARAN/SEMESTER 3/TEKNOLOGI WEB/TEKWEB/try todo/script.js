document
  .getElementById("generateBtn")
  .addEventListener("click", generatePassword);
document.getElementById("copyBtn").addEventListener("click", copyToClipboard);

function generatePassword() {
  const length = document.getElementById("length").value;
  const includeUppercase = document.getElementById("includeUppercase").checked;
  const includeLowercase = document.getElementById("includeLowercase").checked;
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeSpecialChars = document.getElementById(
    "includeSpecialChars"
  ).checked;

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  let charSet = "";

  if (includeUppercase) charSet += uppercaseChars;
  if (includeLowercase) charSet += lowercaseChars;
  if (includeNumbers) charSet += numberChars;
  if (includeSpecialChars) charSet += specialChars;

  if (charSet === "") {
    alert("Please select at least one criteria");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

  document.getElementById("passwordOutput").innerText = password;
}

function copyToClipboard() {
  const password = document.getElementById("passwordOutput").innerText;
  if (password) {
    navigator.clipboard.writeText(password).then(
      () => {
        alert("Password copied to clipboard");
      },
      () => {
        alert("Failed to copy password");
      }
    );
  }
}
