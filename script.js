const nav_icon = document.querySelector("#nav_icon");
const nav_closeIcon = document.querySelector("#nav_closeIcon");
const navItem = document.getElementById("navItem");
const nav_link=document.querySelectorAll(".nav");
// navigation
nav_icon.addEventListener("click", () => {
   nav_closeIcon.style.display = "block";
   nav_icon.style.display = "none";
   navItem.classList.replace("nav_close", "nav_open");
});
nav_closeIcon.addEventListener("click", () => {
   nav_closeIcon.style.display = "none";
   nav_icon.style.display = "block";
   navItem.classList.replace("nav_open", "nav_close");
});

for(var i=0;i<nav_link.length;i++){

   nav_link[i].addEventListener("click",()=>{
      navItem.classList.replace("nav_open", "nav_close");
      nav_closeIcon.style.display = "none";
      nav_icon.style.display = "block";
      i++;
   })
   console.log(i)
   
}
