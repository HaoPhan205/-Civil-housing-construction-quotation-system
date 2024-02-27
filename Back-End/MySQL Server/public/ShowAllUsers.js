// fetch("http://localhost:3000/Users").then((res) => {
//   res.json().then((data) => {
//     console.log(data);
//     if (data.length > 0) {
//       var temp = "";
//       data.forEach((u) => {
//         temp += "<tr>";
//         temp += "<td>" + u.UserID + "</td>";
//         temp += "<td>" + u.UserName + "</td>";
//         temp += "<td>" + u.UserRole + "</td></tr>";
//       });
//       document.getElementById("users").innerHTML = temp;
//     }
//   });
// });
document.getElementById("showAllUsers").addEventListener("click", function () {
  axios
    .get("http://localhost:3000/users")
    .then(function (response) {
      var users = response.data.recordset;
      var usersDiv = document.getElementById("users");
      var userDiv = document.createElement("div");
      const usersTable = document.getElementById("usersTable");

      // Clear the users div
      usersDiv.innerHTML = "";
      userDiv.className = "user";

      console.log(users);
      // get all users and add to UserProfile
      var userProfile = {
        UserID: users[0].UserID,
        UserName: users[0].UserName,
        UserRole: users[0].UserRole,
      };

      // Add the user to the users div
      users.forEach(function (user) {
        var row = document.createElement("tr");

        var idCell = document.createElement("td");
        idCell.textContent = user.UserID;
        row.appendChild(idCell);

        var nameCell = document.createElement("td");
        nameCell.textContent = user.UserName;
        row.appendChild(nameCell);

        var roleCell = document.createElement("td");
        roleCell.textContent = user.UserRole;
        row.appendChild(roleCell);

        const actionCell = document.createElement("td");

        var updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.addEventListener("click", function () {
          window.location.href = `/updateUser.html?userId=${user.UserID}`;
        });
        actionCell.appendChild(updateButton);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
          axios
            .delete("/delete", { data: { UserID: user.UserID } })
            .then((response) => {
              console.log(response.data);
              alert("User deleted successfully");
              // Reload the users
              location.reload();
            })
            .catch((error) => {
              console.error(error);
              alert("An error occurred while deleting the user");
            });
        });
        actionCell.appendChild(deleteButton);
        row.appendChild(actionCell);

        usersTable.appendChild(row);

        document.getElementById("usersTable").appendChild(row);
      });

      // Check if users is an array
      // if (Array.isArray(users)) {
      //   // Add each user to the users div
      //   users.forEach(function (user) {
      //     var userDiv = document.createElement("div");
      //     userDiv.textContent =
      //       "User ID: " + user.UserID + ", Password: " + user.Password;
      //     usersDiv.appendChild(userDiv);
      //   });
      // } else if (typeof users == "object" && users !== null) {
      //   // Add the user to the users div
      //   var userDiv = document.createElement("div");
      //   userDiv.textContent =
      //     "User ID: " + users.UserID + ", Password: " + users.Password;
      //   usersDiv.appendChild(userDiv);
      // } else {
      //   // Add the user to the users div
      //   var userDiv = document.createElement("div");
      //   userDiv.textContent = "No users found";
      //   usersDiv.appendChild(userDiv);
      // }
    })
    .catch(function (error) {
      console.log(error);
    });
});
