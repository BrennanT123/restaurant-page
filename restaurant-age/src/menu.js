function menu()
{
content = document.querySelector("#content");

let websiteName = document.createElement("div");
websiteName.textContent = "Website Name";

let headline = document.createElement("div");
headline.textContent = "HEADLINE";

let menu = document.createElement("ul");

let menuItems = ['Spaghetti', 'Other Spaghetti', 'More Spaghetti', 'Even more spaghetti', 'Hamburger']

for(const item of menuItems)
{

    const li = document.createElement('li');
    li.textContent = item;
    menu.appendChild(li);
}
let footer = document.createElement("div");
footer.textContent = "Footer";

content.append(websiteName,headline,menu,footer);
}

export{menu};