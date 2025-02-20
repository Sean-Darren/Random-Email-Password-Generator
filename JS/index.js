document.addEventListener("DOMContentLoaded", () => {
  //Email Generator

  function generateEmail() {
    const frontChars = "abcdefghijklmnopqrstuvwxyz0123456789";
    const emailDomains = [
      "gmail.com",
      "yahoo.com",
      "outlook.com",
      "hotmail.com",
      "aol.com",
      "icloud.com",
      "protonmail.com",
      "zoho.com",
      "mail.com",
      "yandex.com",
      "gmx.com",
      "hushmail.com",
      "fastmail.com",
      "tutanota.com",
      "inbox.com",
      "rediffmail.com",
      "runbox.com",
      "posteo.net",
      "startmail.com",
      "qq.com",
    ];

    const elength = Math.floor(Math.random() * 6) + 10;
    frontMail = "";
    for (let i = 0; i < elength; i++) {
      const randomIndex = Math.floor(Math.random() * frontChars.length);
      frontMail += frontChars[randomIndex];
    }
    const randomDomainNum = Math.floor(Math.random() * emailDomains.length);
    frontMail += "@" + emailDomains[randomDomainNum];

    return frontMail;
  }

  var email_button = document.querySelector("#email_generate");

  email_generator = email_button.addEventListener("click", function () {
    const newMail = generateEmail();
    document.getElementById("email_label").innerHTML = newMail;
    document.getElementById("email_bt").addEventListener("click", copyEmail);

    function copyEmail() {
      let emailVal = document.getElementById("email_label");
      navigator.clipboard.writeText(emailVal.textContent);
      document
        .getElementById("EmailDisplay")
        .setAttribute("style", "display: inline-block;");
    }
  });

  //Password Generator

  //Initiate Password Checkbox Value

  const includeLowercase_val = document.getElementById("lowercase");
  const includeUppercase_val = document.getElementById("uppercase");
  const includeNumbers_val = document.getElementById("numbers");
  const includeSymbols_val = document.getElementById("symbols");

  includeLowercase_val.addEventListener("click", function () {
    document.getElementById("lowercase").setAttribute("value", "true");
  });

  includeUppercase_val.addEventListener("click", function () {
    document.getElementById("uppercase").setAttribute("value", "true");
  });

  includeNumbers_val.addEventListener("click", function () {
    document.getElementById("numbers").setAttribute("value", "true");
  });

  includeSymbols_val.addEventListener("click", function () {
    document.getElementById("symbols").setAttribute("value", "true");
  });

  //End of Initiate Password Checkbox Value

  function generatePassword(
    length,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols
  ) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChars = "0123456789";
    const symbolsChars = "!@#$%^&*()-_=+.,";

    let = allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numbersChars : "";
    allowedChars += includeSymbols ? symbolsChars : "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[randomIndex];
    }

    return password;
  }

  var password_button = document.getElementById("password_generate");

  password_generator = password_button.addEventListener("click", function () {
    const length = parseInt(
      document.getElementById("length_output").textContent
    );
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    if (
      !includeLowercase &&
      !includeUppercase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      document.getElementById("alertPass").textContent =
        "Please select at least one option!";
      return;
    } else {
      document.getElementById("alertPass").textContent = "";
      const password = generatePassword(
        length,
        includeLowercase,
        includeUppercase,
        includeNumbers,
        includeSymbols
      );
      document.getElementById("pass_label").innerHTML = password;
      document.getElementById("pass_bt").addEventListener("click", copyPass);

      function copyPass() {
        let passVal = document.getElementById("pass_label");
        navigator.clipboard.writeText(passVal.textContent);
        document
          .getElementById("PassDisplay")
          .setAttribute("style", "display: inline-block;");
      }
    }
  });
});
