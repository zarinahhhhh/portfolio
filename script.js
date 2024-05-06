const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY>120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

/*function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");
    if(menu.Btn.className === "nav-menu"){
        menuBtn.className += "responsive";
    }else{
        menu.Btn.className = "nav-menu";
    }
}*/

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};
