const API_URL = "https://jsonplaceholder.typicode.com/users";
const output = document.getElementById("output");


function customForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}


document.getElementById("getUsers").addEventListener("click", () => {
  fetch(API_URL)
    .then(res => {
      console.log('[GET] ${API_URL} → ${res.status} OK');
      return res.json();
    })
    .then(users => {
      displayUsers(users);

      // Array.map
      const usernames = users.map(u => u.username);
      console.log("[Array.map] Displayed all usernames", usernames);

      // Object.keys
      console.log("[Object.keys] Extracted all user fields", Object.keys(users[0]));
    })
    .catch(err => console.error(err));
});


document.getElementById("addUser").addEventListener("click", () => {
  const newUser = { id: 11, name: "Alice" };
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(data => console.log("[POST] Add New User →", data))
    .catch(err => console.error(err));
});


document.getElementById("updateUser").addEventListener("click", () => {
  const updatedUser = { name: "Updated Name" };
  fetch(`${API_URL}/5`, {
    method: "PUT",
    body: JSON.stringify(updatedUser),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(() => console.log("[PUT] Update User ID 5 → Success"))
    .catch(err => console.error(err));
});


document.getElementById("deleteUser").addEventListener("click", () => {
  fetch(`${API_URL}/3`, { method: "DELETE" })
    .then(() => console.log("[DELETE] User ID 3 deleted"))
    .catch(err => console.error(err));
});


function displayUsers(users) {
  output.innerHTML = "";
  customForEach(users, (user) => {
    const div = document.createElement("div");
    div.classList.add("user");
    div.textContent = JSON.stringify({ id: user.id, name: user.name });
    output.appendChild(div);
  });
}


function promiseChainExample() {
  fetch(API_URL)
    .then(res => res.json())
    .then(users => {
      console.log("[Promise Chain] Fetched users");
      return users.filter(u => u.id <= 5);
    })
    .then(activeUsers => {
      console.log("[Promise Chain] Filtered active");
      displayUsers(activeUsers);
      console.log("[Promise Chain] Rendered to DOM");
    })
    .catch(err => console.error(err));
}


promiseChainExample();
