window.onload = function () {
  // Fetch the current user data
  axios
    .get(`http://localhost:3000/users`)
    .then((response) => {
      const users = response.data.recordset;
      users.forEach(function (user) {
        var row = document.createElement("tr");

        var idCell = document.createElement("td");
        idCell.textContent = user.UserID;
        row.appendChild(idCell);

        var nameCell = document.createElement("td");
        var nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.value = user.UserName;
        nameCell.appendChild(nameInput);
        row.appendChild(nameCell);

        var passwordCell = document.createElement("td");
        var passwordInput = document.createElement("input");
        passwordInput.type = "password";
        passwordInput.value = user.Password;
        passwordCell.appendChild(passwordInput);
        row.appendChild(passwordCell);

        var roleCell = document.createElement("td");
        var roleInput = document.createElement("input");
        roleInput.type = "text";
        roleInput.value = user.UserRole;
        roleCell.appendChild(roleInput);
        row.appendChild(roleCell);

        var actionCell = document.createElement("td");
        var updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.addEventListener("click", function () {
          const updatedData = {
            UserName: nameInput.value,
            Password: passwordInput.value,
            UserRole: roleInput.value,
          };
          updateUser(user.UserID, updatedData);
        });
        actionCell.appendChild(updateButton);
        row.appendChild(actionCell);

        document.getElementById("usersTable").appendChild(row);
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

// Function to update a user
// Function to update a user
function updateUser(userId, updatedData) {
  axios
    .put(`/update`, {
      UserID: userId,
      Password: updatedData.Password, // assuming you have a password field in your updatedData
      UserName: updatedData.UserName,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}
