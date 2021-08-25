// leanring to fetch data from an api

let apiList = document.getElementById("api-list");

// create error handler
function handleError(err) {
  console.log(`${err}`);
  // display error instead of api content
  createApiElement("li");
  newElement.style.color = "orange";
  newElement.textContent = err;
}

// helper function to create a new element
function createApiElement(element) {
  apiList.appendChild(document.createElement(element));
  newElement = document.getElementsByTagName(element)[0];
}

const endpoint = "https://randomuser.me/api/";

// // OPTION 1
// // displaying data from api using .then()-syntax

// // api url

// // fetch data from api
// const userPromise = fetch(endpoint);

// userPromise
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     // picture
//     const picture = data.results[0].picture.large;
//     createApiElement("img");
//     newElement.src = picture;

//     // email
//     const email = data.results[0].email;
//     createApiElement("li");

//     newElement.textContent = `-> user email: ${email}`;
//   })
//   .catch(handleError);

// OPTION 2 -> way to go
// displaying data from api using async await
async function displayUser() {
  const response = await fetch(endpoint);
  const data = await response.json();
  const picture = data.results[0].picture.large;

  // image
  createApiElement("img");
  newElement.src = picture;

  // email
  const email = data.results[0].email;
  createApiElement("li");
  newElement.textContent = `-> user email: ${email}`;
}

window.addEventListener("DOMContentLoaded", displayUser().catch(handleError));

// repetition
const url = "https://api.github.com/";

async function displayGit() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.current_user_url);
  } catch (err) {
    console.log(err);
  }
}

displayGit();
