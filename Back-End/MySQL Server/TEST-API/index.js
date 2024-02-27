const axios = require("axios");

axios.get("http://localhost:3000/users").then((res) => {
  //console.log(res.data.recordsets);
  var users = res.data.recordsets[0];
  // check user is array
  let userProfile = [];

  if (Array.isArray(users)) {
    users.forEach((user) => {
      console.log(user);
      userProfile.push(user);
      // add user to userProfile
    });
    console.log(userProfile);
    //console.log user 1 admin
    console.log(userProfile[0]);
  }
});
