function generatePassword(length) {
    if(length < 6) {
      return "password should be atleast 6 characters long"
    }
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#%&*()+-=";
    let password = "";
  
    // Loop through the desired length to generate the password
    for (let i = 0; i < length; i++) {
      // Get a random index from the possible characters string
      let randomIndex = Math.floor(Math.random() * characters.length);
      // Add the character at the random index to the password
      password += characters[randomIndex];
    }
  
    return password;
  }
  console.log(generatePassword(8));
  console.log(generatePassword(11));
  console.log(generatePassword(6)); 

  