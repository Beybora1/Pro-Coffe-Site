//

let menu = document.getElementById('menu');
let navbar = document.getElementById('navbar');
let home = document.getElementById("log");

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
        navbar.style.display = "none"; // CSS kontrol etsin
      }
});

function fonksiyon2(){
    if (window.innerWidth < 1375) {
        navbar.style.display = "none";
    }
    
}


menu.addEventListener("click", () => {
    fonksiyon1();
})



fonksiyon2();
