const container = document.querySelector("#container");
let totalNumbersDivs = 20;

for (let i = 0; i < totalNumbersDivs; i++) {
    const content = document.createElement("div");
    content.classList.add("content");
    container.appendChild(content);
  }