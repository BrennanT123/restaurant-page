
function about()
{
    content = document.querySelector("#content");

let websiteName = document.createElement("div");
websiteName.textContent = "Website Name";

let headline = document.createElement("div");
headline.textContent = "HEADLINE";


let bodyContent = document.createElement("div");
bodyContent.textContent = "This is the about section for the website";
let footer = document.createElement("div");
footer.textContent = "Footer";

content.append(websiteName,headline,bodyContent,footer);
}

export{about};