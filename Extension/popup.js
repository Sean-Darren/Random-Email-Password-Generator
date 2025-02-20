document.getElementById("generate-email").addEventListener("click", () => {
  fetch("http://127.0.0.1:5000/generate-email")
    .then((response) => response.json())
    .then((data) => {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: fillEmail,
          args: [data.email],
        });
      });
    })
    .catch((err) => console.error("Error fetching email:", err));
});

document.getElementById("generate-password").addEventListener("click", () => {
  fetch("http://127.0.0.1:5000/generate-password")
    .then((response) => response.json())
    .then((data) => {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: fillPassword,
          args: [data.password],
        });
      });
    })
    .catch((err) => console.error("Error fetching password:", err));
});

function fillEmail(email) {
  const emailField = document.querySelector(
    'input[type="email"], input[name="email"], input[id="email"]'
  );
  if (emailField) {
    emailField.value = email;
  } else {
    console.error("Email field not found.");
  }
}

function fillPassword(password) {
  const passwordField = document.querySelector(
    'input[type="password"], input[name="password"], input[id="password"]'
  );
  if (passwordField) {
    passwordField.value = password;
  } else {
    console.error("Password field not found.");
  }
}
