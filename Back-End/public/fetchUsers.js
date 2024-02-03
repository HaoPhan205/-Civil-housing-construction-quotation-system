fetch("http://localhost:3000/Users")
  .then((response) => {
    try {
      return response.json();
    } catch (error) {
      console.error("Error:", error);
    }
  })
  .then((data) => console.log(data))
  .catch((error) => {
    console.error("Error:", error);
  });
