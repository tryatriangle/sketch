let container_Div = document.querySelector('#container');

container_Div.style.border = "1px solid black";
container_Div.style.width = "320px";
container_Div.style.height = "320px";
container_Div.style.display = "flex";
container_Div.style.flexFlow = "row wrap";


window.addEventListener("load", loadDivs);

    function loadDivs (){

        for (let i = 0; i < 256; i++){

            const fillerDivs = document.createElement("div");

            fillerDivs.classList.add("fillerDivs");

            fillerDivs.style.background = "gray";
            fillerDivs.style.height = "20px";
            fillerDivs.style.width = "20px";

        container_Div.appendChild(fillerDivs);

    }};