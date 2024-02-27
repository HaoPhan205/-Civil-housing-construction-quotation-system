document
  .getElementById("createUserForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const newUser = {
      UserID: document.getElementById("UserID").value,
      Password: document.getElementById("Password").value,
      UserName: document.getElementById("UserName").value,
      UserRole: document.getElementById("UserRole").value,
    };

    axios
      .post("/register", newUser)
      .then((response) => {
        console.log(response.data);
        alert("User created successfully");
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while creating the user");
      });
  });
