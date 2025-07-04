//

let menu = document.getElementById('menu');
let navbar = document.getElementById('navbar');

function fonksiyon1(){

    if(!navbar.classList.contains("pf")){
        menu.classList.add("pf")
        navbar.classList.add("pf");
        navbar.style.display = "flex";   
    }

    else{
        menu.classList.remove("pf");
        navbar.classList.remove("pf");
        navbar.style.display = "none";
    }

}

 window.addEventListener("resize", function () {

    if (window.innerWidth > 1375) {
        navbar.style.display = "flex";
    }
    
    else {
        navbar.style.display = ""; // CSS kontrol etsin
      }
});



menu.addEventListener("click", () => {
    fonksiyon1();
})


let object1 = document.getElementById("object1");
let object2 = document.getElementById("object2");
let object3 = document.getElementById("object3");
let object4 = document.getElementById("object4");
let object5 = document.getElementById("object5");
let object6 = document.getElementById("object6");

object1.addEventListener("click", () => {
    window.location.href = "index01.html"
});

object2.addEventListener("click", () => {
    window.location.href = "index001.html"
});


object3.addEventListener("click", () => {
    window.location.href = "index2.html"
});


object4.addEventListener("click", () => {
    window.location.href = "index3.html"
});


object5.addEventListener("click", () => {
    window.location.href = "index4.html"
});

object6.addEventListener("click", () => {
    window.location.href = "index5.html"
});
