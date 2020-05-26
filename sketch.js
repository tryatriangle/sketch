//static
let container_Div = document.querySelector("#container");

//leaving these in the JavaScript as I'll change them to vars later so user can alter grid size
container_Div.style.width = "320px";
container_Div.style.height = "320px";


    function loadDivs (){

        for (let i = 0; i < 256; i++){

            let colourDivs = document.createElement("div");

            colourDivs.id = "fillerDivs";

            colourDivs.classList.add("fillerDivs");

        container_Div.appendChild(colourDivs);
    }
};

loadDivs();

window.onload = function makeSketch (){

    this.document.querySelectorAll(".fillerDivs").forEach(item => {


        item.addEventListener("mouseover", function( event ) {
    
            event.target.style.background = "orange";
    
            setTimeout( function() {
                event.target.style.background = "";
            }, 2000);
    
        }, false);

    })

}