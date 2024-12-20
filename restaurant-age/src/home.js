import spagimg from "./images/spaghetti-with-ai-generated-free-png.png";
function home()
{
    content = document.querySelector("#content");

let websiteName = document.createElement("div");
websiteName.textContent = "Website Name";

let headline = document.createElement("div");
headline.textContent = "HEADLINE";

let imageContainer = document.createElement("div");
let spaghetti = document.createElement("img");
spaghetti.alt = "Spaghetti";
spaghetti.src = spagimg;
imageContainer.appendChild(spaghetti);

let bodyContent = document.createElement("div");
bodyContent.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
let footer = document.createElement("div");
footer.textContent = "Footer";

content.append(websiteName,headline,imageContainer,bodyContent,footer);
}

export{home};