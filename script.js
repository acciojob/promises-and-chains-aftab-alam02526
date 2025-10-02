//your JS code here. If required.
const form = document.getElementById("userForm");
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // prevent page reload

      const name = nameInput.value.trim();
      const age = parseInt(ageInput.value);

      // Validation: Empty inputs
      if (!name || !ageInput.value) {
        alert("Please enter valid details");
        return;
      }

      // Create a promise
  const form = document.getElementById("userForm");
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent reload

    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);

    if (!name || !ageInput.value) {
      alert("Please enter valid details");
      return;
    }

    function checkAge(name, age) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (age > 18) {
            resolve(`Welcome, ${name}. You can vote.`);
          } else {
            reject(`Oh sorry ${name}. You aren't old enough.`);
          }
        }, 4000);
      });
    }

    checkAge(name, age)
      .then((msg) => {
        alert(msg);
      })
      .catch((err) => {
        alert(err);
      });
  });

