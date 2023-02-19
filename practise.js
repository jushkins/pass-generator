const showPassEL = document.getElementById("link-button1")
const showPassEl = document.getElementById("link-button2")
function generatePassword(length) {
    // List of possible characters in the password
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[];:<>,.?/";
  
    let password = "";
    for (let i = 0; i < length; i++) {
      // Choose a random character from the charset
      const randomIndex = Math.floor(Math.random() * charset.length);
      const randomChar = charset.charAt(randomIndex);
  
      // Append the random character to the password
      password += randomChar;
    }
  
    return password;
  }
function getPass() {
    const password1 = generatePassword(15);
    const password2 = generatePassword(15);
    showPassEL.textContent = password1
    showPassEl.textContent = password2
}


///////////////////////////////////////////////////////////
const copyBtn = document.querySelector('#link-button1');
copyBtn.addEventListener('click', () => {
    // Get the text to copy from the button's data attribute
    const textToCopy = copyBtn.getAttribute('data-text-to-copy');

    // Create a temporary input element
    const tempInput = document.createElement('input');
    tempInput.value = textToCopy;

    // Add the input element to the document
    document.body.appendChild(tempInput);

    // Select and copy the text from the input element
    tempInput.select();
    document.execCommand('copy');

    // Remove the temporary input element from the document
    document.body.removeChild(tempInput);

    // Show a confirmation message
    alert('Text copied to clipboard!');
  });

