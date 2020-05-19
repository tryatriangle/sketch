//static
let container_Div = document.querySelector("#container");
//created in JavaScript
let fillerDivs = document.getElementById("fillerDivs");

//leaving these in the JavaScript as I'll change them to vars later so user can alter grid size
container_Div.style.width = "320px";
container_Div.style.height = "320px";


    function loadDivs (){

        for (let i = 0; i < 256; i++){

            var fillerDivs = document.createElement("div");
            fillerDivs.id = "fillerDivs";

            fillerDivs.classList.add("fillerDivs");

        container_Div.appendChild(fillerDivs);
    }
};

loadDivs();

window.onload = function(){

    fillerDivs.addEventListener("mouseover", function( event ) {

        event.target.style.background = "orange";

        setTimeout( function() {
            event.target.style.background = "";
        }, 2000);

    }, false);

}



//just a test to make sure the above function works on static divs. (it does :|)

let tester = document.getElementById("tester");

  tester.addEventListener("mouseover", function( event ) {   

    event.target.style.background = "orange";
  

    setTimeout(function() {
      event.target.style.background = "";
    }, 2000);
  }, false);

  