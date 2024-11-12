// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
  // Character sets for password generation
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()";

  // TODO: Create a variable for the character set based on selected options
  let setCharacter = "";

  if (options.includeUppercase) setCharacter += uppercase;
  if (options.includeLowercase) setCharacter += lowercase;
  if (options.includeNumbers) setCharacter += numbers;
  if (options.includeSpecialChars) setCharacter += specialChars;

  // Make sure at least one character type is selected
  if (setCharacter === "") {
    return "Please select at least one character type!";
  }

  // TODO: Generate the password based on the selected criteria
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * setCharacter.length);
    password += setCharacter[randomIndex];
  }

  return password;
};

// TODO: Add event listener to the button to call generatePassword and display the output

// BONUS: Implement the copy to clipboard functionality
